import Link from 'next/link';
import { MetaItem } from '@/components/MetaItem';
import type { CaseStudy } from '@/content/types';
import styles from './CaseStudyHero.module.css';

/** Back link, project name in its accent colour (set on the page), tagline, summary and meta (Role and Industry first). */
export function CaseStudyHero({ project }: { project: CaseStudy }) {
  const meta = [
    { key: 'Role', value: project.role },
    { key: 'Industry', value: project.industry },
    ...project.meta,
  ];

  return (
    <header className={`container ${styles.hero}`}>
      <Link href="/work/" className={styles.back}>
        <span aria-hidden="true">←</span> All work
      </Link>
      <p className={styles.project}>{project.title}</p>
      <h1 className={styles.tagline}>{project.tagline}</h1>
      <p className={styles.summary}>{project.summary}</p>
      <dl className={styles.meta}>
        {meta.map((item) => (
          <MetaItem key={item.key} label={item.key} value={item.value} />
        ))}
      </dl>
    </header>
  );
}
