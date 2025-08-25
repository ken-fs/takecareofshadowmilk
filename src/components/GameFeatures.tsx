import { useLanguage } from '@/contexts/LanguageContext';

export function GameFeatures() {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            {t('home.whyPopular.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('home.whyPopular.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="card hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-bold text-gradient mb-6">
              {t('home.whyPopular.viralAppeal.title')}
            </h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              {t('home.whyPopular.appeal')}
            </p>
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="glass-effect rounded-full p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg font-bold">🔥</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-200 text-lg mb-2">{t('home.whyPopular.viralAppeal.tiktok')}</h4>
                  <p className="text-gray-400">{t('home.whyPopular.viralAppeal.tiktokDesc')}</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="glass-effect rounded-full p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg font-bold">🎭</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-200 text-lg mb-2">{t('home.whyPopular.viralAppeal.dualPersonality')}</h4>
                  <p className="text-gray-400">{t('home.whyPopular.viralAppeal.dualPersonalityDesc')}</p>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="glass-effect rounded-full p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg font-bold">🎯</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-200 text-lg mb-2">{t('home.whyPopular.viralAppeal.creativeFreedom')}</h4>
                  <p className="text-gray-400">{t('home.whyPopular.viralAppeal.creativeFreedomDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-bold text-gradient mb-6">
              {t('home.whyPopular.playerReviews.title')}
            </h3>
            <div className="space-y-8">
              <blockquote className="accent-border border-blue-500/50">
                <p className="text-gray-300 italic mb-3 text-lg leading-relaxed">
                  {t('home.whyPopular.playerReviews.review1')}
                </p>
                <footer className="text-sm text-blue-400 font-semibold">— {t('home.whyPopular.playerReviews.reviewer1')}</footer>
              </blockquote>
              
              <blockquote className="accent-border border-green-500/50">
                <p className="text-gray-300 italic mb-3 text-lg leading-relaxed">
                  {t('home.whyPopular.playerReviews.review2')}
                </p>
                <footer className="text-sm text-green-400 font-semibold">— {t('home.whyPopular.playerReviews.reviewer2')}</footer>
              </blockquote>
              
              <blockquote className="accent-border border-purple-500/50">
                <p className="text-gray-300 italic mb-3 text-lg leading-relaxed">
                  {t('home.whyPopular.playerReviews.review3')}
                </p>
                <footer className="text-sm text-purple-400 font-semibold">— {t('home.whyPopular.playerReviews.reviewer3')}</footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* 游戏特色展示 */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card text-center hover:scale-105 transition-transform duration-300 border border-blue-500/30">
            <div className="text-5xl mb-6 animate-bounce-slow">🎮</div>
            <h4 className="text-2xl font-bold text-gradient mb-4">{t('home.whyPopular.features.easyToPlay')}</h4>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('home.whyPopular.features.easyToPlayDesc')}
            </p>
          </div>
          
          <div className="card text-center hover:scale-105 transition-transform duration-300 border border-green-500/30">
            <div className="text-5xl mb-6 animate-bounce-slow">🎨</div>
            <h4 className="text-2xl font-bold text-gradient mb-4">{t('home.whyPopular.features.creativeFreedom')}</h4>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('home.whyPopular.features.creativeFreedomDesc')}
            </p>
          </div>
          
          <div className="card text-center hover:scale-105 transition-transform duration-300 border border-purple-500/30">
            <div className="text-5xl mb-6 animate-bounce-slow">🌟</div>
            <h4 className="text-2xl font-bold text-gradient mb-4">{t('home.whyPopular.features.socialSharing')}</h4>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('home.whyPopular.features.socialSharingDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 