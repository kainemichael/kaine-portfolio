import { About } from '@/sections/landing/About';
import { CaseStudies } from '@/sections/landing/CaseStudies';
import { Contact } from '@/sections/landing/Contact';
import { Explorations } from '@/sections/landing/Explorations';
import { Hero } from '@/sections/landing/Hero';
import { SideProjects } from '@/sections/landing/SideProjects';
import styles from './page.module.css';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <div className={`container ${styles.work}`}>
        <CaseStudies />
        <Explorations />
        <SideProjects />
      </div>
      <About />
      <Contact />
    </>
  );
}
