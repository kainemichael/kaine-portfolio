import { TextBlock } from '@/components/TextBlock';
import { Visual } from '@/components/Visual';
import type { Block } from '@/content/types';
import styles from './CaseStudyBody.module.css';

/** Renders a case study's blocks in order. Add a new block type here and in content/types.ts. */
export function CaseStudyBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className={`container ${styles.body}`}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'text':
            return <TextBlock key={index} {...block} />;
          case 'visual':
            return (
              <Visual
                key={index}
                image={block.image}
                caption={block.caption}
                priority={index === 0}
              />
            );
        }
      })}
    </div>
  );
}
