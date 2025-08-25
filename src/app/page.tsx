'use client';

import Link from 'next/link';
import { GameHero } from '@/components/GameHero';
import { GameFeatures } from '@/components/GameFeatures';
import { GameSummary } from '@/components/GameSummary';
import { FeaturedGames } from '@/components/FeaturedGames';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                {t('home.hero.title')}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                {t('navigation.home')}
              </Link>
              <Link href="/game" className="btn-primary">
                {t('home.hero.startGame')}
              </Link>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main>
        <GameHero />
        <GameSummary />
        <GameFeatures />
        <FeaturedGames />
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.aboutUs')}</h3>
              <p className="text-gray-300 text-sm">
                {t('footer.aboutUsDesc')}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.gameCategories')}</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>{t('footer.scratchGames')}</li>
                <li>{t('footer.simulationGames')}</li>
                <li>{t('footer.casualGames')}</li>
                <li>{t('footer.virtualPet')}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.popularGames')}</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>{t('footer.pouOnline')}</li>
                <li>{t('footer.myDogy')}</li>
                <li>{t('footer.petSalon')}</li>
                <li>{t('footer.myPetCare')}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.contactUs')}</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>{t('footer.copyrightNotice')}</li>
                <li>{t('footer.termsOfUse')}</li>
                <li>{t('footer.privacyPolicy')}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 