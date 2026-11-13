import type { CaseStudy } from '../types';

export const rivo: CaseStudy = {
  slug: 'rivo',
  title: 'Rivo',
  industry: 'Fintech',
  tagline: 'Paying the right person before the money moves',
  summary:
    'An everyday EU money app concept, designed around the new name check on instant transfers.',
  rowDescription:
    'An everyday EU money app concept built around the new name check on instant transfers.',
  teaser:
    'An everyday EU money app concept, designed around the new name check on instant transfers.',
  role: 'Product designer',
  year: '2026',
  tags: ['iOS', 'Concept'],
  meta: [
    { key: 'Type', value: 'Concept project' },
    { key: 'Platform', value: 'iOS' },
    { key: 'Year', value: '2026' },
  ],
  featured: true,
  cover: {
    src: 'covers/rivo',
    alt: 'Rivo on two phones: a payee name check and the home screen with a euro balance.',
  },
  blocks: [
    {
      type: 'visual',
      image: {
        src: 'rivo/01-hero',
        alt: 'Rivo app screens on a green background, showing the home screen and a payment review.',
      },
    },
    {
      type: 'text',
      label: 'Overview',
      heading: 'A money app built around one new rule',
      body: [
        'Since October 2025, banks in the euro area must check the payee’s name before an instant transfer goes out. Instant transfers arrive in seconds and can’t be pulled back, so that check is the last chance to catch a mistake.',
        'I designed Rivo as a full everyday money app, then focused the case study on the moment the check returns something other than a clean match.',
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'rivo/02-four-results',
        alt: 'Four payment review screens: match, close match, no match and check unavailable.',
      },
      caption: 'The four results a bank can return, and how Rivo responds to each.',
    },
    {
      type: 'text',
      label: 'The problem',
      heading: 'The risky case is the close one',
      body: [
        'A clear match needs no attention and a clear mismatch is easy to stop. The hard case is a close match: one letter off, same IBAN. It could be a typo, or a different person.',
        'If someone pays after a warning and the money reaches the wrong person, they may not get it back. The design has to make that risk clear at that moment, without slowing down every other payment.',
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'rivo/03-edge-case',
        alt: 'A close match: “Maria” as typed next to “Marija” as the bank has it.',
      },
      caption: 'Maria, as typed. Marija, as their bank has it.',
    },
    {
      type: 'text',
      label: 'Design decisions',
      heading: 'Quiet when it’s right, clear when it isn’t',
      items: [
        {
          title: 'A match doesn’t interrupt',
          body: '“Name verified” sits under the payee on the review screen. No extra step, no extra sheet.',
        },
        {
          title: 'On a close match, the bank’s spelling is the default',
          body: 'Both names are shown with the different letter highlighted. Paying the name on the account is the main button.',
        },
        {
          title: 'No match stops the payment without guessing',
          body: 'The bank gives no name on a no match, so neither does Rivo. Editing the details comes first.',
        },
        {
          title: 'Every override path carries the same liability line',
          body: 'Keeping your spelling or paying anyway stays possible, with the risk written in plain words.',
        },
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'rivo/04-flow',
        alt: 'The payment flow from entering details to comparing names and approving.',
      },
      caption:
        'Enter details, compare names, approve. The approval repeats the amount and the payee.',
    },
    {
      type: 'text',
      label: 'After approval',
      heading: 'Every outcome says where the money is',
      body: [
        'Only a delivered payment gets the green brand moment. Waiting and returned payments stay calm and neutral, and always say what happens to the money next.',
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'rivo/05-outcomes',
        alt: 'Three payment outcome screens: taking longer, delivered and returned.',
      },
      caption: 'Taking longer, delivered and returned.',
    },
    {
      type: 'text',
      label: 'Beyond sending',
      heading: 'The rest of the everyday app',
      body: [
        'A card you can freeze in one tap, scheduled payments, splitting a bill and activity with insights.',
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'rivo/06-everyday-app',
        alt: 'Rivo screens for the card, scheduled payments, bill splitting and activity insights.',
      },
    },
    {
      type: 'text',
      label: 'Brand',
      heading: 'A mark that is the check itself',
      body: [
        'The Seal is a shield outline closed by a tick. It reads as “checked” before it reads as a logo, which is the promise of the product.',
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'rivo/07-brand',
        alt: 'The Rivo wordmark and Seal logo on dark green, with the brand colour palette.',
      },
    },
    {
      type: 'text',
      label: 'Reflection',
      heading: 'What I’d test next',
      body: [
        'Rivo is a concept, so there are no results to report. These are the questions I’d take into a first round of usability testing.',
      ],
      items: [
        {
          title: 'Is the default actually chosen?',
          body: 'Or do people skim the comparison and keep their own spelling?',
        },
        {
          title: 'Is the difference visible?',
          body: 'For longer names, initials and names in other scripts.',
        },
        {
          title: 'Is the liability line understood?',
          body: 'Can people explain, in their own words, what happens if they pay a name that doesn’t match?',
        },
      ],
    },
  ],
};
