import { patterns, type PatternName } from './shapes';
import styles from './BrandPattern.module.css';

type BrandPatternProps = {
  /** band: two rows across the full width (footer). field: a dense block (CTA panel). */
  pattern: PatternName;
  className?: string;
};

/**
 * The geometric brand pattern, drawn inline so its colours follow the theme.
 * Set --pattern-ink on a parent to change the ink colour (defaults to text/primary).
 * Fills its box and crops from the centre, like background-size: cover.
 */
export function BrandPattern({ pattern, className }: BrandPatternProps) {
  const { viewBox, shapes } = patterns[pattern];

  return (
    <svg
      className={`${styles.pattern} ${className ?? ''}`}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      {shapes.map(([tone, d]) => (
        <path key={d} d={d} className={styles[tone]} />
      ))}
    </svg>
  );
}
