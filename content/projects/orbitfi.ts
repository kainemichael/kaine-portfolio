import type { CaseStudy } from '../types';

export const orbitfi: CaseStudy = {
  slug: 'orbitfi',
  title: 'Orbitfi',
  industry: 'Fintech · Web3',
  tagline: 'A self-custody DeFi wallet that explains every step before you sign',
  summary:
    'Orbitfi lets people create a wallet, then buy, swap, send and stake crypto, with every step that moves money explained before it happens.',
  rowDescription: 'Wallet app, brand and a website built in Framer. A self-initiated concept.',
  teaser:
    'A self-custody DeFi wallet concept that explains every step before you sign, with a website built in Framer.',
  role: 'Product & Brand Designer',
  year: '2025',
  tags: ['iOS', 'Concept'],
  meta: [
    { key: 'Type', value: 'Self-initiated' },
    { key: 'Platform', value: 'iOS app and website' },
    { key: 'Year', value: '2025' },
  ],
  cover: {
    src: 'covers/orbitfi',
    alt: 'A hand holding a phone running the Orbitfi wallet, on a purple gradient.',
  },
  blocks: [
    {
      type: 'visual',
      image: {
        src: 'orbitfi/01-hero',
        alt: 'A hand holding a phone with the Orbitfi wallet home screen, on a purple gradient.',
      },
    },
    {
      type: 'text',
      label: 'Overview',
      heading: 'Designing for people who hold their own keys',
      body: [
        "Orbitfi is a self-initiated concept. I designed the iOS app, 59 screens across 11 flows, and the brand, then designed and built the website in Framer. In self-custody there is no support desk to undo a mistake, so the app's job is to explain each step before it happens. Nothing here has been tested with users yet, and the last section says what I would test first.",
      ],
    },
    {
      type: 'text',
      label: 'Getting in',
      heading: 'Teaching self-custody before asking for it',
      items: [
        {
          title: 'Explain, then ask',
          body: 'Two short screens cover what a wallet is and what the secret phrase does, before the phrase appears.',
        },
        {
          title: 'Proof, not just a checkbox',
          body: 'After writing it down, people pick 4 words from their phrase, so a skipped backup is caught now, not after a lost phone.',
        },
        {
          title: 'The warning sits next to the risk',
          body: '"OrbitFi will never ask for it" sits right under the 12 words, where most scams begin.',
        },
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'orbitfi/02-getting-in',
        alt: 'Wallet creation screens: an explainer, the 12-word secret phrase and the 4-word check.',
      },
      caption: 'Wallet creation: explain, show the phrase, then confirm 4 words from it.',
    },
    {
      type: 'text',
      label: 'Import',
      heading: 'Coming back with a wallet you already have',
      items: [
        {
          title: 'Three ways back in',
          body: 'Seed phrase, Google Drive backup or a hardware device, each with one line on what it needs.',
        },
        {
          title: 'Help with long phrases',
          body: 'Word suggestions under the field help people enter 12, 18 or 24 words without a typo.',
        },
        {
          title: 'Locked to this device',
          body: 'A 4-digit passcode is set before the wallet opens for the first time.',
        },
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'orbitfi/03-import',
        alt: 'Import wallet screens: choosing a method, entering a phrase and setting a passcode.',
      },
      caption: 'Importing a wallet, then setting a passcode.',
    },
    {
      type: 'text',
      label: 'Home',
      heading: 'One screen answers: what do I have, and what can I do?',
      items: [
        {
          title: 'Balance first',
          body: 'Total value and its change sit at the top, before anything else.',
        },
        {
          title: 'Five actions, one row',
          body: 'Send, Receive, Swap, Buy and Sell keep the same order everywhere they appear.',
        },
        {
          title: 'Holdings with context',
          body: 'Each asset shows price and change on the left, amount and value on the right.',
        },
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'orbitfi/04-home',
        alt: 'The Orbitfi home screen with a total balance, five actions and a list of holdings.',
      },
      caption: 'The home screen. Sample balances.',
    },
    {
      type: 'text',
      label: 'Swap',
      heading: 'A swap is explained before it is signed',
      items: [
        {
          title: 'Read it like a receipt',
          body: 'Minimum received, slippage, gas, rate and deadline are listed, each with an info tip.',
        },
        {
          title: 'Irreversible, said plainly',
          body: 'One line says the action cannot be undone, right above Confirm Swap.',
        },
        {
          title: 'Context stays in view',
          body: 'While it confirms, the details stay behind the progress sheet, then return as a receipt with the transaction hash.',
        },
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'orbitfi/05-swap',
        alt: 'Swap screens: the review, the progress sheet and the receipt.',
      },
      caption: 'Review, progress and receipt for a swap.',
    },
    {
      type: 'text',
      label: 'Send',
      heading: 'Sending to an address you can check',
      items: [
        {
          title: 'Token, amount, then address',
          body: 'Each step is its own screen, with the balance and MAX always one tap away.',
        },
        {
          title: 'Fees before the button',
          body: 'Estimated gas and the deadline show under the address, before the review screen.',
        },
        {
          title: 'A receipt with a link out',
          body: 'The success screen keeps the amount, recipient and transaction hash.',
        },
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'orbitfi/06-send',
        alt: 'Send screens: choosing a token, entering an amount and adding the address.',
      },
      caption: 'Choosing a token, entering an amount and adding the address.',
    },
    {
      type: 'text',
      label: 'Buy and sell',
      heading: 'Buying crypto in money people already understand',
      items: [
        {
          title: 'Pay in fiat, see tokens',
          body: 'People type an amount in USD or another currency and see the token amount update as they type.',
        },
        {
          title: 'Payment methods with trade-offs',
          body: 'Each method shows its speed and fees, and one is marked as recommended.',
        },
        {
          title: 'The same rhythm as swap',
          body: 'A progress sheet, then a receipt. Sell mirrors the same flow in reverse.',
        },
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'orbitfi/07-buy-and-sell',
        alt: 'Buying ORBT with Apple Pay, from the amount screen to the receipt.',
      },
      caption: 'Buying ORBT with Apple Pay, from amount to receipt.',
    },
    {
      type: 'text',
      label: 'Staking',
      heading: 'Staking that says what gets locked, and until when',
      items: [
        {
          title: 'The lock, up front',
          body: 'A notice says staked tokens are locked for the chosen period, before Start Staking.',
        },
        {
          title: 'Rate tied to duration',
          body: 'The APY updates with the duration, so the trade-off is visible.',
        },
        {
          title: 'Unlock dates on every stake',
          body: 'Active stakes list amount, rewards and unlock date, with Unstake beside them.',
        },
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'orbitfi/08-staking',
        alt: 'Staking screens: the overview, a new stake and the list of active stakes.',
      },
      caption: 'Staking overview, a new stake and active stakes.',
    },
    {
      type: 'text',
      label: 'Brand',
      heading: 'An orbit, drawn as four loops',
      items: [
        {
          title: 'Orbit Lime on Orbit Noir',
          body: '#D0F864 on #12180F: one bright accent on near-black, saved for actions and progress.',
        },
        {
          title: 'A pattern from the mark',
          body: 'The loops tile into a brand pattern used on the app icon and social posts.',
        },
        {
          title: 'One typeface',
          body: 'Red Hat Display carries the app, the website and the social templates.',
        },
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'orbitfi/09-brand',
        alt: 'The Orbitfi logo, brand pattern, social templates, colours and typeface.',
      },
      caption: 'Logo, pattern, social templates, colour and type.',
    },
    {
      type: 'text',
      label: 'Website',
      heading: 'A website, designed and built in Framer',
      items: [
        {
          title: 'The app is the hero',
          body: 'Real screens in hand, not abstract illustrations.',
        },
        {
          title: 'Feature by feature',
          body: 'Sections follow the app: buy, sell, receive, send, swap and stake.',
        },
        {
          title: 'Live on Framer',
          body: 'Designed and built by me, at orbitfi.framer.website.',
        },
      ],
    },
    {
      type: 'visual',
      image: {
        src: 'orbitfi/10-website',
        alt: 'The Orbitfi website hero: “The Smartest Way to Manage Crypto in One App”.',
      },
      caption: 'The website hero. Live at orbitfi.framer.website.',
    },
    {
      type: 'text',
      label: 'What I would test next',
      heading: 'Learning what holds up with real people',
      body: [
        'With real users I would test whether the 4-word check catches skipped backups, whether people read the swap receipt before confirming, and whether the staking lock is clear before tokens are committed.',
      ],
    },
  ],
};
