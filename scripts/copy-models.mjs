#!/usr/bin/env node
import { createWriteStream, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'fs';
import { pipeline } from 'stream/promises';
import { execSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { tmpdir } from 'os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

// 1. Read version from package-lock.json
const lock = JSON.parse(readFileSync(join(root, 'package-lock.json'), 'utf8'));
const version = lock.packages?.['node_modules/@imgly/background-removal']?.version;
if (!version) {
  console.error('Could not find @imgly/background-removal in package-lock.json');
  process.exit(1);
}
console.log(`Found @imgly/background-removal version: ${version}`);

// 2. Skip download if already extracted at this version
const versionFile = join(root, 'public', 'model', 'version.json');
if (existsSync(versionFile)) {
  const cached = JSON.parse(readFileSync(versionFile, 'utf8'));
  if (cached.version === version) {
    console.log('Models already up to date, skipping download.');
    process.exit(0);
  }
}

// 3. Download the data package tarball to a temp file
const url = `https://staticimgly.com/@imgly/background-removal-data/${version}/package.tgz`;
console.log(`Downloading ${url} ...`);

const res = await fetch(url);
if (!res.ok) throw new Error(`Download failed: ${res.status} ${res.statusText}`);

const tmpFile = join(tmpdir(), `imgly-models-${version}.tgz`);
await pipeline(res.body, createWriteStream(tmpFile));
console.log(`Saved to ${tmpFile}`);

// 4. Extract package/dist/* → public/model/
const dest = join(root, 'public', 'model');
mkdirSync(dest, { recursive: true });
console.log(`Extracting into ${dest} ...`);

execSync(`tar -xzf "${tmpFile}" -C "${dest}" --strip-components=2 "package/dist"`, {
  stdio: 'inherit',
});

// 5. Write version.json so next run can skip the download
writeFileSync(versionFile, JSON.stringify({ version }, null, 2) + '\n');

// 6. Clean up temp file
rmSync(tmpFile);
console.log('Done.');
