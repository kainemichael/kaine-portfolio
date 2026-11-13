import type { CaseStudy } from '../types';

export const vanta: CaseStudy = {
  slug: 'vanta',
  title: 'Vanta',
  industry: 'iGaming',
  tagline: 'A sportsbook where your limits are as visible as the odds',
  summary:
    'A football betting app concept for Malta, designed around the player protection rules the regulator sets.',
  rowDescription:
    'From discovery to bet slip, cash-out and safer gambling touchpoints, with every edge case designed.',
  teaser:
    'A football betting app concept for Malta, designed around the player protection rules the regulator sets.',
  role: 'Product designer',
  year: '2026',
  tags: ['iOS', 'Concept'],
  meta: [
    { key: 'Platform', value: 'iOS' },
    { key: 'Market', value: 'Malta · MGA' },
    { key: 'Year', value: '2026' },
  ],
  cover: {
    src: 'covers/vanta',
    alt: 'Vanta betting app screens with a football fixture list and bet slip.',
  },
  blocks: [
    {
      type: 'visual',
      image: {
        src: 'vanta/01-hero',
        alt: 'Vanta app screens over a stadium photo, showing fixtures and a live match.',
      },
    },
    {
      type: 'text',
      label: 'Overview',
      heading: 'A sportsbook built around the rules, not around them',
      body: [
        'Vanta is a football betting app concept for Malta. The Malta Gaming Authority’s Player Protection Directive says what an app must do: confirm age, offer limits before the first deposit, explain the safer gambling tools and keep self-exclusion easy to find. I designed the full app and treated each rule as a design requirement instead of a line in the footer.',
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'vanta/02-sign-up',
        alt: 'Sign-up screens: welcome, agreements and setting a deposit limit.',
      },
      caption:
        'Welcome, agreements and the deposit limit step. Each sign-up step does a legal job.',
    },
    {
      type: 'text',
      label: 'The problem',
      heading: 'Most betting apps shout the offers and hide the limits',
      body: [
        'Promotions sit at the top of the screen, while deposit limits and breaks are buried several taps deep in settings. The design problem: keep betting quick, and keep the player’s own limits on screen at the moment they place a bet.',
      ],
    },
    {
      type: 'text',
      label: 'Design decisions',
      heading: 'A ledger, not a casino',
      items: [
        {
          title: 'Serif for names, mono for numbers',
          body: 'Teams read like a printed fixture list. Odds, times and money sit in a monospace, so columns line up and compare at a glance.',
        },
        {
          title: 'Blue only means “selected”',
          body: 'Blue marks your pick. Green and red only report facts after the event, like won, lost or your net for the week.',
        },
        {
          title: 'Your session is always on screen',
          body: 'Time played and what’s left this week sit above the tab bar on every list, with Limits one tap away.',
        },
        {
          title: 'Quick stakes stop at what’s left',
          body: 'The last quick stake is “Max €32”, the amount left in your weekly limit, not a bigger round number.',
        },
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'vanta/03-betting',
        alt: 'The match list, a live match and an accumulator bet slip.',
      },
      caption: 'The list, a live match and an accumulator slip.',
    },
    {
      type: 'text',
      label: 'When things change',
      heading: 'Nothing is placed without you',
      body: [
        'If the price moves, the slip shows the old and new odds and waits for you to accept. If a goal pauses the market, prices lock and the slip waits. If a bet fails, it says your balance wasn’t touched.',
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'vanta/04-edge-cases',
        alt: 'Bet slip states: odds changed, market paused and bet not placed.',
      },
      caption: 'Odds changed, market paused, bet not placed.',
    },
    {
      type: 'text',
      label: 'Cash-out',
      heading: 'The offer is shown against your stake',
      body: [
        '“Your stake €10.00, if it wins €14.20, difference +€1.60.” You see the trade, not just a big number. Settled bets open with staked, returned and net for the week, so losses are as visible as wins.',
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'vanta/05-cash-out',
        alt: 'A cash-out offer compared with the stake, and a settled bets summary for the week.',
      },
      caption: 'Cash-out shows the trade. Settled bets show the week.',
    },
    {
      type: 'text',
      label: 'Safer gambling',
      heading: 'The tools to stop are as easy to reach as the tools to bet',
      body: [
        'Limits, reminders, breaks and self-exclusion live in one hub, opened from Limits on every list. After an hour of play, a check-in shows time, stakes and net. At the weekly limit, prices lock and the app says when betting reopens.',
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'vanta/06-safer-gambling',
        alt: 'The safer gambling hub, an hourly check-in and the weekly limit reached screen.',
      },
      caption: 'The tools hub, the hourly check-in, and the weekly limit reached.',
    },
    {
      type: 'text',
      label: 'Brand',
      heading: 'A wordmark with a centre spot in every Λ',
      body: [
        'The A loses its crossbar and gains the centre spot of a pitch. Blue appears only in the spots, the same blue that marks a pick in the app.',
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'vanta/07-brand',
        alt: 'The VANTA wordmark on black, with a row of twelve crests for fictional clubs.',
      },
      caption: 'The wordmark and twelve original crests for the fictional clubs.',
    },
    {
      type: 'text',
      label: 'Reflection',
      heading: 'What I’d test with real players next',
      body: [
        'Vanta is a concept, so there are no results to report yet. These are the questions I’d take into a first round of testing with regular bettors.',
      ],
      items: [
        {
          title: 'Is the session band noticed?',
          body: 'After a week of use, can people say how long they’ve played today without looking?',
        },
        {
          title: 'Does “Max €32” change behaviour?',
          body: 'Do people pick the capped quick stake, or type a larger amount and hit the limit error?',
        },
        {
          title: 'Is the cash-out maths trusted?',
          body: 'Can people explain what “difference +€1.60” means for them?',
        },
      ],
    },
  ],
};
