import { SectionHeader } from '@/components/SectionHeader';
import { SideProjectCard } from '@/components/SideProjectCard';
import { sideProjects } from '@/content/side-projects';
import { sections } from '@/content/site';
import styles from './WorkSection.module.css';

export function SideProjects() {
  const { title, description } = sections.sideProjects;

  return (
    <section className={styles.section} aria-labelledby="side-projects">
      <SectionHeader id="side-projects" title={title} description={description} />
      <ul className={`${styles.grid} ${styles.two}`}>
        {sideProjects.map((project) => (
          <li key={project.title}>
            <SideProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
