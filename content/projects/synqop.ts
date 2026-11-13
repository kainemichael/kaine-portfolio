import type { CaseStudy } from '../types';

/*
 * Synqop is a live product. Wording rules: "Product Designer", keep Hameed
 * Alabi's name, sample org Mindspark Inc, "participant" (not "student") and
 * "programme-operations software" (not "LMS"). No internal designs,
 * participant data, security details or finances.
 */
export const synqop: CaseStudy = {
  slug: 'synqop',
  title: 'Synqop',
  industry: 'B2B SaaS',
  tagline: 'Programme-operations software, designed end to end',
  summary:
    'Synqop helps organisations running cohort-based programmes see who needs follow-up, why, and what happened next.',
  rowDescription:
    'Admin, trainer and participant apps plus the brand, for a product now live in pre-pilot.',
  teaser: 'Programme-operations software for cohort-based programmes. Live in pre-pilot.',
  role: 'Product Designer',
  year: '2026',
  tags: ['Web app', 'Live'],
  meta: [
    { key: 'Team', value: 'With Hameed Alabi' },
    { key: 'Timeline', value: 'June 2026 to now' },
    { key: 'Status', value: 'Live, pre-pilot' },
  ],
  featured: true,
  cover: {
    src: 'covers/synqop',
    alt: 'Synqop programme overview on desktop and the Needs Attention list on mobile, with sample data.',
  },
  blocks: [
    {
      type: 'visual',
      image: {
        src: 'synqop/01-hero',
        alt: 'The Synqop admin programme overview on desktop and mobile, on a blue background. Sample data.',
      },
    },
    {
      type: 'text',
      label: 'Overview',
      heading: 'Leading product design on a live product',
      body: [
        'Synqop is programme-operations software for organisations that run cohort-based programmes. I lead its product design, from the admin, trainer and participant apps to the brand, working with Hameed Alabi, who leads product and operations and co-builds the product. V1 covers about 252 screens and states, each in desktop and mobile. This page shows a few decisions rather than the whole product; see it live at synqop.com.',
      ],
    },
    {
      type: 'text',
      label: 'Needs Attention',
      heading: 'A flag that always shows its reason',
      body: [
        'Needs Attention lists participants who may need follow-up, and every row says why: missed sessions, overdue work, no recent activity. A flag is a prompt for a person to check, not a judgement about someone. It closes with a note, and any contact is logged as an intervention.',
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'synqop/02-needs-attention',
        alt: 'The Needs Attention list on desktop and mobile, each row showing its reason. Sample data.',
      },
      caption: 'Needs Attention on desktop and mobile. Sample data.',
    },
    {
      type: 'text',
      label: 'Three roles',
      heading: 'One question per dashboard',
      items: [
        {
          title: 'Admin: what needs my attention?',
          body: 'Programme health, cohorts and the Needs Attention list on one screen.',
        },
        {
          title: 'Trainer: what do I deliver today?',
          body: 'Today’s sessions, attendance and the grading queue first.',
        },
        {
          title: 'Participant: what do I do next?',
          body: 'The next session, work due and progress against the completion rule.',
        },
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'synqop/03-three-roles',
        alt: 'The admin, trainer and participant home screens side by side. Sample data.',
      },
      caption: 'The admin, trainer and participant home screens. Sample data.',
    },
    {
      type: 'text',
      label: 'Honest data',
      heading: 'No data shows as a dash, never as a fake number',
      body: [
        'An audit of the earlier product found 100% attendance shown for zero sessions. In Synqop every metric is defined once and calculated on the server, and empty, loading and error states are designed as real screens, not afterthoughts.',
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'synqop/04-honest-data',
        alt: 'Empty, loading and partial-error states of the admin overview. Sample data.',
      },
      caption: 'Empty, loading and partial-error states of the admin overview. Sample data.',
    },
    {
      type: 'text',
      label: 'Destructive actions',
      heading: 'Deleting an organisation, slowly and on purpose',
      body: [
        'Only the owner can delete an organisation. They type its name, re-enter their password and confirm an export first. Deletion is then scheduled: a banner shows the date, the workspace turns read-only, and participants can still download their records.',
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'synqop/05-deleting-an-organisation',
        alt: 'The organisation deletion confirmation on desktop and mobile. Sample data.',
      },
      caption: 'Confirming an organisation deletion, on desktop and mobile. Sample data.',
    },
    {
      type: 'text',
      label: 'Brand',
      heading: 'A spark, made of space',
      body: [
        'The logo is four quarter-circle petals on a grid. Three carve a four-point spark between them; the fourth turns outward, like the participant who needs attention. I designed the identity and the marketing system around it: documents, emails, slides and social templates.',
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'synqop/06-brand',
        alt: 'A page from the Synqop logo guidelines showing the four-petal mark.',
      },
      caption: 'From the Synqop logo guidelines.',
    },
    {
      type: 'text',
      label: 'What’s next',
      heading: 'Learning with the first pilots',
      body: [
        'Synqop has been live in a pre-pilot state since November 2026. Next, the team will learn which follow-up rules actually predict people falling behind, and who the first customers are.',
      ],
    },
  ],
};
