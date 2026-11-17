import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextProject } from '@/components/NextProject';
import { caseStudies, getCaseStudy, nextCaseStudy } from '@/content/projects';
import { CaseStudyBody } from '@/sections/case-study/CaseStudyBody';
import { CaseStudyHero } from '@/sections/case-study/CaseStudyHero';

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getCaseStudy((await params).slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: `${project.title}: ${project.tagline}`, description: project.summary },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const project = getCaseStudy((await params).slug);
  if (!project) notFound();

  const next = nextCaseStudy(project);

  return (
    <article
      // Every accent on the page (project name, section labels, list numbers) uses the project's colour.
      // Falls back to the primary text colour when a project has no accent variable.
      style={
        {
          '--project-accent': `var(--accent-${project.slug}, var(--text-primary))`,
        } as React.CSSProperties
      }
    >
      <CaseStudyHero project={project} />
      <CaseStudyBody blocks={project.blocks} />
      <NextProject
        title={next.title}
        description={next.teaser}
        image={next.cover}
        href={`/work/${next.slug}/`}
      />
    </article>
  );
}
