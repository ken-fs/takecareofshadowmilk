import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { getFeaturedGames } from '@/data/gamesData';

export function FeaturedGames() {
  const { t } = useLanguage();
  
  const featuredGames = getFeaturedGames();

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            {t('home.featuredGames.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('home.featuredGames.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {featuredGames.map((game) => (
            <Link key={game.id} href={`/game/${game.slug}`} className="card text-center hover:scale-105 transition-all duration-300 cursor-pointer group">
              <div className="text-5xl mb-4 group-hover:animate-bounce-slow">{game.icon}</div>
              <h3 className="font-bold text-gray-200 mb-3 text-lg">{game.name}</h3>
              <div className="flex justify-center items-center mb-3">
                {[...Array(Math.round(game.rating))].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">{game.description}</p>
              <span className="w-full inline-block btn-primary text-sm py-3 px-4 text-center">
                {t('home.featuredGames.playNow')}
              </span>
            </Link>
          ))}
        </div>

        {/* 新游戏部分 */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gradient mb-10 text-center">{t('home.featuredGames.newGames')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {featuredGames.slice(0, 4).map((game) => (
              <Link key={`new-${game.id}`} href={`/game/${game.slug}`} className="glass-effect p-6 text-center border-2 border-green-500/30 hover:border-green-400/50 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-3 group-hover:animate-bounce-slow">{game.icon}</div>
                <h4 className="font-bold text-gray-200 mb-2 text-lg">{game.name}</h4>
                <div className="flex justify-center items-center mb-3">
                  {[...Array(Math.round(game.rating))].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">⭐</span>
                  ))}
                </div>
                <span className="w-full inline-block bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-sm py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                  {t('home.featuredGames.newGames')}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* 开始游戏CTA */}
        <div className="mt-20 text-center">
          <div className="glass-effect p-12 border border-purple-500/30">
            <h3 className="text-3xl font-bold mb-6 text-gradient">
              {t('home.featuredGames.startGameCTA')}
            </h3>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {t('home.featuredGames.ctaDescription')}
            </p>
            <button className="btn-primary text-xl py-4 px-10 animate-pulse-slow">
              {t('home.featuredGames.startGameButton')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 
