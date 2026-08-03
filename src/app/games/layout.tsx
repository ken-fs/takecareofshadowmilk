import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'All Games — Virtual Pet & Scratch Games',
  description:
    'Browse every game on the site: Shadow Milk variants, virtual pet simulators and casual browser games. All free, all playable without a download.',
  path: '/games',
});

export default function GamesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
