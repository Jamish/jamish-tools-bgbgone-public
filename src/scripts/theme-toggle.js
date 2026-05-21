// Theme toggle script: persists in localStorage and applies data-theme on documentElement
(function(){
  const key = 'site-theme';
  const toggle = document.getElementById('themeToggle');
  /** @param {'dark'|'light'} t */
  const setTheme = (t) => {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem(key, t);
    if(toggle) toggle.textContent = t === 'dark' ? '🌙' : '☀️';
  };
  const stored = localStorage.getItem(key);
  if(stored) setTheme(stored);
  else {
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    setTheme(prefersLight ? 'light' : 'dark');
  }
  if(toggle) toggle.addEventListener('click', () => {
    const now = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(now);
  });
})();
