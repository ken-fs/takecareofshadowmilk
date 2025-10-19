'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { GAME_CATEGORIES, getFeaturedGames, getTrendingGames, GAMES } from '@/data/gamesData';

export default function GamesPage() {
  const { t } = useLanguage();
  const featured = getFeaturedGames();
  const trending = getTrendingGames();

  return (
    <main className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient">{t('navigation.games')}</h1>
          <p className="text-gray-400 mt-3">{t('sidebar.discoverGames')}</p>
        </div>

        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-200 mb-6">{t('footer.gameCategories')}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Object.values(GAME_CATEGORIES).map((cat) => (
              <Link key={cat.id} href={`/category/${cat.id}`} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-purple-500/30 group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform" aria-hidden>{cat.icon}</div>
                <div className="text-sm font-medium text-gray-200 group-hover:text-purple-400 transition-colors">{t(`categories.${cat.id}`)}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* Trending */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-200">{t('sidebar.trending')}</h2>
            <Link href="/games/popular" className="text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors">{t('sidebar.viewAllPopular')}</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trending.map((g) => (
              <Link key={g.id} href={`/game/${g.slug}`} className="card p-5 hover:scale-105 transition-all duration-300 group">
                <div className="text-5xl mb-3 group-hover:animate-bounce-slow" aria-hidden>{g.icon}</div>
                <h3 className="font-bold text-gray-200 mb-2 text-lg">{g.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>⭐ {g.rating}</span>
                  <span>•</span>
                  <span>{g.plays} {t('sidebar.plays')}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* All games */}
        <section>
          <h2 className="text-2xl font-bold text-gray-200 mb-6">{t('games.all')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {GAMES.map((g) => (
              <Link key={g.id} href={`/game/${g.slug}`} className="card p-5 hover:scale-105 transition-all duration-300 group">
                <div className="text-5xl mb-3 group-hover:animate-bounce-slow" aria-hidden>{g.icon}</div>
                <h3 className="font-bold text-gray-200 mb-2 text-lg">{g.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>⭐ {g.rating}</span>
                  <span>•</span>
                  <span>{g.plays} {t('sidebar.plays')}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
