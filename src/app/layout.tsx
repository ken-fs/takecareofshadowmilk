import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

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
  metadataBase: new URL('http://takecareofshadowmilk.site'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'zh-CN': '/zh',
      'de-DE': '/de',
      'fr-FR': '/fr',
      'es-ES': '/es',
      'pt-BR': '/pt',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'http://takecareofshadowmilk.site',
    title: 'Take Care of Shadow Milk - Free Online Virtual Pet Game',
    description: 'Play Take Care of Your Own Shadow Milk game online for free! Take care of the adorable character from Cookie Run: Kingdom.',
    siteName: 'Take Care of Shadow Milk',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Take Care of Shadow Milk Game Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Take Care of Shadow Milk - Free Online Virtual Pet Game',
    description: 'Play Take Care of Your Own Shadow Milk game online for free! Take care of the adorable character from Cookie Run: Kingdom.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'games',
  classification: 'Virtual Pet Game',
  other: {
    'msapplication-TileColor': '#7c3aed',
    'theme-color': '#7c3aed',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {/* Global navigation */}
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
