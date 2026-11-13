/**
 * Content types. Every page reads from data shaped like this, so copy can
 * change without touching layout code.
 */

/** Path under public/images without size or extension, e.g. "rivo/01-hero". */
export type ImageRef = {
  src: string;
  /** Describe what the image shows. Required: every image needs alt text. */
  alt: string;
};

export type ListItem = {
  title: string;
  body: string;
};

/** A case study page is a list of these, rendered in order. */
export type Block =
  | {
      type: 'text';
      /** Small orange label, e.g. "Overview". */
      label: string;
      heading: string;
      /** One string per paragraph. */
      body?: string[];
      /** Numbered list under the body (numbers are added automatically). */
      items?: ListItem[];
    }
  | {
      type: 'visual';
      image: ImageRef;
      caption?: string;
    };

export type MetaEntry = {
  key: string;
  value: string;
};

export type CaseStudy = {
  /** URL segment: /work/<slug>/ */
  slug: string;
  title: string;
  /** Shown everywhere a project appears: Industry meta item, first tag, card kind. */
  industry: string;
  /** Sentence under the title on the project page and Work row. */
  tagline: string;
  /** Shorter tagline for the Work row, when the full one is too long. Defaults to `tagline`. */
  rowTagline?: string;
  /** Paragraph under the tagline on the project page. */
  summary: string;
  /** Short line on the Work row (desktop). */
  rowDescription: string;
  /** Line shown in the "Next project" block that links to this project. */
  teaser: string;
  role: string;
  year: string;
  /** Tags after the industry on the Work row, e.g. platform and status. */
  tags: string[];
  /** Meta items after Role and Industry, e.g. Type, Platform, Year. */
  meta: MetaEntry[];
  cover: ImageRef;
  /** Featured case studies appear on the landing page. */
  featured?: boolean;
  /** Force a theme for this page. Leave unset to follow the visitor's system setting. */
  theme?: 'dark';
  blocks: Block[];
};

export type Exploration = {
  name: string;
  /** Short subject shown after the name, e.g. "Transaction clarity". */
  topic?: string;
  industry: string;
  image?: ImageRef;
};

export type SideProject = {
  title: string;
  /** Mono label above the title, e.g. "Tool · Figma plugin". */
  kind: string;
  description: string;
  status?: string;
  collaborator: string;
  href?: string;
  image?: ImageRef;
};
