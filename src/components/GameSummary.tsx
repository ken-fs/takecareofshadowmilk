import { useLanguage } from '@/contexts/LanguageContext';

export function GameSummary() {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('home.summary.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('home.summary.description')}
          </p>
        </div>

        {/* 游戏特色表格 */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {t('home.summary.featuresTable.title')}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">{t('home.summary.featuresTable.feature')}</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">{t('home.summary.featuresTable.details')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900">{t('home.summary.gameType')}</td>
                  <td className="py-3 px-4 text-gray-600">{t('home.summary.gameTypeValue')}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900">{t('home.summary.creator')}</td>
                  <td className="py-3 px-4 text-gray-600"><strong>{t('home.summary.creatorValue')}</strong></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900">{t('home.summary.mainCharacter')}</td>
                  <td className="py-3 px-4 text-gray-600">
                    {t('home.summary.mainCharacterValue')}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900">{t('home.summary.gameplay')}</td>
                  <td className="py-3 px-4 text-gray-600">
                    {t('home.summary.gameplayValue')}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900">{t('home.summary.statusMetrics')}</td>
                  <td className="py-3 px-4 text-gray-600">{t('home.summary.statusMetricsValue')}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900">{t('home.summary.whyTrendy')}</td>
                  <td className="py-3 px-4 text-gray-600">{t('home.summary.whyTrendyValue')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 游戏玩法概述 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('home.summary.gameplayOverview.title')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('home.summary.gameplayOverview.description')}
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                {t('home.summary.gameplayOverview.point1')}
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                {t('home.summary.gameplayOverview.point2')}
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                {t('home.summary.gameplayOverview.point3')}
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">{t('home.howToPlay.title')}</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🏠</span>
                {t('home.howToPlay.steps.0')}
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🎯</span>
                {t('home.howToPlay.steps.1')}
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">📊</span>
                {t('home.howToPlay.steps.2')}
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🗑️</span>
                {t('home.howToPlay.steps.3')}
              </li>
            </ul>
            <p className="text-gray-600 mt-4 font-medium">
              {t('home.howToPlay.conclusion')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 