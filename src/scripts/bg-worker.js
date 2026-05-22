import { removeBackground } from '@imgly/background-removal';

self.onmessage = async (e) => {
  const { jobId, file } = e.data;
  try {
    const blob = await removeBackground(file, {
      progress: (key, current, total) => {
        self.postMessage({ type: 'progress', jobId, key, current, total });
      },
    });
    self.postMessage({ type: 'result', jobId, blob });
  } catch (err) {
    self.postMessage({
      type: 'error',
      jobId,
      message: err instanceof Error ? err.message : String(err),
    });
  }
};
