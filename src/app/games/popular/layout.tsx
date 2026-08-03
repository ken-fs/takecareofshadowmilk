import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Popular Games — Most Played Virtual Pet Games',
  description:
    'The most played virtual pet and casual games on the site, from Shadow Milk variants to classic pet simulators. Free to play in your browser.',
  path: '/games/popular',
});

export default function PopularGamesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
