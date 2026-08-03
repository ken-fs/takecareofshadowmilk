'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { TrendingUp } from 'lucide-react';
import { getTrendingGames, getGameById } from '@/data/gamesData';
import { shortGameName } from '@/lib/utils';

export function Sidebar() {
  const { t } = useLanguage();

  const gameCategories = [
    { id: 'scratch-games', name: t('footer.scratchGames'), count: 150 },
    { id: 'simulation-games', name: t('footer.simulationGames'), count: 89 },
    { id: 'casual-games', name: t('footer.casualGames'), count: 200 },
    { id: 'virtual-pet', name: t('footer.virtualPet'), count: 45 },
  ];

  const popularGames = getTrendingGames().slice(0, 5);

  const getGameHref = (id: string) => {
    if (id === 'shadow-milk') return '/game/take-care-of-shadow-milk';
    const g = getGameById(id);
    return g ? `/game/${g.slug}` : '/game';
  };

  return (
    <aside className="w-full shrink-0 space-y-10 lg:w-64 lg:pt-8">
      {/* Categories — a plain list; the count is the only data that matters */}
      <nav>
        <p className="eyebrow">{t('footer.gameCategories')}</p>
        <ul className="mt-4 border-t border-white/10">
          {gameCategories.map((category) => (
            <li key={category.id}>
              <Link
                href={`/category/${category.id}`}
                className="flex items-baseline justify-between gap-3 border-b border-white/10 py-3 text-sm text-bone/70 transition-colors hover:text-ice"
              >
                <span>{category.name}</span>
                <span className="font-mono text-[0.6875rem] text-bone/35">{category.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Trending — ranked, so the position is real information */}
      <nav>
        <p className="eyebrow">{t('footer.popularGames')}</p>
        <ol className="mt-4 space-y-3.5">
          {popularGames.map((game, index) => (
            <li key={game.id}>
              <Link href={getGameHref(game.id)} className="group flex gap-3">
                <span className="mt-0.5 shrink-0 font-mono text-[0.6875rem] text-bone/30">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-2">
                    <span
                      className="truncate text-sm text-bone/80 transition-colors group-hover:text-ice"
                      title={game.name}
                    >
                      {shortGameName(game.name)}
                    </span>
                    {game.isTrending && (
                      <TrendingUp className="h-3 w-3 shrink-0 text-blush" aria-label={t('sidebar.trending')} />
                    )}
                  </span>
                  {/* Category, not rating/plays — those numbers are hand-written
                      placeholders with no review or telemetry system behind them. */}
                  <span className="mt-0.5 block font-mono text-[0.6875rem] text-bone/35">
                    {game.category[0].replace(/-/g, ' ')}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
        <Link
          href="/games/popular"
          className="mt-5 inline-block font-mono text-[0.6875rem] uppercase tracking-wider text-ice transition-opacity hover:opacity-70"
        >
          {t('sidebar.viewAllPopular')}
        </Link>
      </nav>

      <div className="card path-chaos">
        <h3 className="font-display text-base font-bold">{t('sidebar.playMoreGames')}</h3>
        <p className="mt-2 text-sm leading-relaxed text-bone/60">{t('sidebar.discoverGames')}</p>
        <Link href="/games" className="btn-secondary mt-5 w-full">
          {t('sidebar.exploreGames')}
        </Link>
      </div>
    </aside>
  );
}
