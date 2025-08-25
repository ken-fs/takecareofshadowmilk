import { ShadowMilkStats } from '@/types/game';

interface GameStatsProps {
  stats: ShadowMilkStats;
}

export function GameStats({ stats }: GameStatsProps) {
  const getStatColor = (value: number) => {
    if (value >= 80) return 'text-green-600';
    if (value >= 50) return 'text-yellow-600';
    if (value >= 20) return 'text-orange-600';
    return 'text-red-600';
  };

  const getStatBarColor = (value: number) => {
    if (value >= 80) return 'bg-green-500';
    if (value >= 50) return 'bg-yellow-500';
    if (value >= 20) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <span className="text-2xl mr-2">🍪</span>
        Shadow Milk 状态
      </h3>
      
      <div className="space-y-4">
        {/* 能量 */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">⚡ 能量</span>
            <span className={`text-sm font-bold ${getStatColor(stats.energy)}`}>
              {Math.round(stats.energy)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${getStatBarColor(stats.energy)}`}
              style={{ width: `${stats.energy}%` }}
            />
          </div>
        </div>

        {/* 健康 */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">❤️ 健康</span>
            <span className={`text-sm font-bold ${getStatColor(stats.health)}`}>
              {Math.round(stats.health)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${getStatBarColor(stats.health)}`}
              style={{ width: `${stats.health}%` }}
            />
          </div>
        </div>

        {/* 饥饿 */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">🍽️ 饥饿</span>
            <span className={`text-sm font-bold ${getStatColor(stats.hunger)}`}>
              {Math.round(stats.hunger)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${getStatBarColor(stats.hunger)}`}
              style={{ width: `${stats.hunger}%` }}
            />
          </div>
        </div>

        {/* 卫生 */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">🧼 卫生</span>
            <span className={`text-sm font-bold ${getStatColor(stats.hygiene)}`}>
              {Math.round(stats.hygiene)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${getStatBarColor(stats.hygiene)}`}
              style={{ width: `${stats.hygiene}%` }}
            />
          </div>
        </div>
      </div>

      {/* 状态提示 */}
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-xs text-blue-700">
          💡 提示：当饥饿或能量低于20%时，健康值会逐渐下降。记得及时照顾你的Shadow Milk！
        </p>
      </div>
    </div>
  );
} 