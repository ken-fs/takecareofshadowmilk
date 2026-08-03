import { ShadowMilkStats } from '@/types/game';
import { useLanguage } from '@/contexts/LanguageContext';

interface GameStatsProps {
  stats: ShadowMilkStats;
}

export function GameStats({ stats }: GameStatsProps) {
  const { t } = useLanguage();
  
  const getStatColor = (value: number) => {
    if (value >= 80) return 'text-meter';
    if (value >= 50) return 'text-yellow-400';
    if (value >= 20) return 'text-orange-400';
    return 'text-red-400';
  };

  // Severity is real information, so these stay colour-coded — flat fills to
  // match the rest of the system.
  const getStatBarColor = (value: number) => {
    if (value >= 80) return 'bg-meter';
    if (value >= 50) return 'bg-yellow-400';
    if (value >= 20) return 'bg-orange-400';
    return 'bg-red-400';
  };

  return (
    <div className="card hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-bold text-gradient mb-6 flex items-center">
        <span className="text-3xl mr-3 animate-bounce-slow">🍪</span>
        {t('game.stats.title')}
      </h3>
      
      <div className="space-y-6">
        {/* 能量 */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-gray-300">⚡ {t('game.stats.energy')}</span>
            <span className={`text-sm font-bold ${getStatColor(stats.energy)}`}>
              {Math.round(stats.energy)}%
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-500 ${getStatBarColor(stats.energy)} shadow-lg`}
              style={{ width: `${stats.energy}%` }}
            />
          </div>
        </div>

        {/* 健康 */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-gray-300">❤️ {t('game.stats.health')}</span>
            <span className={`text-sm font-bold ${getStatColor(stats.health)}`}>
              {Math.round(stats.health)}%
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-500 ${getStatBarColor(stats.health)} shadow-lg`}
              style={{ width: `${stats.health}%` }}
            />
          </div>
        </div>

        {/* 饥饿 */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-gray-300">🍽️ {t('game.stats.hunger')}</span>
            <span className={`text-sm font-bold ${getStatColor(stats.hunger)}`}>
              {Math.round(stats.hunger)}%
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-500 ${getStatBarColor(stats.hunger)} shadow-lg`}
              style={{ width: `${stats.hunger}%` }}
            />
          </div>
        </div>

        {/* 卫生 */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-gray-300">🧼 {t('game.stats.hygiene')}</span>
            <span className={`text-sm font-bold ${getStatColor(stats.hygiene)}`}>
              {Math.round(stats.hygiene)}%
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-500 ${getStatBarColor(stats.hygiene)} shadow-lg`}
              style={{ width: `${stats.hygiene}%` }}
            />
          </div>
        </div>
      </div>

      {/* 状态提示 */}
      <div className="mt-6 p-4 glass-effect border border-ice/20 rounded-xl">
        <p className="text-sm text-blue-300 leading-relaxed">
          💡 {t('game.stats.tip')}
        </p>
      </div>
    </div>
  );
} 