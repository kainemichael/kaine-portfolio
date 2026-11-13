'use client';

import { useSyncExternalStore } from 'react';
import { getTheme, subscribeToTheme, switchTheme, type Theme } from '@/lib/theme';
import { Icon } from '../Icon';
import styles from './ThemeToggle.module.css';

/** Moon in light mode, Sun in dark mode. Lives at the end of the floating nav. */
export function ThemeToggle() {
  const theme = useSyncExternalStore<Theme>(subscribeToTheme, getTheme, () => 'light');
  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={() => switchTheme(next)}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
    </button>
  );
}
