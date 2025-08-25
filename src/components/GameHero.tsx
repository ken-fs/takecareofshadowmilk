import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export function GameHero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-float animation-delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold text-gradient mb-8 leading-tight">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t('home.hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/game" className="btn-primary text-xl px-10 py-5 animate-bounce-slow">
              {t('home.hero.startGame')}
            </Link>
            <button className="btn-secondary text-xl px-10 py-5">
              {t('home.hero.learnMore')}
            </button>
          </div>
        </div>

        {/* 游戏特色标签 */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-delay">
          <span className="glass-effect px-6 py-3 rounded-full text-sm font-bold text-purple-300 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
            ⭐ {t('home.features.rating')}
          </span>
          <span className="glass-effect px-6 py-3 rounded-full text-sm font-bold text-blue-300 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
            {t('home.features.scratchGames')}
          </span>
          <span className="glass-effect px-6 py-3 rounded-full text-sm font-bold text-green-300 border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
            {t('home.features.simulationGames')}
          </span>
          <span className="glass-effect px-6 py-3 rounded-full text-sm font-bold text-orange-300 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300">
            {t('home.features.casualGames')}
          </span>
        </div>

        {/* 游戏预览图片 */}
        <div className="relative animate-fade-in-scale">
          <div className="glass-effect p-12 max-w-5xl mx-auto border border-purple-500/30">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-8xl mb-6 animate-bounce-slow">🍪</div>
              <h3 className="text-3xl font-bold text-gradient mb-4">
                {t('home.hero.cookieName')}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('home.hero.cookieDescription')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 