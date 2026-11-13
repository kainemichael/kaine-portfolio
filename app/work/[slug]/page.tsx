import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextProject } from '@/components/NextProject';
import { caseStudies, getCaseStudy, nextCaseStudy } from '@/content/projects';
import { THEME_META_NAME } from '@/lib/theme';
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
    // Read by the theme script in the root layout (see lib/theme.ts).
    other: project.theme ? { [THEME_META_NAME]: project.theme } : undefined,
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const project = getCaseStudy((await params).slug);
  if (!project) notFound();

  const next = nextCaseStudy(project);

  return (
    <article>
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
