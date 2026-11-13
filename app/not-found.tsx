import { Button } from '@/components/Button';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <section className={`container ${styles.page}`}>
      <h1 className={styles.title}>This page doesn’t exist</h1>
      <p className={styles.body}>The link may be old, or the address has a typo.</p>
      <Button href="/">Back home</Button>
    </section>
  );
}
