import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIframeGame } from '@/hooks/useGameState';
import { scratchEmbedUrl, ORIGINAL_PROJECT_ID } from '@/data/gamesData';

/*
  The signature element: the game sits inside a harlequin proscenium — a
  lozenge-trimmed stage cabinet whose base carries the four care meters from
  the real Scratch HUD. Shadow Milk Cookie is the Beast of Deceit, a jester;
  putting him on a stage is the most characteristic frame available, and it
  gets the playable game high and large instead of nested three boxes deep.
*/

/*
  Bars show each meter's real drain rate, normalised against the fastest, so
  the base doubles as advice: hunger empties five times faster than health, so
  it's the one to watch. Invented "current values" would have been decoration
  pretending to be telemetry.
*/
const METERS = [
  { key: 'hunger', rate: 0.5 },
  { key: 'energy', rate: 0.3 },
  { key: 'hygiene', rate: 0.2 },
  { key: 'health', rate: 0.1 },
] as const;

const FASTEST_RATE = 0.5;

export const GameHero: React.FC = () => {
  const { t } = useLanguage();
  const { isGameLoaded, isFullscreen, handleGameLoad, handleFullscreen, iframeRef } =
    useIframeGame();

  return (
    <section className="pb-16 pt-8">
      <div className="mb-8 max-w-2xl">
        <p className="eyebrow animate-fade-in">{t('home.hero.eyebrow')}</p>
        <h1 className="display-xl animate-fade-in mt-4">
          {t('home.hero.titleLead')}{' '}
          <em className="not-italic text-ice">{t('home.hero.titleAccent')}</em>
        </h1>
        <p className="prose-body animate-fade-in-delay mt-5 text-lg">
          {t('home.hero.subtitle')}
        </p>
      </div>

      {/* Proscenium */}
      <div className="animate-fade-in-scale">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-raised">
          {/* Valance: lozenge trim reading as a jester's motley */}
          <div className="flex items-center gap-4 border-b border-white/10 px-4 py-3">
            <div
              className="lozenge h-4 flex-1 rounded-sm opacity-45"
              style={{ ['--lozenge-color' as string]: '#1e7fe0' }}
              aria-hidden="true"
            />
            <p className="eyebrow shrink-0 text-[0.625rem]">{t('home.hero.stageLabel')}</p>
            <div
              className="lozenge h-4 flex-1 rounded-sm opacity-45"
              style={{ ['--lozenge-color' as string]: '#1e7fe0' }}
              aria-hidden="true"
            />
          </div>

          {/* Stage */}
          <div className="p-3 sm:p-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-ink-deep sm:aspect-video">
              {/*
                The homepage plays the original project, embedded from Scratch
                via the same helper the detail pages use.

                This iframe pointed at takecareofshadowmilk.org until the embed
                migration, which moved the 24 detail pages but missed this one —
                so the homepage kept loading the main game from a domain we do
                not own, and once that origin came out of the CSP frame-src
                allowlist the stage rendered blank. Derive the URL, never hardcode
                it, so there is one place to change.
              */}
              <iframe
                ref={iframeRef}
                src={scratchEmbedUrl(ORIGINAL_PROJECT_ID)}
                className="h-full w-full"
                title={t('home.hero.gameTitle')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={handleGameLoad}
              />
              {!isGameLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-ink-deep">
                  <div className="text-center">
                    <div
                      className="lozenge mx-auto mb-4 h-6 w-24 rounded-sm opacity-60"
                      style={{ ['--lozenge-color' as string]: '#8fe9ff' }}
                      aria-hidden="true"
                    />
                    <p className="eyebrow">{t('home.hero.gameLoading')}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Base: the four meters, plus controls */}
          <div className="flex flex-col gap-5 border-t border-white/10 px-4 py-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
              {METERS.map((meter) => (
                <div key={meter.key}>
                  <div className="mb-1.5 flex items-baseline justify-between gap-2">
                    <span className="eyebrow text-[0.625rem]">
                      {t(`game.stats.${meter.key}`)}
                    </span>
                    <span className="font-mono text-[0.6875rem] text-bone/45">
                      −{meter.rate}%/s
                    </span>
                  </div>
                  <div
                    className="gauge-track"
                    role="img"
                    aria-label={`${t(`game.stats.${meter.key}`)}: ${meter.rate}% per second`}
                  >
                    <div
                      className="gauge-fill"
                      style={{ width: `${(meter.rate / FASTEST_RATE) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex shrink-0 gap-2">
              <a href="#how-to-play" className="btn-secondary">
                {t('home.hero.learnMore')}
              </a>
              <button
                type="button"
                className="btn-primary"
                onClick={handleFullscreen}
                disabled={!isGameLoaded}
              >
                {isFullscreen
                  ? t('home.hero.exitFullscreenButton')
                  : t('home.hero.fullscreenButton')}
              </button>
            </div>
          </div>
        </div>

        <p className="eyebrow mt-3 text-[0.625rem]">{t('home.hero.meterNote')}</p>
      </div>
    </section>
  );
};
