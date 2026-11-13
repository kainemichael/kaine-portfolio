'use client';

import { useEffect, type ReactNode } from 'react';

/** Becomes true after the first page has rendered, so only later page changes animate. */
let hasRendered = false;

/**
 * Next.js re-mounts this template on every page change. The first page
 * appears without animation (so it shows as fast as possible); every page
 * after that fades in with the `.page-enter` animation from globals.css.
 */
export default function Template({ children }: { children: ReactNode }) {
  const animate = hasRendered;

  useEffect(() => {
    hasRendered = true;
  }, []);

  return <div className={animate ? 'page-enter' : undefined}>{children}</div>;
}
