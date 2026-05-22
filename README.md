# bgbgone

Try it at https://bgbgone.jami.sh

Background Begone! A quick and dirty web tool for removing backgrounds.

Your images are processed entirely in your browser — nothing is sent to any server. Processing time depends on your hardware.

Built using [imgly/background-removal-js](https://github.com/imgly/background-removal-js) (AGPL-3.0)

## Repo Setup

I have a private repo with identical code, just so I don't have to expose my Vercel connections and preview builds.

Both are kept in lockstep using:
```bash
git remote set-url --add --push origin https://github.com/Jamish/jamish-tools-bgbgone.git

git remote set-url --add --push origin https://github.com/Jamish/jamish-tools-bgbgone-public.git
```



## dev server
```sh
npm run dev
```

## or production build + preview
```sh
npm run build
npm run preview
```

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
