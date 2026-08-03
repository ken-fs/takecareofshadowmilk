import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { getFeaturedGames } from '@/data/gamesData';
import { shortGameName } from '@/lib/utils';

/*
  The old version printed the same four games twice — once as "Featured", once
  as "New Games" — so the second grid is gone. The NEW flag is a real read of
  game.isNew instead of a decorative badge on every tile.

  Rating and play count were removed: the numbers in gamesData are hand-written
  placeholders, and there is no review or telemetry system behind them. The tile
  shows the game's category instead, which is a fact the data actually holds.
*/

export function FeaturedGames() {
  const { t } = useLanguage();
  const featuredGames = getFeaturedGames();

  return (
    <section className="border-t border-white/10 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-xl">
          <p className="eyebrow">{t('home.featuredGames.eyebrow')}</p>
          <h2 className="display-lg mt-4">{t('home.featuredGames.title')}</h2>
        </div>
        <Link href="/games" className="btn-secondary">
          {t('sidebar.exploreGames')}
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {featuredGames.map((game) => (
          <Link
            key={game.id}
            href={`/game/${game.slug}`}
            className="group flex flex-col rounded-xl border border-white/10 bg-ink-raised p-4 transition-colors duration-200 hover:border-ice/40"
          >
            <div className="flex items-start justify-between">
              <span className="text-3xl" aria-hidden="true">
                {game.icon}
              </span>
              {game.isNew && (
                <span className="eyebrow text-[0.5625rem] text-blush">
                  {t('sidebar.new')}
                </span>
              )}
            </div>

            <h3
              className="mt-4 font-display text-base leading-tight text-bone transition-colors group-hover:text-ice"
              title={game.name}
            >
              {shortGameName(game.name)}
            </h3>

            <p className="mt-auto pt-4 font-mono text-[0.6875rem] text-bone/45">
              {game.category[0].replace(/-/g, ' ')}
            </p>
          </Link>
        ))}
      </div>

      {/* Closing CTA — the page's one repeat of the play action */}
      <div className="path-chaos mt-16 overflow-hidden rounded-2xl border border-white/10 bg-ink-raised">
        <div className="flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-xl">
            <h3 className="display-md">{t('home.featuredGames.startGameCTA')}</h3>
            <p className="prose-body mt-3 text-sm">
              {t('home.featuredGames.ctaDescription')}
            </p>
          </div>
          <Link href="/game" className="btn-primary shrink-0">
            {t('home.featuredGames.startGameButton')}
          </Link>
        </div>
      </div>
    </section>
  );
}
