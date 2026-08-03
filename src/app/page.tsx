'use client';
import Link from 'next/link';
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
      {/* 主内容在前，侧边栏在后：先让人看到能玩的游戏 */}
      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-12">
            <div className="min-w-0 flex-1">
              <GameHero />
              <GameSummary />
              <GameFeatures />
              <FeaturedGames />
            </div>

            <Sidebar />
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="mt-24 border-t border-white/10 bg-ink-deep">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            <div className="col-span-2 md:col-span-1">
              <p className="eyebrow">{t('footer.aboutUs')}</p>
              <p className="mt-4 text-sm leading-relaxed text-bone/60">
                {t('footer.aboutUsDesc')}
              </p>
            </div>
            <div>
              <p className="eyebrow">{t('footer.gameCategories')}</p>
              <ul className="mt-4 space-y-2.5 text-sm text-bone/60">
                <li><Link href="/category/scratch-games" className="transition-colors hover:text-ice">{t('footer.scratchGames')}</Link></li>
                <li><Link href="/category/simulation-games" className="transition-colors hover:text-ice">{t('footer.simulationGames')}</Link></li>
                <li><Link href="/category/casual-games" className="transition-colors hover:text-ice">{t('footer.casualGames')}</Link></li>
                <li><Link href="/category/virtual-pet" className="transition-colors hover:text-ice">{t('footer.virtualPet')}</Link></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow">{t('footer.popularGames')}</p>
              <ul className="mt-4 space-y-2.5 text-sm text-bone/60">
                <li><Link href="/games/popular" className="transition-colors hover:text-ice">{t('footer.pouOnline')}</Link></li>
                <li><Link href="/games/popular" className="transition-colors hover:text-ice">{t('footer.myDogy')}</Link></li>
                <li><Link href="/games/popular" className="transition-colors hover:text-ice">{t('footer.petSalon')}</Link></li>
                <li><Link href="/games/popular" className="transition-colors hover:text-ice">{t('footer.myPetCare')}</Link></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow">{t('footer.contactUs')}</p>
              <ul className="mt-4 space-y-2.5 text-sm text-bone/60">
                <li><Link href="/contact" className="transition-colors hover:text-ice">{t('footer.copyrightNotice')}</Link></li>
                <li><Link href="/contact" className="transition-colors hover:text-ice">{t('footer.termsOfUse')}</Link></li>
                <li><Link href="/contact" className="transition-colors hover:text-ice">{t('footer.privacyPolicy')}</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-xs text-bone/40">{t('footer.copyright')}</p>
            <p className="font-mono text-xs text-bone/40">{t('footer.disclaimer')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 
