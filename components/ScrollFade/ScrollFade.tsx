import styles from './ScrollFade.module.css';

type ScrollFadeProps = {
  position: 'top' | 'bottom';
};

/** Fades content out under the fixed bars. Uses bg/page, so it follows the theme. */
export function ScrollFade({ position }: ScrollFadeProps) {
  return <div className={`${styles.fade} ${styles[position]}`} aria-hidden="true" />;
}
