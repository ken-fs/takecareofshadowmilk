import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIframeGame } from '@/hooks/useGameState';

export const GameHero: React.FC = () => {
  const { t } = useLanguage();
  const { isGameLoaded, isFullscreen, handleGameLoad, handleFullscreen, iframeRef } = useIframeGame();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      {/* 主要内容 */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-6 animate-fade-in">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay">
            {t('home.hero.subtitle')}
          </p>
        </div>

        <div className="relative animate-fade-in-scale">
          <div className="glass-effect p-12 max-w-5xl mx-auto border border-purple-500/30">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-8 backdrop-blur-sm">
              {/* 游戏iframe区域 */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-purple-400/50 shadow-2xl">
                <iframe
                  ref={iframeRef}
                  src="https://takecareofshadowmilk.org/take-care-of-shadow-milk.embed"
                  className="w-full h-full"
                  title={t('home.hero.gameTitle')}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  onLoad={handleGameLoad}
                />
                {/* 加载状态遮罩 */}
                {!isGameLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
                      <p className="text-purple-200 text-sm">{t('home.hero.gameLoading')}</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* 游戏控制按钮 */}
              <div className="flex justify-center mt-6 space-x-4">
                <button 
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!isGameLoaded}
                >
                  <span>{t('home.hero.startGameButton')}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button 
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleFullscreen}
                  disabled={!isGameLoaded}
                >
                  <span>{isFullscreen ? t('home.hero.exitFullscreenButton') : t('home.hero.fullscreenButton')}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 