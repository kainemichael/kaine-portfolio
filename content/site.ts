/** Site-wide content: who, where, how to get in touch. */
export const site = {
  name: 'Michael Kaine',
  role: 'Product designer, Malta',
  /** Set NEXT_PUBLIC_SITE_URL when deploying, so share previews use absolute URLs. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  description:
    'Michael Kaine designs careful products for startups and SaaS teams, and builds their sites in Framer.',
  email: 'kainemichael4@gmail.com',
  location: 'Based in Malta',
  /** Leave `href` empty to hide a link until it is ready. */
  socials: [
    { label: 'LinkedIn', href: '' },
    { label: 'X', href: '' },
    { label: 'Dribbble', href: '' },
  ],
};

export const hero = {
  kicker: 'Product designer and Framer developer, based in Malta',
  kickerShort: 'Product designer and Framer developer',
  heading:
    'I design careful products for startups and SaaS teams, and build their sites in Framer.',
  intro:
    'I’m Michael. I take products from the first flow to a finished interface, with a design system underneath it and a live site when it helps.',
};

export const sections = {
  caseStudies: {
    title: 'Case studies',
    description: 'End-to-end product work, from the problem to the shipped interface.',
    link: 'See all case studies',
  },
  explorations: {
    title: 'Explorations',
    description: 'Smaller UI studies and concepts I design to try ideas out.',
    link: 'View all explorations',
  },
  sideProjects: {
    title: 'Side projects',
    description: 'Tools and experiments I build on the side, not always design.',
  },
};

export const about = {
  label: 'About',
  heading: 'Design first, then build',
  body: 'I’ve designed web and product experiences for years, most recently at Ennoble Technologies & Robotics. Today I work freelance with startups, SaaS teams and agencies, and build in Framer when a project needs a live site. I recently moved to Malta from Lagos.',
  services: ['Product design', 'UI design', 'Design systems', 'Framer development'],
};

export const contact = {
  heading: 'Have something that needs designing? Let’s talk.',
};

export const workPage = {
  title: 'Work',
  intro: 'Case studies that go deep on one hard moment, and smaller explorations of single flows.',
};
