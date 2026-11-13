import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { FloatingNav } from '@/components/FloatingNav';
import { Footer } from '@/components/Footer';
import { GetInTouch } from '@/components/GetInTouch';
import { ScrollFade } from '@/components/ScrollFade';
import { TopBar } from '@/components/TopBar';
import { site } from '@/content/site';
import { themeScript } from '@/lib/theme';
import { ThemeSync } from '@/lib/ThemeSync';
import '@/styles/tokens.css';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}, product designer`, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: { type: 'website', siteName: site.name },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* First in <body>, so <head> (and any theme override meta) is already parsed. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <ThemeSync />
        <ScrollFade position="top" />
        <TopBar name={site.name} role={site.role} />
        <main id="main">{children}</main>
        <Footer
          name={site.name}
          location={site.location}
          email={site.email}
          socials={site.socials}
        />
        <ScrollFade position="bottom" />
        <FloatingNav />
        <GetInTouch email={site.email} />
      </body>
    </html>
  );
}
