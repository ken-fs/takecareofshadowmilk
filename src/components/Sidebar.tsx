'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Gamepad2, Star, TrendingUp, Clock, Sparkles } from 'lucide-react';
import { getTrendingGames, getGameById } from '@/data/gamesData';

export function Sidebar() {
  const { t } = useLanguage();

  const gameCategories = [
    {
      id: 'scratch-games',
      name: t('footer.scratchGames'),
      icon: '🎮',
      count: 150,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'simulation-games',
      name: t('footer.simulationGames'),
      icon: '🏠',
      count: 89,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'casual-games',
      name: t('footer.casualGames'),
      icon: '😊',
      count: 200,
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 'virtual-pet',
      name: t('footer.virtualPet'),
      icon: '🐾',
      count: 45,
      color: 'from-orange-500 to-yellow-500',
    },
  ];

  const popularGames = getTrendingGames().slice(0, 4);

  const recentlyPlayed = [
    { id: 'shadow-milk', name: t('home.hero.title'), icon: '🍪', lastPlayed: '2h ago' },
    { id: 'pure-vanilla', name: 'Pure Vanilla', icon: '🍦', lastPlayed: '5h ago' },
  ];

  const getGameHref = (id: string) => {
    if (id === 'shadow-milk') return '/game/take-care-of-shadow-milk';
    const g = getGameById(id);
    return g ? `/game/${g.slug}` : '/game';
  };

  return (
    <aside className="w-full lg:w-80 space-y-6">
      {/* Game Categories */}
      <div className="card">
        <div className="flex items-center space-x-2 mb-6">
          <Gamepad2 className="w-5 h-5 text-purple-400" />
          <h2 className="text-xl font-bold text-gray-200">
            {t('footer.gameCategories')}
          </h2>
        </div>
        <div className="space-y-3">
          {gameCategories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group cursor-pointer border border-transparent hover:border-purple-500/30"
            >
              <div className="flex items-center space-x-3">
                <div className="text-2xl group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-200 group-hover:text-purple-400 transition-colors">
                    {category.name}
                  </p>
                  <p className="text-xs text-gray-400">{category.count} {t('sidebar.gamesCount')}</p>
                </div>
              </div>
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Games */}
      <div className="card">
        <div className="flex items-center space-x-2 mb-6">
          <Star className="w-5 h-5 text-yellow-400" />
          <h2 className="text-xl font-bold text-gray-200">
            {t('footer.popularGames')}
          </h2>
        </div>
        <div className="space-y-3">
          {popularGames.map((game, index) => (
            <Link
              key={game.id}
              href={getGameHref(game.id)}
              className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group cursor-pointer border border-transparent hover:border-yellow-500/30 overflow-hidden"
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <div className="relative">
                  <div className="text-2xl group-hover:scale-110 transition-transform">{game.icon}</div>
                  {index === 0 && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 min-w-0">
                    <p className="flex-1 max-w-full truncate text-sm font-medium text-gray-200 group-hover:text-yellow-400 transition-colors">{game.name}</p>
                    {game.isNew && (
                      <span className="shrink-0 flex items-center space-x-1 px-2 py-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-xs font-bold">
                        <Sparkles className="w-3 h-3" />
                        <span>{t('sidebar.new')}</span>
                      </span>
                    )}
                    {game.isTrending && <TrendingUp className="shrink-0 w-3 h-3 text-red-400 animate-bounce-slow" />}
                  </div>
                  <div className="flex items-center space-x-3 mt-1">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs text-gray-400">{game.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-400">{game.plays} {t('sidebar.plays')}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/games/popular"
          className="block mt-4 text-center text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors"
        >
          {t('sidebar.viewAllPopular')}
        </Link>
      </div>

      {/* Recently Played */}
      <div className="card">
        <div className="flex items-center space-x-2 mb-6">
          <Clock className="w-5 h-5 text-blue-400" />
          <h2 className="text-xl font-bold text-gray-200">{t('sidebar.recentlyPlayed')}</h2>
        </div>
        <div className="space-y-3">
          {recentlyPlayed.map((game) => (
            <Link
              key={game.id}
              href={getGameHref(game.id.replace('-recent',''))}
              className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="text-2xl group-hover:scale-110 transition-transform">
                  {game.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-200 group-hover:text-blue-400 transition-colors">
                    {game.name}
                  </p>
                  <p className="text-xs text-gray-400">{game.lastPlayed}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Ad Space Placeholder */}
      <div className="card bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 text-center p-8">
        <div className="text-4xl mb-4 animate-bounce-slow">🎮</div>
        <h3 className="text-lg font-bold text-gradient mb-2">
          {t('sidebar.playMoreGames')}
        </h3>
        <p className="text-sm text-gray-400 mb-4">
          {t('sidebar.discoverGames')}
        </p>
        <Link
          href="/games"
          className="btn-primary text-sm inline-block"
        >
          {t('sidebar.exploreGames')}
        </Link>
      </div>
    </aside>
  );
}
