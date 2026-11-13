import type { CaseStudy } from '../types';

export const kestrel: CaseStudy = {
  slug: 'kestrel',
  title: 'Kestrel',
  industry: 'DevTools · Fintech',
  tagline: 'A usage and spend console that catches a leaked key before the invoice does',
  rowTagline: 'Catching a leaked key before the invoice does',
  summary:
    'Kestrel helps developer teams on usage-based pricing notice a spike, understand it and stop it, without breaking their own services.',
  rowDescription:
    'A usage and spend console for developer platforms: notice a spike, understand it, stop it.',
  teaser: 'A usage and spend console that catches a leaked key before the invoice does.',
  role: 'Product designer',
  year: '2026',
  tags: ['Web app', 'Concept'],
  meta: [
    { key: 'Type', value: 'Self-initiated concept' },
    { key: 'Platform', value: 'Web app and mobile' },
    { key: 'Year', value: '2026' },
  ],
  cover: {
    src: 'covers/kestrel',
    alt: 'The Kestrel console on desktop and mobile, showing a usage spike in the spend chart.',
  },
  blocks: [
    {
      type: 'visual',
      image: {
        src: 'kestrel/01-hero',
        alt: 'The Kestrel overview on desktop with a spend chart spike, and the mobile app beside it.',
      },
    },
    {
      type: 'text',
      label: 'Overview',
      heading: 'Designed around one bad hour',
      body: [
        'On usage-based pricing, a leaked key or a runaway script is a bill, not just a breach, and most teams find out from the invoice. Kestrel is a self-initiated concept for the console that catches it first. I designed the product, its brand and its design system: 23 screens across desktop, dark mode and mobile, all following one spike from alert to incident record.',
      ],
    },
    {
      type: 'text',
      label: 'Notice',
      heading: 'A calm overview, so a spike is the loudest thing on it',
      items: [
        {
          title: 'Budget and forecast first',
          body: 'Spend so far, the forecast to month end, and which keys drive the cost.',
        },
        {
          title: 'Only the numbers change colour',
          body: 'When a spike starts, a banner says which key, how many times its usual rate, and the cost so far.',
        },
        {
          title: 'Judged against its own pattern',
          body: 'Each key is compared with its usual traffic by hour and weekday, not one global limit.',
        },
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'kestrel/02-notice',
        alt: 'The Kestrel overview with a spike banner above the spend chart. Sample data.',
      },
      caption: 'The overview the moment a spike is detected. Sample data.',
    },
    {
      type: 'text',
      label: 'Understand',
      heading: 'Everything you need to decide, on one screen',
      items: [
        {
          title: 'What changed, in plain words',
          body: 'Rate now, extra cost so far, and what it costs per hour if it keeps going.',
        },
        {
          title: 'Where it comes from',
          body: 'New IP ranges this key has never used, next to the one your own service uses.',
        },
        {
          title: 'A possible cause, said carefully',
          body: '“Looks like a leaked key”, with the evidence beside it, never a verdict.',
        },
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'kestrel/03-understand',
        alt: 'The spike investigation screen for the prod-ingest key, with rate, cost and sources.',
      },
      caption: 'Investigating a spike on prod-ingest.',
    },
    {
      type: 'text',
      label: 'Contain',
      heading: 'Three ways to stop it, with what each one breaks',
      items: [
        {
          title: 'Limit to 2× usual, recommended',
          body: 'Your services keep running, and the extra traffic gets a 429.',
        },
        {
          title: 'Allow known sources only',
          body: 'Blocks the new IP ranges and leaves your own traffic alone.',
        },
        {
          title: 'Pause, with the cost shown',
          body: 'Pausing breaks ingest-worker and webhook-relay, and the dialog says so first.',
        },
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'kestrel/04-contain',
        alt: 'The contain dialog with three options: limit, allow known sources, or pause.',
      },
      caption: 'Choosing how much to stop.',
    },
    {
      type: 'text',
      label: 'Contained',
      heading: 'Contained is not finished',
      items: [
        {
          title: 'Proof on the chart',
          body: 'The bars drop to the limit from the minute it was applied.',
        },
        {
          title: 'The next step, right there',
          body: 'Rotate the key, so the leaked one stops working everywhere.',
        },
        {
          title: 'Undo is one click',
          body: 'Remove limit sits in the header, in case the spike was a real launch.',
        },
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'kestrel/05-contained',
        alt: 'The chart after the limit is applied, with a prompt to rotate the key.',
      },
      caption: 'After the limit, with the next step prompted.',
    },
    {
      type: 'text',
      label: 'Prevent',
      heading: 'Decide what happens before the invoice does',
      items: [
        {
          title: 'A budget with consequences',
          body: 'Notify at 50% and 80%, then limit every key to its usual rate at 100%.',
        },
        {
          title: 'Rules in plain language',
          body: '“New sources and 3× usual, limit to 2×” reads like the thing it does.',
        },
        {
          title: 'Alerts where people already are',
          body: 'Slack, email, PagerDuty or a webhook.',
        },
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'kestrel/06-prevent',
        alt: 'Budget settings and spike rules written in plain language.',
      },
      caption: 'Budgets and spike rules.',
    },
    {
      type: 'text',
      label: 'API keys',
      heading: 'Keys that leak quietly get flagged loudly',
      items: [
        {
          title: 'Unused keys surface first',
          body: 'Two keys with no traffic for 30+ days, one of them with every scope.',
        },
        {
          title: 'Status in one word',
          body: 'Limited, Active, Expires in 6 days, Unused.',
        },
        {
          title: 'Spend per key',
          body: 'So the most expensive key is also the most watched.',
        },
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'kestrel/07-api-keys',
        alt: 'The API keys table with unused keys flagged at the top.',
      },
      caption: 'API keys, with unused keys flagged.',
    },
    {
      type: 'text',
      label: 'Record',
      heading: 'What happened, what it cost, what changes now',
      items: [
        {
          title: 'Written for the next person',
          body: 'Time to contain, extra cost, cost avoided and requests refused, up top.',
        },
        {
          title: 'A timeline with names',
          body: 'Who did what and when, from the first request to the revoked key.',
        },
        {
          title: 'Follow-ups with owners',
          body: 'Each one with a person and a date.',
        },
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'kestrel/08-record',
        alt: 'The incident record with a summary, a timeline and follow-ups.',
      },
      caption: 'The incident record.',
    },
    {
      type: 'text',
      label: 'Roles',
      heading: 'Cost and control, split on purpose',
      items: [
        {
          title: 'Finance sees spend, not keys',
          body: 'Costs and invoices without the power to break production.',
        },
        {
          title: 'Developers can contain',
          body: 'Limit or pause a key without touching budgets.',
        },
        {
          title: 'One matrix, no surprises',
          body: 'Six permissions across five roles, on one screen.',
        },
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'kestrel/09-roles',
        alt: 'The team and roles screen with a permissions matrix.',
      },
      caption: 'Team and roles.',
    },
    {
      type: 'text',
      label: 'On call',
      heading: 'On call, from the lock screen',
      items: [
        {
          title: 'The alert carries the decision',
          body: 'Rate, sources and cost per hour in the notification, with Contain beside it.',
        },
        {
          title: 'Same three choices',
          body: 'The contain sheet mirrors desktop, with the safest option first.',
        },
        {
          title: 'The whole console, smaller',
          body: 'Overview, keys, budgets and incidents, with a tab bar for one hand.',
        },
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'kestrel/10-on-call',
        alt: 'Mobile screens: a lock-screen alert, the spike, the contain sheet, overview and keys.',
      },
      caption: 'Lock-screen alert, spike, contain sheet, overview and keys on mobile.',
    },
    {
      type: 'text',
      label: 'Dark mode',
      heading: 'A dark mode built from the same tokens',
      items: [
        {
          title: 'Every colour is a variable',
          body: 'Light and dark are two modes of one set, so screens switch without redrawing.',
        },
        {
          title: 'Alerts stay readable',
          body: 'The alert red is lifted in dark so it reads on near-black.',
        },
        {
          title: 'The mark follows',
          body: 'The kestrel’s head and the wordmark change with the theme.',
        },
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'kestrel/11-dark-mode',
        alt: 'The spike investigation screen in dark mode.',
      },
      caption: 'Investigating a spike in dark mode.',
    },
    {
      type: 'text',
      label: 'Brand',
      heading: 'A kestrel, folded from paper',
      items: [
        {
          title: 'Hovering, head down',
          body: 'A kestrel holds still in the wind and watches for small movements. That is the product.',
        },
        {
          title: 'Facets, not illustration',
          body: 'Flat folded planes in rufous and slate, sharp at 16 px.',
        },
        {
          title: 'Instrument Sans and DM Mono',
          body: 'A calm sans for the interface, a mono for anything you compare.',
        },
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'kestrel/12-brand',
        alt: 'Three folded-paper kestrel mark explorations, with Direction A, Hover, chosen.',
      },
      caption: 'Mark explorations. Direction A, Hover, was chosen.',
    },
    {
      type: 'text',
      label: 'What I would test next',
      heading: 'Finding out which numbers people trust',
      body: [
        'Kestrel is a concept, so nothing here has been measured. With real teams I would test whether 2× usual is the limit people actually pick, whether the cost-per-hour figure speeds up the decision, and how many false alarms a team accepts before muting a rule.',
      ],
    },
  ],
};
