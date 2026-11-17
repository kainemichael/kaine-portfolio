/**
 * List or grid view for the Case studies tab. List is the default; a choice
 * of grid is remembered in localStorage and set on <html> as data-work-view.
 * Both layouts are in the page and CSS shows the active one, so a saved
 * choice never jumps after load.
 */
export type WorkView = 'list' | 'grid';

export const WORK_VIEW_STORAGE_KEY = 'work-view';

/** Runs before first paint (inlined in <body>), next to the theme script. */
export const workViewScript = `(() => {
  try {
    if (localStorage.getItem('${WORK_VIEW_STORAGE_KEY}') === 'grid') document.documentElement.dataset.workView = 'grid';
  } catch {}
})();`;

export function getWorkView(): WorkView {
  return document.documentElement.dataset.workView === 'grid' ? 'grid' : 'list';
}

export function setWorkView(view: WorkView) {
  const root = document.documentElement;
  if (view === 'grid') root.dataset.workView = 'grid';
  else delete root.dataset.workView;
  try {
    localStorage.setItem(WORK_VIEW_STORAGE_KEY, view);
  } catch {}
}

/** Keeps toggles in sync with the attribute on <html>. */
export function subscribeToWorkView(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributeFilter: ['data-work-view'] });
  return () => observer.disconnect();
}
