'use client';

import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  GAMES,
  getGameBySlug,
  getGamesByCategory,
  scratchEmbedUrl,
  scratchProjectUrl,
  ORIGINAL_PROJECT_ID,
} from '@/data/gamesData';
import { getGameDetail } from '@/data/gameDetails';
import {
  getScratchStats,
  formatCount,
  formatSharedDate,
  SCRATCH_STATS_AS_OF,
} from '@/data/scratchStats';
import { buildGameFaq } from '@/lib/gameFaq';
import { GAME_AUTHOR } from '@/lib/seo';
import { AdsterraBanner } from '@/components/AdsterraBanner';
import { SIDEBAR, LEADERBOARD } from '@/lib/ads';

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

  /*
    Embeds resolve from the game's own Scratch project id. No fallback: a page
    with no source of its own used to silently serve the anchor game's embed
    under a different name.

    Previously these iframes pointed at takecareofshadowmilk.com/.org — domains
    we do not own — so the substance of every variant page sat on a competitor's
    server. Scratch is where these projects are actually published.
  */
  const embedSrc = game.scratchProjectId ? scratchEmbedUrl(game.scratchProjectId) : undefined;
  const canEmbed = Boolean(embedSrc);
  const isOriginal = game.scratchProjectId === ORIGINAL_PROJECT_ID;
  const stats = getScratchStats(game.scratchProjectId);
  const faq = buildGameFaq(game);

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
            <p className="text-gray-300 mb-6">{t('sidebar.discoverGames')}</p>
            <div className="flex gap-4">
              <Link href="/games" className="btn-primary">{t('navigation.games')}</Link>
              <Link href="/category/shadow-milk-variants" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-200 transition-colors">{t('navigation.home')}</Link>
            </div>
          </div>
        )}

        {/*
          Credit block. Two jobs at once: it is the attribution these creators
          are owed under Scratch's CC BY-SA terms, and it is content that only
          this page can carry — a named author, a real project link, and the
          remix lineage back to the original. The previous "play externally"
          button sent visitors to a competitor's domain instead.
        */}
        {game.scratchProjectId && game.scratchAuthor && (
          <section className="mt-8 max-w-3xl rounded-xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">
              Source and credit
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {isOriginal ? (
                <>
                  Created by{' '}
                  <a
                    href={`https://scratch.mit.edu/users/${game.scratchAuthor}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 underline hover:text-purple-200"
                  >
                    {game.scratchAuthor}
                  </a>{' '}
                  and published on Scratch, where it has been remixed hundreds of
                  times — every variant in this collection descends from it.
                </>
              ) : (
                <>
                  This variant was made by{' '}
                  <a
                    href={`https://scratch.mit.edu/users/${game.scratchAuthor}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 underline hover:text-purple-200"
                  >
                    {game.scratchAuthor}
                  </a>
                  , remixed from the original{' '}
                  <Link
                    href="/game/take-care-of-shadow-milk"
                    className="text-purple-300 underline hover:text-purple-200"
                  >
                    Take Care of Your Own Shadow Milk
                  </Link>{' '}
                  by {GAME_AUTHOR}.
                </>
              )}
            </p>
            {/*
              Real measured numbers from the Scratch API, with the date they were
              read. The `rating` and `plays` fields in gamesData are editorial
              placeholders and are deliberately not shown anywhere — these are
              the only publishable figures on this page.
            */}
            {stats && (
              <dl className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { label: 'Plays on Scratch', value: formatCount(stats.views) },
                  { label: 'Loves', value: formatCount(stats.loves) },
                  { label: 'Remixes of this', value: formatCount(stats.remixes) },
                  { label: 'First shared', value: formatSharedDate(stats.shared) },
                ].map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-xs uppercase tracking-wider text-gray-500">
                      {stat.label}
                    </dt>
                    <dd className="mt-1 text-sm font-bold text-gray-300">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            <p className="mt-3 text-sm text-gray-500">
              Playing above via the official Scratch player.{' '}
              <a
                href={scratchProjectUrl(game.scratchProjectId)}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300"
              >
                View project #{game.scratchProjectId} on Scratch
              </a>
              {stats ? ` Figures above as recorded on ${formatSharedDate(SCRATCH_STATS_AS_OF)}.` : '.'}
            </p>
          </section>
        )}

        {/* 300x250 below the embed/stats — the highest-viewability slot on
            the highest-traffic pages. */}
        <div className="mt-10 flex justify-center">
          <AdsterraBanner slot={SIDEBAR} />
        </div>

        {/* Editorial copy. These pages used to be ~60 words each with most of
            that shared across all 32 of them; this section is where the
            page-specific substance lives. */}
        {detail && (
          <section className="mt-10 max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-200 mb-4">
              About {game.name}
            </h2>
            <p className="leading-relaxed text-gray-400">{detail.body}</p>

            {/*
              The creator's own account of the project, paraphrased from their
              Scratch page. This is deliberately attributed rather than presented
              as our own copy — it is their words about their work, and it is the
              one thing on the page no aggregator can reproduce without going to
              the same source.
            */}
            {detail.creatorNote && game.scratchAuthor && (
              <>
                <h3 className="mt-8 mb-3 text-lg font-bold text-gray-200">
                  What {game.scratchAuthor} says about it
                </h3>
                <p className="leading-relaxed text-gray-400">{detail.creatorNote}</p>
              </>
            )}

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

        {/*
          FAQ. Answers are generated from the same verified fields the credit
          block uses, so they stay true if the data changes and cannot contradict
          the FAQPage JSON-LD emitted in the layout from the same builder.
        */}
        {faq.length > 0 && (
          <section className="mt-14 max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold text-gray-200">
              Questions about {game.name}
            </h2>
            <dl className="space-y-6">
              {faq.map((entry) => (
                <div key={entry.question}>
                  <dt className="font-bold text-gray-300">{entry.question}</dt>
                  <dd className="mt-2 leading-relaxed text-gray-400">{entry.answer}</dd>
                </div>
              ))}
            </dl>
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

        {/* 728x90 bottom leaderboard — fixed-width creative, so desktop only. */}
        <div className="mt-14 hidden justify-center md:flex">
          <AdsterraBanner slot={LEADERBOARD} />
        </div>
      </div>
    </main>
  );
}
