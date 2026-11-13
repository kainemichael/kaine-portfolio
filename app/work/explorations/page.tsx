import type { Metadata } from 'next';
import { explorations } from '@/content/explorations';
import { ExplorationCard } from '@/sections/work/ExplorationCard';
import { WorkHeader } from '@/sections/work/WorkHeader';
import styles from '@/sections/work/WorkLists.module.css';

export const metadata: Metadata = {
  title: 'Explorations',
  description: 'Smaller UI studies and concepts.',
};

export default function ExplorationsPage() {
  return (
    <>
      <WorkHeader active="explorations" />
      <ul className={`container ${styles.grid}`} aria-label="Explorations">
        {explorations.map((exploration) => (
          <li key={exploration.name}>
            <ExplorationCard exploration={exploration} />
          </li>
        ))}
      </ul>
    </>
  );
}
