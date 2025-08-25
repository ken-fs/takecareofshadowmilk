import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export function GameHero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('home.hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/game" className="btn-primary text-lg px-8 py-4">
              {t('home.hero.startGame')}
            </Link>
            <button className="btn-secondary text-lg px-8 py-4">
              {t('home.hero.learnMore')}
            </button>
          </div>
        </div>

        {/* 游戏特色标签 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-delay">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            ⭐ {t('home.features.rating')}
          </span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            {t('home.features.scratchGames')}
          </span>
          <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
            {t('home.features.simulationGames')}
          </span>
          <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
            {t('home.features.casualGames')}
          </span>
        </div>

        {/* 游戏预览图片 */}
        <div className="relative animate-fade-in-scale">
          <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-6xl mb-4">🍪</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {t('home.hero.cookieName')}
              </h3>
              <p className="text-gray-600">
                {t('home.hero.cookieDescription')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 