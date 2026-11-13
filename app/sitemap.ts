import type { MetadataRoute } from 'next';
import { caseStudies } from '@/content/projects';
import { site } from '@/content/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    '/work/',
    '/work/explorations/',
    ...caseStudies.map((p) => `/work/${p.slug}/`),
  ];
  return paths.map((path) => ({ url: new URL(path, site.url).toString() }));
}
