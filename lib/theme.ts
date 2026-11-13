/**
 * Theme handling. The site follows the visitor's system setting.
 * Runs before first paint (inlined in <body>) so there is no flash of the wrong theme.
 */
export const themeScript = `(() => {
  const query = matchMedia('(prefers-color-scheme: dark)');
  const apply = () => {
    document.documentElement.dataset.theme = query.matches ? 'dark' : 'light';
  };
  apply();
  query.addEventListener('change', apply);
})();`;
