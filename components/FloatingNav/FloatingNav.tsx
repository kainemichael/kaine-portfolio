'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NavItem } from '../NavItem';
import { ThemeToggle } from '../ThemeToggle';
import styles from './FloatingNav.module.css';

const ABOUT_ID = 'about';

/** Home · Work · About, then the theme toggle. About lights up while the About section is on screen. */
export function FloatingNav() {
  const pathname = usePathname();
  const aboutInView = useSectionInView(ABOUT_ID, pathname === '/');

  const active = pathname.startsWith('/work')
    ? 'work'
    : aboutInView
      ? 'about'
      : pathname === '/'
        ? 'home'
        : null;

  return (
    <nav className={styles.nav} aria-label="Main">
      <NavItem label="Home" icon="home" href="/" active={active === 'home'} collapseLabel />
      <NavItem label="Work" icon="work" href="/work/" active={active === 'work'} collapseLabel />
      <NavItem
        label="About"
        icon="about"
        href={`/#${ABOUT_ID}`}
        active={active === 'about'}
        collapseLabel
      />
      <span className={styles.divider} aria-hidden="true" />
      <ThemeToggle />
    </nav>
  );
}

function useSectionInView(id: string, enabled: boolean) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const section = enabled ? document.getElementById(id) : null;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(Boolean(entry?.isIntersecting)),
      {
        rootMargin: '-40% 0px -40% 0px',
      },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [id, enabled]);

  return enabled && inView;
}
