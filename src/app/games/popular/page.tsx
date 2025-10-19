'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTrendingGames } from '@/data/gamesData';

export default function PopularGamesPage() {
  const { t } = useLanguage();
  const games = getTrendingGames();

  return (
    <main className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-10 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-gradient">{t('footer.popularGames')}</h1>
          <Link href="/games" className="text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors">{t('navigation.games')}</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.map((g) => (
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
      </div>
    </main>
  );
}

