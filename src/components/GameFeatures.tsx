import { useLanguage } from '@/contexts/LanguageContext';

export function GameFeatures() {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('home.whyPopular.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('home.whyPopular.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('home.whyPopular.viralAppeal.title')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('home.whyPopular.appeal')}
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 rounded-full p-2 mr-3">
                  <span className="text-sm font-bold">🔥</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('home.whyPopular.viralAppeal.tiktok')}</h4>
                  <p className="text-sm text-gray-600">{t('home.whyPopular.viralAppeal.tiktokDesc')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-100 text-purple-600 rounded-full p-2 mr-3">
                  <span className="text-sm font-bold">🎭</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('home.whyPopular.viralAppeal.dualPersonality')}</h4>
                  <p className="text-sm text-gray-600">{t('home.whyPopular.viralAppeal.dualPersonalityDesc')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full p-2 mr-3">
                  <span className="text-sm font-bold">🎯</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('home.whyPopular.viralAppeal.creativeFreedom')}</h4>
                  <p className="text-sm text-gray-600">{t('home.whyPopular.viralAppeal.creativeFreedomDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('home.whyPopular.playerReviews.title')}
            </h3>
            <div className="space-y-6">
              <blockquote className="border-l-4 border-blue-500 pl-4">
                <p className="text-gray-700 italic mb-2">
                  {t('home.whyPopular.playerReviews.review1')}
                </p>
                <footer className="text-sm text-gray-500">— {t('home.whyPopular.playerReviews.reviewer1')}</footer>
              </blockquote>
              
              <blockquote className="border-l-4 border-green-500 pl-4">
                <p className="text-gray-700 italic mb-2">
                  {t('home.whyPopular.playerReviews.review2')}
                </p>
                <footer className="text-sm text-gray-500">— {t('home.whyPopular.playerReviews.reviewer2')}</footer>
              </blockquote>
              
              <blockquote className="border-l-4 border-purple-500 pl-4">
                <p className="text-gray-700 italic mb-2">
                  {t('home.whyPopular.playerReviews.review3')}
                </p>
                <footer className="text-sm text-gray-500">— {t('home.whyPopular.playerReviews.reviewer3')}</footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* 游戏特色展示 */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-4">🎮</div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">{t('home.whyPopular.features.easyToPlay')}</h4>
            <p className="text-gray-600">
              {t('home.whyPopular.features.easyToPlayDesc')}
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">{t('home.whyPopular.features.creativeFreedom')}</h4>
            <p className="text-gray-600">
              {t('home.whyPopular.features.creativeFreedomDesc')}
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">{t('home.whyPopular.features.socialSharing')}</h4>
            <p className="text-gray-600">
              {t('home.whyPopular.features.socialSharingDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 