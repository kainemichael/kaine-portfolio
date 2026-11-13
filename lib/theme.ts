/**
 * Theme handling.
 *
 * The site follows the visitor's system setting. A page can force a theme
 * (Orbitfi is designed dark) by rendering <meta name="theme-override">,
 * which `generateMetadata` does for projects with `theme` set.
 */
export const THEME_META_NAME = 'theme-override';

export type Theme = 'light' | 'dark';

/** Runs before first paint (inlined in <head>) so there is no flash of the wrong theme. */
export const themeScript = `(() => {
  const apply = () => {
    const override = document.querySelector('meta[name="${THEME_META_NAME}"]')?.content;
    const system = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.dataset.theme = override || system;
  };
  apply();
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', apply);
  window.__applyTheme = apply;
})();`;
