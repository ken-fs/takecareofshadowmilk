'use client';

import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { getGameBySlug } from '@/data/gamesData';

export default function GameDetailPage() {
  const params = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const game = useMemo(() => getGameBySlug(params?.slug ?? ''), [params?.slug]);

  if (!game) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="card p-10 text-center">
          <h1 className="text-2xl font-bold text-gradient mb-4">{t('notFound.heading')}</h1>
          <p className="text-gray-400 mb-6">{t('notFound.description')}</p>
          <div className="flex justify-center gap-4">
            <Link href="/games" className="btn-primary">{t('navigation.games')}</Link>
            <Link href="/" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-200 transition-colors">{t('navigation.home')}</Link>
          </div>
        </div>
      </div>
    );
  }

  const embedSrc = game.embedUrl ?? 'https://takecareofshadowmilk.org/take-care-of-shadow-milk.embed';
  const canEmbed = Boolean(embedSrc);

  return (
    <main className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="text-4xl" aria-hidden>{game.icon}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-gradient">{game.name}</h1>
          </div>
          <p className="text-gray-400 mt-3 max-w-3xl">{game.description}</p>
        </div>

        {canEmbed ? (
          <div className="glass-effect p-6 border border-purple-500/30">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-purple-400/50 shadow-2xl">
              <iframe
                src={embedSrc}
                className="w-full h-full"
                title={t('home.hero.gameTitle')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        ) : (
          <div className="card p-8">
            {game.externalUrl ? (
              <div className="space-y-4">
                <p className="text-gray-300">{t('game.detail.externalLinkTip')}</p>
                <a href={game.externalUrl} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">{t('game.detail.playExternally')}</a>
                <p className="text-xs text-gray-500">{t('game.detail.opensInNewTab')}</p>
              </div>
            ) : (
              <>
                <p className="text-gray-300 mb-6">{t('sidebar.discoverGames')}</p>
                <div className="flex gap-4">
                  <Link href="/game" className="btn-primary">{t('home.hero.startGame')}</Link>
                  <Link href="/games" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-200 transition-colors">{t('navigation.games')}</Link>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
