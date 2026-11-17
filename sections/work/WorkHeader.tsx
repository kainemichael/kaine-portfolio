import { Tag } from '@/components/Tag';
import { ViewToggle } from '@/components/ViewToggle';
import { workPage } from '@/content/site';
import styles from './WorkHeader.module.css';

export type WorkTab = 'case-studies' | 'explorations';

const tabs: { id: WorkTab; label: string; href: string }[] = [
  { id: 'case-studies', label: 'Case studies', href: '/work/' },
  { id: 'explorations', label: 'Explorations', href: '/work/explorations/' },
];

/** Page title, intro, the two tabs and (on Case studies) the list/grid toggle. Each tab is its own URL, so links can open either one. */
export function WorkHeader({ active }: { active: WorkTab }) {
  return (
    <header className={`container ${styles.header}`}>
      <h1 className={styles.title}>{workPage.title}</h1>
      <p className={styles.intro}>{workPage.intro}</p>
      <div className={styles.controls}>
        <nav aria-label="Work sections">
          <ul className={styles.tabs}>
            {tabs.map((tab) => (
              <li key={tab.id}>
                <Tag
                  label={tab.label}
                  href={tab.href}
                  variant={tab.id === active ? 'active' : 'neutral'}
                />
              </li>
            ))}
          </ul>
        </nav>
        {active === 'case-studies' && <ViewToggle />}
      </div>
    </header>
  );
}
