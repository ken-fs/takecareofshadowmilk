import {
  GAME_CATEGORIES,
  getGamesByCategory,
  type GameCategory,
} from '@/data/gamesData';
import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/ogImage';

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return Object.keys(GAME_CATEGORIES).map((category) => ({ category }));
}

export default function Image({ params }: { params: { category: string } }) {
  const category = GAME_CATEGORIES[params.category as keyof typeof GAME_CATEGORIES];

  if (!category) {
    return renderOgImage({ title: 'Free browser games', eyebrow: 'Category' });
  }

  const count = getGamesByCategory(category.id as GameCategory).length;

  return renderOgImage({
    title: category.name,
    eyebrow: `${count} game${count === 1 ? '' : 's'}`,
  });
}
