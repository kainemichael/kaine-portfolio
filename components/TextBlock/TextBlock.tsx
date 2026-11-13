import type { ListItem as ListItemData } from '@/content/types';
import { ListItem } from '../ListItem';
import styles from './TextBlock.module.css';

type TextBlockProps = {
  label: string;
  heading: string;
  body?: string[];
  items?: ListItemData[];
};

/** Orange label on the left, heading, paragraphs and an optional numbered list on the right. */
export function TextBlock({ label, heading, body = [], items = [] }: TextBlockProps) {
  return (
    <section className={styles.block}>
      <p className={styles.label}>{label}</p>
      <div className={styles.content}>
        <h2 className={styles.heading}>{heading}</h2>
        {body.length > 0 && (
          <div className={styles.body}>
            {body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        )}
        {items.length > 0 && (
          <ol className={styles.list}>
            {items.map((item, index) => (
              <ListItem key={item.title} number={String(index + 1).padStart(2, '0')} {...item} />
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
