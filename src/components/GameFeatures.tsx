import { useLanguage } from '@/contexts/LanguageContext';

/*
  The page's structural idea lands here. The game has exactly two ways to play
  it — nurture him, or torment him — and that fork is the whole reason it went
  viral. So the two columns are keyed to those paths: ice for care, blush for
  chaos. The colour is doing the explaining; the items underneath are the real
  actions available in each room, not invented feature bullets.
*/

const PATHS = [
  {
    id: 'care',
    accent: 'path-care',
    tone: 'text-ice',
    titleKey: 'home.paths.care.title',
    bodyKey: 'home.paths.care.body',
    moves: ['home.paths.care.move1', 'home.paths.care.move2', 'home.paths.care.move3'],
  },
  {
    id: 'chaos',
    accent: 'path-chaos',
    tone: 'text-blush',
    titleKey: 'home.paths.chaos.title',
    bodyKey: 'home.paths.chaos.body',
    moves: ['home.paths.chaos.move1', 'home.paths.chaos.move2', 'home.paths.chaos.move3'],
  },
];

const REVIEWS = [
  { quote: 'home.whyPopular.playerReviews.review1', by: 'home.whyPopular.playerReviews.reviewer1' },
  { quote: 'home.whyPopular.playerReviews.review2', by: 'home.whyPopular.playerReviews.reviewer2' },
  { quote: 'home.whyPopular.playerReviews.review3', by: 'home.whyPopular.playerReviews.reviewer3' },
];

export function GameFeatures() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-white/10 py-20">
      <div className="max-w-2xl">
        <p className="eyebrow">{t('home.paths.eyebrow')}</p>
        <h2 className="display-lg mt-4">{t('home.whyPopular.title')}</h2>
        <p className="prose-body mt-5">{t('home.whyPopular.description')}</p>
      </div>

      {/* The fork */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {PATHS.map((path) => (
          <div key={path.id} className={`card ${path.accent}`}>
            <h3 className={`display-md ${path.tone}`}>{t(path.titleKey)}</h3>
            <p className="prose-body mt-4 text-sm">{t(path.bodyKey)}</p>
            <ul className="mt-7 space-y-3 border-t border-white/10 pt-6">
              {path.moves.map((move) => (
                <li key={move} className="font-mono text-xs leading-relaxed text-bone/65">
                  {t(move)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Reviews */}
      <div className="mt-20">
        <p className="eyebrow">{t('home.whyPopular.playerReviews.title')}</p>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <blockquote key={review.by} className="border-t border-white/10 pt-6">
              <p className="font-display text-lg leading-snug text-bone/90">
                {t(review.quote)}
              </p>
              <footer className="eyebrow mt-4 text-[0.625rem]">{t(review.by)}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
