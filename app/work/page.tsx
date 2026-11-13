import type { Metadata } from 'next';
import { ProjectRow } from '@/components/ProjectRow';
import { caseStudies, caseStudyNumber } from '@/content/projects';
import { WorkHeader } from '@/sections/work/WorkHeader';
import styles from '@/sections/work/WorkLists.module.css';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Case studies in fintech, iGaming, B2B SaaS and developer tools.',
};

export default function WorkPage() {
  return (
    <>
      <WorkHeader active="case-studies" />
      <ul className={`container ${styles.rows}`} aria-label="Case studies">
        {caseStudies.map((project, index) => (
          <li key={project.slug}>
            <ProjectRow
              number={caseStudyNumber(project)}
              title={project.title}
              tagline={project.rowTagline ?? project.tagline}
              description={project.rowDescription}
              role={`${project.role} · ${project.year}`}
              industry={project.industry}
              tags={project.tags}
              image={project.cover}
              href={`/work/${project.slug}/`}
              priority={index === 0}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
