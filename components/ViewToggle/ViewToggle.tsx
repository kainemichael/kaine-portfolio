'use client';

import { useSyncExternalStore } from 'react';
import { getWorkView, setWorkView, subscribeToWorkView, type WorkView } from '@/lib/work-view';
import { Icon } from '../Icon';
import styles from './ViewToggle.module.css';

const options: { view: WorkView; label: string; icon: 'list' | 'grid' }[] = [
  { view: 'list', label: 'List view', icon: 'list' },
  { view: 'grid', label: 'Grid view', icon: 'grid' },
];

/** Two icon buttons in a pill: list or grid. Used on the Case studies tab. */
export function ViewToggle() {
  const current = useSyncExternalStore<WorkView>(subscribeToWorkView, getWorkView, () => 'list');

  return (
    <div className={styles.toggle} role="group" aria-label="Layout">
      {options.map((option) => (
        <button
          key={option.view}
          type="button"
          className={styles.option}
          aria-pressed={current === option.view}
          aria-label={option.label}
          title={option.label}
          onClick={() => setWorkView(option.view)}
        >
          <Icon name={option.icon} size={18} />
        </button>
      ))}
    </div>
  );
}
