# kaine-portfolio

The portfolio site of Michael Kaine, product designer and Framer developer. It's built in React from the **Kaine · Portfolio** Figma file, which holds the brand, the design system and every page at desktop (1440) and mobile (390).

The repo is set up so the design system can be reused: swap the tokens, the content files and the images, and you have your own portfolio.

## Stack

|           |                                                                                          |
| --------- | ---------------------------------------------------------------------------------------- |
| Framework | [Next.js](https://nextjs.org) (App Router) with React and TypeScript in strict mode      |
| Output    | Static export: `npm run build` writes plain HTML, CSS and JS to `out/`                   |
| Styling   | CSS Modules plus one generated `styles/tokens.css`                                       |
| Fonts     | [Geist and Geist Mono](https://vercel.com/font), self-hosted through the `geist` package |
| Images    | 2x PNG exports, optimised by `sharp` into AVIF, WebP and JPEG at several widths          |

**Why Next.js and not Vite?** Every route is built into its own HTML page with its own title and share preview, so a link to `/work/rivo/` shows the right card when it's posted on LinkedIn or sent in a message. Vite would need an extra prerendering plugin to do the same. The build is still just static files, so the site can be hosted anywhere.

## Getting started

Requires Node 20.9 or later (`.nvmrc` pins 22).

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Script           | What it does                                                       |
| ---------------- | ------------------------------------------------------------------ |
| `npm run dev`    | Development server                                                 |
| `npm run build`  | Runs every check, then builds the static site into `out/`          |
| `npm run start`  | Serves `out/` locally                                              |
| `npm run tokens` | Regenerates `styles/tokens.css` from `tokens/figma-variables.json` |
| `npm run images` | Optimises the PNGs in `assets/images/` into `public/images/`       |
| `npm run check`  | Copy rules, type check, lint and formatting                        |
| `npm run format` | Formats everything with Prettier                                   |

## Folder structure

```
app/                     Routes: /, /work/, /work/explorations/, /work/[slug]/
components/              One folder per Figma component, same names as in Figma
  Button/  Button.tsx · Button.module.css · index.ts
  Tag/  NavItem/  FloatingNav/  TopBar/  GetInTouch/  Icon/
  WorkCard/  ProjectRow/  SideProjectCard/  SectionHeader/
  TextBlock/  ListItem/  Visual/  MetaItem/  NextProject/  Footer/  ScrollFade/
  BrandPattern/          Pattern/Band · Paper and Pattern/Field · Ink, drawn inline so they follow the theme
  ThemeToggle/
sections/                Page sections built from components
  landing/               Hero, Case studies, Explorations, Side projects, About, Contact
  work/                  Work header with tabs, exploration card
  case-study/            Hero and the block renderer
content/                 All copy, typed. Edit these, not the components
  types.ts               CaseStudy, Block, Exploration, SideProject
  projects/              One file per case study, plus index.ts for order
  explorations.ts
  side-projects.ts
  site.ts                Name, email, socials, landing and Work page copy
  image-manifest.ts      Generated list of optimised images
lib/                     Small helpers: <Picture>, theme script, ThemeSync
styles/                  tokens.css (generated) and globals.css
tokens/                  figma-variables.json, the source for tokens.css
scripts/                 build-tokens, optimise-images, check-copy
public/                  Brand mark and optimised images
```

## Design tokens

All colour, spacing, radius, type and effect values come from the three Figma variable collections. Components only ever use `var(--…)`.

| Figma collection | Modes           | In CSS                                                                                              |
| ---------------- | --------------- | --------------------------------------------------------------------------------------------------- |
| Primitives       | Value           | `--orange-500`, `--neutral-950`… Raw values, only used to feed Theme                                |
| Theme            | Light, Dark     | `--bg-page`, `--text-secondary`, `--accent-rivo`… Dark applies under `[data-theme="dark"]`          |
| Layout           | Desktop, Mobile | `--space-16`, `--radius-2xl`, `--layout-container`, `--type-body-size`… Mobile applies below 768 px |

Naming follows the Figma README: the collection is dropped and slashes become dashes, so `text/secondary` becomes `--text-secondary`. Text styles become shorthands, used like this:

```css
.heading {
  font: var(--type-h2);
  letter-spacing: var(--type-h2-tracking);
}
```

The one raw value in the CSS is the `767px` breakpoint, because CSS doesn't allow variables in media queries.

**To change the tokens:** update `tokens/figma-variables.json` (re-export it from Figma, or edit it by hand), then run `npm run tokens`.

**Theme:** the site opens in light. The toggle at the end of the floating nav switches to dark, and the choice is saved in `localStorage` so it sticks between visits. The script in `lib/theme.ts` applies it before first paint.

## Content

Copy lives in `content/` and nowhere else.

### Adding a case study

1. Create `content/projects/my-project.ts` that exports a `CaseStudy`. Copy an existing file to start.
2. Add it to the list in `content/projects/index.ts`. The order sets the numbers (01, 02…) and the "Next project" chain.
3. Set `featured: true` to show it on the landing page.
4. Add the cover and visuals (see below).
5. Optional: add an `accent/<slug>` colour to the Theme collection in Figma and regenerate the tokens. Without one, the project label uses the primary text colour.

A case study page is a list of `blocks`, rendered in order:

```ts
{ type: 'text', label: 'Overview', heading: '…', body: ['Paragraph one', 'Paragraph two'] }
{ type: 'text', label: 'Design decisions', heading: '…', items: [{ title: '…', body: '…' }] }
{ type: 'visual', image: { src: 'my-project/02-flow', alt: '…' }, caption: '…' }
```

### Content rules

`npm run check:copy` runs before every build and fails it if:

- copy contains an em dash
- a case study or exploration has no industry
- an image has no alt text
- the Synqop case study says "student" or "LMS" (use "participant" and "programme-operations software")

Two rules need a human: no invented metrics, and concepts are labelled self-initiated.

## Images

Images are exported from Figma at 2x and optimised at build time.

1. In Figma, open the **Export · Website images** page. Each frame is named after its site path (`covers-rivo`, `rivo-01-hero`…) and set to PNG at 2x.
2. Export them, one by one or all at once, into `assets/images/` (or any folder).
3. Run `npm run images` (or `npm run images -- path/to/folder`). The first dash in each file name becomes a folder, so `rivo-01-hero.png` is served as `rivo/01-hero`. It writes AVIF, WebP and JPEG files at 640 px, half size and full size into `public/images/`, and updates `content/image-manifest.ts`.

`assets/images/` holds the large originals and isn't committed. Any image that isn't in the manifest yet renders as a neutral box of the right size, so the site always builds.

Mobile shows the same visuals as desktop.

## Accessibility

- Semantic landmarks, one `h1` per page, a skip link, and lists marked up as lists
- A visible focus ring on everything that can take focus
- Whole cards are clickable, but each has a single real link, so screen readers announce it once
- On mobile, nav labels are hidden visually but stay available to screen readers
- Alt text is required by the content types and checked before each build
- Animations are switched off under `prefers-reduced-motion`
- Theme colours come from Figma; check contrast there when changing them

## In code, not yet in Figma

- **Theme toggle** (in the floating nav): built first while Figma was unavailable. Add it to the Floating nav component.

## In Figma, not yet in code

These components exist in Figma but nothing on the site uses them yet, so they aren't built. Build them when a page needs them.

- **Filter tab**: the Work page tabs use Tag instead
- **Carousel dots**: designed for a swipeable mobile carousel (Rivo's four results)

## Deploying

The `out/` folder is a complete static site. On Vercel, import the repo and leave the defaults: Next.js is detected and the static export is served as is. Set `NEXT_PUBLIC_SITE_URL` to the live URL so share previews and the sitemap use absolute links.

## Credits and licence

- Geist and Geist Mono by Vercel, under the SIL Open Font License 1.1
- Icons drawn for the Kaine · Portfolio file (24 px grid, 1.7 stroke)
- Rivo, Vanta, Synqop, Orbitfi and Kestrel, with their visuals, are Michael Kaine's own work. Please don't republish them as your own; replace them with yours.
- **Licence: to be decided** (likely MIT for the code and CC BY 4.0 for the design files)
