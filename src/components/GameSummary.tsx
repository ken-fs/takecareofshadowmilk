import { useLanguage } from '@/contexts/LanguageContext';

/*
  Two blocks. The spec table is genuinely tabular data about the game, so it
  stays a definition list. The how-to-play steps are genuinely ordered — you
  pick a room before you drag an item into it — so these get numbers; nothing
  else on the page does.
*/

const SPEC_ROWS = [
  { label: 'home.summary.gameType', value: 'home.summary.gameTypeValue' },
  { label: 'home.summary.creator', value: 'home.summary.creatorValue' },
  { label: 'home.summary.mainCharacter', value: 'home.summary.mainCharacterValue' },
  { label: 'home.summary.gameplay', value: 'home.summary.gameplayValue' },
  { label: 'home.summary.statusMetrics', value: 'home.summary.statusMetricsValue' },
  { label: 'home.summary.whyTrendy', value: 'home.summary.whyTrendyValue' },
];

export function GameSummary() {
  const { t } = useLanguage();

  return (
    <section id="about-game" className="border-t border-white/10 py-20">
      <div className="grid items-start gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div>
          <p className="eyebrow">{t('home.summary.eyebrow')}</p>
          <h2 className="display-lg mt-4">{t('home.summary.title')}</h2>
          <p className="prose-body mt-5">{t('home.summary.description')}</p>

          <dl className="mt-10 border-t border-white/10">
            {SPEC_ROWS.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 gap-1 border-b border-white/10 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6"
              >
                <dt className="eyebrow pt-0.5 text-[0.625rem]">{t(row.label)}</dt>
                <dd className="text-sm leading-relaxed text-bone/80">{t(row.value)}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div id="how-to-play" className="lg:sticky lg:top-24">
          <div className="card path-care">
            <p className="eyebrow">{t('home.howToPlay.eyebrow')}</p>
            <h3 className="display-md mt-3">{t('home.howToPlay.title')}</h3>

            <ol className="mt-8 space-y-6">
              {[0, 1, 2, 3].map((i) => (
                <li key={i} className="flex gap-4">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-ice" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm leading-relaxed text-bone/80">
                    {t(`home.howToPlay.steps.${i}`)}
                  </p>
                </li>
              ))}
            </ol>

            <p className="mt-8 border-t border-white/10 pt-6 font-display text-lg text-bone">
              {t('home.howToPlay.conclusion')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
