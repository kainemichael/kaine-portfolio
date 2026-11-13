import { Icon } from '../Icon';
import styles from './GetInTouch.module.css';

type GetInTouchProps = {
  email: string;
};

/** Floating email button. A labelled pill on desktop, a round mail icon on mobile. */
export function GetInTouch({ email }: GetInTouchProps) {
  return (
    <a
      className={styles.button}
      href={`mailto:${email}`}
      aria-label={`Get in touch: email ${email}`}
    >
      <span className={styles.label}>Get in touch</span>
      <span className={styles.desktopIcon}>
        <Icon name="arrow-up-right" size={16} />
      </span>
      <span className={styles.mobileIcon}>
        <Icon name="mail" size={20} />
      </span>
    </a>
  );
}
