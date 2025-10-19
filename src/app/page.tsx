'use client';
import { Sidebar } from '@/components/Sidebar';
import { GameHero } from '@/components/GameHero';
import { GameFeatures } from '@/components/GameFeatures';
import { GameSummary } from '@/components/GameSummary';
import { FeaturedGames } from '@/components/FeaturedGames';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* 主要内容 */}
      <main className="relative">
        {/* 背景装饰 */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        </div>

        {/* 内容区域：侧边栏 + 主内容 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 侧边栏 */}
            <Sidebar />

            {/* 主内容区域 */}
            <div className="flex-1 min-w-0">
              <GameHero />
              <GameSummary />
              <GameFeatures />
              <FeaturedGames />
            </div>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="glass-effect mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-gradient">{t('footer.aboutUs')}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t('footer.aboutUsDesc')}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-gradient">{t('footer.gameCategories')}</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="hover:text-purple-400 transition-colors duration-300">{t('footer.scratchGames')}</li>
                <li className="hover:text-purple-400 transition-colors duration-300">{t('footer.simulationGames')}</li>
                <li className="hover:text-purple-400 transition-colors duration-300">{t('footer.casualGames')}</li>
                <li className="hover:text-purple-400 transition-colors duration-300">{t('footer.virtualPet')}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-gradient">{t('footer.popularGames')}</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="hover:text-purple-400 transition-colors duration-300">{t('footer.pouOnline')}</li>
                <li className="hover:text-purple-400 transition-colors duration-300">{t('footer.myDogy')}</li>
                <li className="hover:text-purple-400 transition-colors duration-300">{t('footer.petSalon')}</li>
                <li className="hover:text-purple-400 transition-colors duration-300">{t('footer.myPetCare')}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-gradient">{t('footer.contactUs')}</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="hover:text-purple-400 transition-colors duration-300">{t('footer.copyrightNotice')}</li>
                <li className="hover:text-purple-400 transition-colors duration-300">{t('footer.termsOfUse')}</li>
                <li className="hover:text-purple-400 transition-colors duration-300">{t('footer.privacyPolicy')}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700/50 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-400">{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 
