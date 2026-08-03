'use client';

import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { GAMES, getGameBySlug, getGamesByCategory } from '@/data/gamesData';
import { getGameDetail } from '@/data/gameDetails';

export default function GameDetailPage() {
  const params = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const game = useMemo(() => getGameBySlug(params?.slug ?? ''), [params?.slug]);
  const detail = useMemo(() => getGameDetail(params?.slug ?? ''), [params?.slug]);

  /*
    Siblings from every category this game belongs to, deduped. Walking all its
    categories rather than just the first matters: the anchor game's first
    category is scratch-games, where it is the only member, so a first-category
    lookup returned nothing for the single most important page.
  */
  const related = useMemo(() => {
    if (!game) return [];
    const seen = new Map<string, (typeof GAMES)[number]>();
    for (const category of game.category) {
      for (const candidate of getGamesByCategory(category)) {
        if (candidate.slug !== game.slug && !seen.has(candidate.slug)) {
          seen.set(candidate.slug, candidate);
        }
      }
    }
    return Array.from(seen.values()).slice(0, 6);
  }, [game]);

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
          {detail && (
            <p className="text-gray-300 mt-3 max-w-3xl text-lg">{detail.tagline}</p>
          )}
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

        {/* Editorial copy. These pages used to be ~60 words each with most of
            that shared across all 32 of them; this section is where the
            page-specific substance lives. */}
        {detail && (
          <section className="mt-10 max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-200 mb-4">
              About {game.name}
            </h2>
            <p className="leading-relaxed text-gray-400">{detail.body}</p>

            {detail.tips && (
              <>
                <h3 className="text-lg font-bold text-gray-200 mt-8 mb-3">
                  What to know before you start
                </h3>
                <ul className="space-y-2 text-gray-400">
                  {detail.tips.map((tip) => (
                    <li key={tip} className="flex gap-3">
                      <span className="text-purple-400" aria-hidden>—</span>
                      <span className="leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {game.tags.length > 0 && (
              <p className="mt-8 text-sm text-gray-500">
                Tags: {game.tags.join(' · ')}
              </p>
            )}
          </section>
        )}

        {/* Sibling links: gives each detail page a route out other than the
            header, and gives the 32 pages a crawlable relationship to each
            other instead of all hanging off /games. */}
        {related.length > 0 && (
          <section className="mt-14 max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-200 mb-4">
              More like this
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {related.map((r) => (
                <li key={r.id}>
                  <Link
                    href={`/game/${r.slug}`}
                    className="flex items-center gap-3 rounded-xl border border-white/10 p-3 transition-colors hover:border-purple-400/40 hover:bg-white/5"
                  >
                    <span className="text-2xl" aria-hidden>{r.icon}</span>
                    <span className="text-sm text-gray-300">{r.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}
