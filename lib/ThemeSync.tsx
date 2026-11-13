'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

declare global {
  interface Window {
    __applyTheme?: () => void;
  }
}

/** Re-applies the theme after client-side navigation, when a page's theme override may have changed. */
export function ThemeSync() {
  const pathname = usePathname();

  useEffect(() => {
    window.__applyTheme?.();
  }, [pathname]);

  return null;
}
