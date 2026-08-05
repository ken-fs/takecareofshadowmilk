import { GAMES, getGameBySlug } from '@/data/gamesData';
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/ogImage';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

/* Static params so all 24 cards are emitted at build time rather than rendered
   on demand by a crawler that will not wait for them. */
export function generateStaticParams() {
  return GAMES.map((g) => ({ slug: g.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const game = getGameBySlug(params.slug);

  return renderOgImage({
    title: game?.name ?? 'Take Care of Your Own Shadow Milk',
    eyebrow: game?.scratchAuthor ? `Scratch game by ${game.scratchAuthor}` : 'Scratch game',
  });
}
