import { WorkCard } from '@/components/WorkCard';
import { explorationNumber } from '@/content/explorations';
import type { Exploration } from '@/content/types';

/** Maps exploration data onto the Work card, so the landing page and Work page match. */
export function ExplorationCard({ exploration }: { exploration: Exploration }) {
  const { name, topic, industry, image } = exploration;

  return (
    <WorkCard
      type="exploration"
      number={explorationNumber(exploration)}
      title={topic ? `${name} · ${topic}` : name}
      kind={industry}
      image={image}
      placeholder={name}
      sizes="(max-width: 767px) 100vw, 413px"
    />
  );
}
