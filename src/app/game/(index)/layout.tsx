import { buildMetadata, jsonLdScript, SITE_URL, SITE_NAME, GAME_AUTHOR, absoluteUrl } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Play Take Care of Shadow Milk — Free Virtual Pet Game',
  description:
    'Play Take Care of Shadow Milk in your browser. Feed, bathe and play with the Beast of Deceit across four rooms — free, no download, no sign-up.',
  path: '/game',
});

/*
  VideoGame schema, server-rendered. Two things the previous client-injected
  version got wrong and are deliberately different here:
    - no aggregateRating (there are no real reviews to aggregate)
    - author is a Person; GPE_sb3 is the Scratch creator, not a company
*/
const gameJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  '@id': `${SITE_URL}/game#game`,
  name: 'Take Care of Shadow Milk',
  url: absoluteUrl('/game'),
  description:
    'A virtual pet-style Scratch game where you care for Shadow Milk Cookie from Cookie Run: Kingdom across four rooms.',
  genre: ['Virtual Pet', 'Simulation Game', 'Casual Game'],
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

export default function GameLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(gameJsonLd)}
      />
      {children}
    </>
  );
}
