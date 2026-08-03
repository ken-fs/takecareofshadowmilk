import type { Metadata } from 'next';
import { GAMES, getGameBySlug } from '@/data/gamesData';
import { buildMetadata, jsonLdScript, SITE_URL, GAME_AUTHOR, absoluteUrl } from '@/lib/seo';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return GAMES.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const game = getGameBySlug(params.slug);

  if (!game) {
    return { title: 'Game not found', robots: { index: false, follow: true } };
  }

  return buildMetadata({
    title: `${game.name} — Play Free Online`,
    description: `${game.description} Free to play in your browser, no download required.`,
    path: `/game/${game.slug}`,
  });
}

export default function GameDetailLayout({
  children,
  params,
}: Props & { children: React.ReactNode }) {
  const game = getGameBySlug(params.slug);
  if (!game) return <>{children}</>;

  /* No aggregateRating: the hardcoded rating/plays numbers in gamesData are
     editorial placeholders, not measured values, so they must not be published
     as review data. */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    '@id': `${SITE_URL}/game/${game.slug}#game`,
    name: game.name,
    url: absoluteUrl(`/game/${game.slug}`),
    description: game.description,
    genre: game.category.map((c) => c.replace(/-/g, ' ')),
    keywords: game.tags.join(', '),
    gamePlatform: 'Web Browser',
    applicationCategory: 'Game',
    operatingSystem: 'Any',
    playMode: 'SinglePlayer',
    inLanguage: 'en-US',
    author: {
      '@type': 'Person',
      name: GAME_AUTHOR,
      url: 'https://scratch.mit.edu/users/GPE_sb3/',
    },
    publisher: { '@id': `${SITE_URL}/#organization` },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    isAccessibleForFree: true,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(jsonLd)} />
      {children}
    </>
  );
}
