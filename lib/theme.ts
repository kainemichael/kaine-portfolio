/**
 * Theme handling. The site opens in light; the toggle in the floating nav
 * switches to dark and the choice is remembered in localStorage.
 */
export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'theme';

/** Runs before first paint (inlined in <body>) so a saved choice never flashes the wrong theme. */
export const themeScript = `(() => {
  let theme = 'light';
  try {
    if (localStorage.getItem('${THEME_STORAGE_KEY}') === 'dark') theme = 'dark';
  } catch {}
  document.documentElement.dataset.theme = theme;
})();`;

export function getTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage can be unavailable (private mode); the theme still applies for this visit.
  }
}

/** Calls `onChange` whenever the theme attribute changes, for useSyncExternalStore. */
export function subscribeToTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
}
