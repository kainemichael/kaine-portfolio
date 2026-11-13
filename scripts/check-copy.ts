/**
 * Content rules that the type checker can't enforce. Runs before every build.
 *
 * - No em dashes anywhere in copy (house style).
 * - Every case study and exploration has an industry.
 * - Every image has alt text.
 * - Synqop uses the agreed wording.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { explorations } from '../content/explorations';
import { caseStudies } from '../content/projects';

const root = resolve(import.meta.dirname, '..');
const problems: string[] = [];

const sourceFiles = (dir: string): string[] =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return sourceFiles(path);
    return /\.(ts|tsx)$/.test(name) ? [path] : [];
  });

for (const file of ['content', 'sections', 'components', 'app'].flatMap((d) =>
  sourceFiles(join(root, d)),
)) {
  readFileSync(file, 'utf8')
    .split('\n')
    .forEach((line, i) => {
      if (line.includes('—')) problems.push(`${relative(root, file)}:${i + 1} has an em dash`);
    });
}

for (const project of caseStudies) {
  if (!project.industry.trim()) problems.push(`${project.slug}: missing industry`);
  const images = [
    project.cover,
    ...project.blocks.flatMap((b) => (b.type === 'visual' ? [b.image] : [])),
  ];
  for (const image of images) {
    if (!image.alt.trim()) problems.push(`${project.slug}: ${image.src} has no alt text`);
  }
}

for (const exploration of explorations) {
  if (!exploration.industry.trim())
    problems.push(`Exploration ${exploration.name}: missing industry`);
}

const synqop = caseStudies.find((p) => p.slug === 'synqop');
if (synqop) {
  const text = JSON.stringify(synqop);
  for (const banned of [/\bstudents?\b/i, /\bLMS\b/]) {
    if (banned.test(text))
      problems.push(
        `synqop: avoid "${banned.source}" (use "participant" / "programme-operations software")`,
      );
  }
}

if (problems.length) {
  console.error(`Copy check failed:\n${problems.map((p) => `  - ${p}`).join('\n')}`);
  process.exit(1);
}
console.log('Copy check passed');
