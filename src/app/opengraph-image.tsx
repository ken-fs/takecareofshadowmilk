import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/ogImage';

export const alt = 'Take Care of Shadow Milk — free online virtual pet game';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    title: 'Take Care of Your Own Shadow Milk',
    eyebrow: 'Virtual pet game',
  });
}
