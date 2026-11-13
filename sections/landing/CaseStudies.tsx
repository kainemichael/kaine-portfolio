import { SectionHeader } from '@/components/SectionHeader';
import { WorkCard } from '@/components/WorkCard';
import { caseStudyNumber, featuredCaseStudies } from '@/content/projects';
import { sections } from '@/content/site';
import styles from './WorkSection.module.css';

export function CaseStudies() {
  const { title, description, link } = sections.caseStudies;
  const href = '/work/';

  return (
    <section className={styles.section} aria-labelledby="case-studies">
      <SectionHeader
        id="case-studies"
        title={title}
        description={description}
        link={{ label: link, href }}
      />
      <ul className={`${styles.grid} ${styles.two}`}>
        {featuredCaseStudies.map((project) => (
          <li key={project.slug}>
            <WorkCard
              type="case-study"
              number={caseStudyNumber(project)}
              title={project.title}
              kind={project.industry}
              image={project.cover}
              href={`/work/${project.slug}/`}
              sizes="(max-width: 767px) 100vw, 630px"
            />
          </li>
        ))}
      </ul>
      <SectionHeader.MobileLink label={link} href={href} />
    </section>
  );
}
