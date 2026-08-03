import type { Metadata } from 'next';
import { Fraunces, Nunito, DM_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { SITE_URL, SITE_NAME, absoluteUrl, jsonLdScript, ADSENSE_PUBLISHER_ID } from '@/lib/seo';

// Display: carnival-poster serif. Body: rounded and plush. Mono: game telemetry.
const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['SOFT', 'WONK'],
  display: 'swap',
  variable: '--font-display',
});

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'Take Care of Shadow Milk - Free Online Virtual Pet Game',
    template: '%s | Take Care of Shadow Milk'
  },
  description: 'Play Take Care of Your Own Shadow Milk game online for free! Take care of the adorable character from Cookie Run: Kingdom. No download required, start playing now!',
  keywords: [
    'Take Care of Shadow Milk',
    'Shadow Milk Game',
    'Virtual Pet Game',
    'Scratch Game',
    'Cookie Run Kingdom',
    'Online Game',
    'Free Game',
    'Pet Simulator',
    'Casual Game',
    'Browser Game',
    'Simulation Game'
  ],
  authors: [{ name: 'Take Care of Shadow Milk Team' }],
  creator: 'Take Care of Shadow Milk Team',
  publisher: 'Take Care of Shadow Milk',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  /*
    No `languages` map here. The six locale paths it used to declare (/en, /zh,
    /de, /fr, /es, /pt) all 404 — language switching is client-side React state
    with no per-locale URL. Declaring hreflang targets that 404 is worse than
    declaring none. Restore this only alongside real localised routes.
  */
  alternates: {
    canonical: absoluteUrl('/'),
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: absoluteUrl('/'),
    title: 'Take Care of Shadow Milk - Free Online Virtual Pet Game',
    description: 'Play Take Care of Your Own Shadow Milk game online for free! Take care of the adorable character from Cookie Run: Kingdom.',
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Take Care of Shadow Milk - Free Online Virtual Pet Game',
    description: 'Play Take Care of Your Own Shadow Milk game online for free! Take care of the adorable character from Cookie Run: Kingdom.',
    creator: '@takecareofshadowmilk',
    site: '@takecareofshadowmilk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  /*
    `verification` is omitted deliberately. It previously shipped the literal
    strings 'your-google-verification-code' etc. straight into the HTML. Add it
    back only with real tokens, e.g.
      verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
  */
  category: 'games',
  classification: 'Virtual Pet Game',
  other: {
    'msapplication-TileColor': '#0b1026',
    'theme-color': '#0b1026',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: [
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
  },
};

/*
  Site-level graph, rendered into the server HTML. No aggregateRating anywhere:
  the site has no review collection mechanism, so any rating here would be
  fabricated — which is a structured-data policy violation, not just a fib.
*/
const siteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: absoluteUrl('/'),
      name: SITE_NAME,
      description:
        'Play Take Care of Your Own Shadow Milk online for free — a browser-based virtual pet game built in Scratch.',
      inLanguage: 'en-US',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: absoluteUrl('/'),
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${nunito.variable} ${dmMono.variable}`}>
      <head>
        {/* The three third-party origins this page always reaches. Warming the
            connections costs nothing and takes DNS + TLS off the critical path. */}
        <link rel="preconnect" href="https://takecareofshadowmilk.org" />
        <link rel="preconnect" href="https://takecareofshadowmilk.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        {/*
          AdSense loader as a raw tag, on purpose. Via <Script
          strategy="afterInteractive"> the server HTML got only a
          <link rel="preload">, with the real tag serialized into the RSC
          payload and injected client-side — invisible to AdSense's verification
          crawler, which does not execute JS and reads only <head>. A literal
          tag here is what "place this between <head> and </head>" means.

          `async` keeps it off the critical path. The layout does not remount on
          client-side navigation, so this is not re-injected.
        */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${ADSENSE_PUBLISHER_ID}`}
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(siteJsonLd)}
        />
      </head>
      <body>
        {/*
          Clarity runs afterInteractive, not beforeInteractive. As
          beforeInteractive its bootstrap landed at the very top of <body> and
          executed ahead of first paint; analytics never needs to block render.
        */}
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tsizff8jjb");
          `}
        </Script>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KY850MFQQZ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KY850MFQQZ');
          `}
        </Script>
        {/* The AdSense loader lives in <head> — see the comment there for why
            it is a raw tag rather than next/script. */}
        <LanguageProvider>
          {/* Global navigation */}
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
