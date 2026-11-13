import { SectionHeader } from '@/components/SectionHeader';
import { explorations, LANDING_EXPLORATION_COUNT } from '@/content/explorations';
import { sections } from '@/content/site';
import { ExplorationCard } from '@/sections/work/ExplorationCard';
import styles from './WorkSection.module.css';

export function Explorations() {
  const { title, description, link } = sections.explorations;
  const href = '/work/explorations/';

  return (
    <section className={styles.section} aria-labelledby="explorations">
      <SectionHeader
        id="explorations"
        title={title}
        description={description}
        link={{ label: link, href }}
      />
      <ul className={`${styles.grid} ${styles.three}`}>
        {explorations.slice(0, LANDING_EXPLORATION_COUNT).map((exploration) => (
          <li key={exploration.name}>
            <ExplorationCard exploration={exploration} />
          </li>
        ))}
      </ul>
      <SectionHeader.MobileLink label={link} href={href} />
    </section>
  );
}
