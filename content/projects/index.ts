import type { CaseStudy } from '../types';
import { kestrel } from './kestrel';
import { orbitfi } from './orbitfi';
import { rivo } from './rivo';
import { synqop } from './synqop';
import { vanta } from './vanta';

/**
 * Order matters: it sets the project numbers (01, 02…) and the
 * "Next project" chain, which loops from the last project back to the first.
 * To add a case study, create a file next to these and add it here.
 */
export const caseStudies: CaseStudy[] = [rivo, vanta, synqop, orbitfi, kestrel];

export const getCaseStudy = (slug: string) => caseStudies.find((p) => p.slug === slug);

/** "01", "02"… from the project's position in the list. */
export const caseStudyNumber = (project: CaseStudy) =>
  String(caseStudies.indexOf(project) + 1).padStart(2, '0');

export const nextCaseStudy = (project: CaseStudy): CaseStudy => {
  const index = caseStudies.indexOf(project);
  return caseStudies[(index + 1) % caseStudies.length] ?? project;
};

export const featuredCaseStudies = caseStudies.filter((p) => p.featured);
