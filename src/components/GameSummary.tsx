import { useLanguage } from '@/contexts/LanguageContext';

export function GameSummary() {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            {t('home.summary.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('home.summary.description')}
          </p>
        </div>

        {/* 游戏特色表格 */}
        <div className="card mb-16">
          <h3 className="text-3xl font-bold text-gradient mb-8 text-center">
            {t('home.summary.featuresTable.title')}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700/50">
                  <th className="text-left py-4 px-6 font-bold text-purple-300">{t('home.summary.featuresTable.feature')}</th>
                  <th className="text-left py-4 px-6 font-bold text-purple-300">{t('home.summary.featuresTable.details')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700/50">
                <tr className="hover:bg-gray-800/50 transition-colors duration-300">
                  <td className="py-4 px-6 font-semibold text-gray-200">{t('home.summary.gameType')}</td>
                  <td className="py-4 px-6 text-gray-300">{t('home.summary.gameTypeValue')}</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors duration-300">
                  <td className="py-4 px-6 font-semibold text-gray-200">{t('home.summary.creator')}</td>
                  <td className="py-4 px-6 text-gray-300"><strong className="text-purple-400">{t('home.summary.creatorValue')}</strong></td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors duration-300">
                  <td className="py-4 px-6 font-semibold text-gray-200">{t('home.summary.mainCharacter')}</td>
                  <td className="py-4 px-6 text-gray-300">
                    {t('home.summary.mainCharacterValue')}
                  </td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors duration-300">
                  <td className="py-4 px-6 font-semibold text-gray-200">{t('home.summary.gameplay')}</td>
                  <td className="py-4 px-6 text-gray-300">
                    {t('home.summary.gameplayValue')}
                  </td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors duration-300">
                  <td className="py-4 px-6 font-semibold text-gray-200">{t('home.summary.statusMetrics')}</td>
                  <td className="py-4 px-6 text-gray-300">{t('home.summary.statusMetricsValue')}</td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors duration-300">
                  <td className="py-4 px-6 font-semibold text-gray-200">{t('home.summary.whyTrendy')}</td>
                  <td className="py-4 px-6 text-gray-300">{t('home.summary.whyTrendyValue')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 游戏玩法概述 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gradient mb-6">
              {t('home.summary.gameplayOverview.title')}
            </h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              {t('home.summary.gameplayOverview.description')}
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-3 text-xl">✓</span>
                <span className="text-lg">{t('home.summary.gameplayOverview.point1')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 text-xl">✓</span>
                <span className="text-lg">{t('home.summary.gameplayOverview.point2')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 text-xl">✓</span>
                <span className="text-lg">{t('home.summary.gameplayOverview.point3')}</span>
              </li>
            </ul>
          </div>
          
          <div className="glass-effect p-10 border border-purple-500/30">
            <h4 className="text-2xl font-bold text-gradient mb-6">{t('home.howToPlay.title')}</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 text-2xl">🏠</span>
                <span className="text-lg">{t('home.howToPlay.steps.0')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 text-2xl">🎯</span>
                <span className="text-lg">{t('home.howToPlay.steps.1')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 text-2xl">📊</span>
                <span className="text-lg">{t('home.howToPlay.steps.2')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 text-2xl">🗑️</span>
                <span className="text-lg">{t('home.howToPlay.steps.3')}</span>
              </li>
            </ul>
            <p className="text-gray-300 mt-6 font-semibold text-lg">
              {t('home.howToPlay.conclusion')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 