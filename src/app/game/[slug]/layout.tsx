import type { Metadata } from 'next';
import {
  GAMES,
  GAME_CATEGORIES,
  getGameBySlug,
  scratchProjectUrl,
  ORIGINAL_PROJECT_ID,
} from '@/data/gamesData';
import { buildGameFaq, faqJsonLd } from '@/lib/gameFaq';
import {
  buildMetadata,
  jsonLdScript,
  SITE_URL,
  GAME_AUTHOR,
  absoluteUrl,
  breadcrumbJsonLd,
} from '@/lib/seo';

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
    /*
      The author of THIS project, not of the original. This used to name
      GAME_AUTHOR on all 24 pages, which attributed two dozen other people's
      remixes to one person in machine-readable form. `scratchAuthor` is the
      username that actually published each one; the remix relationship to the
      original is expressed separately via isBasedOn.
    */
    author: {
      '@type': 'Person',
      name: game.scratchAuthor ?? GAME_AUTHOR,
      url: `https://scratch.mit.edu/users/${game.scratchAuthor ?? GAME_AUTHOR}/`,
    },
    ...(game.scratchProjectId
      ? { sameAs: scratchProjectUrl(game.scratchProjectId) }
      : {}),
    ...(game.scratchProjectId && game.scratchProjectId !== ORIGINAL_PROJECT_ID
      ? {
          isBasedOn: {
            '@type': 'VideoGame',
            name: 'TAKE CARE OF YOUR OWN SHADOW MILK!',
            url: scratchProjectUrl(ORIGINAL_PROJECT_ID),
            author: {
              '@type': 'Person',
              name: GAME_AUTHOR,
              url: `https://scratch.mit.edu/users/${GAME_AUTHOR}/`,
            },
          },
        }
      : {}),
    publisher: { '@id': `${SITE_URL}/#organization` },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    isAccessibleForFree: true,
  };

  /*
    Breadcrumb trail: Home › Games › <category, if it has a real page> › <game>.
    Only categories present in GAME_CATEGORIES get a link — the GameCategory
    union lists eight values but only five have pages, and pointing a breadcrumb
    at /category/puzzle would send crawlers to a 404.
  */
  const linkedCategory = game.category.find((c) => c in GAME_CATEGORIES);
  const breadcrumb = breadcrumbJsonLd([
    { name: 'Games', path: '/games' },
    ...(linkedCategory
      ? [
          {
            name: GAME_CATEGORIES[linkedCategory as keyof typeof GAME_CATEGORIES].name,
            path: `/category/${linkedCategory}`,
          },
        ]
      : []),
    { name: game.name, path: `/game/${game.slug}` },
  ]);

  /* Built from the same function the page body renders, so the markup and the
     visible text cannot disagree. */
  const faq = buildGameFaq(game);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(jsonLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumb)} />
      {faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(faq))}
        />
      )}
      {children}
    </>
  );
}
