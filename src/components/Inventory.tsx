import { GameItem } from '@/types/game';
import { useLanguage } from '@/contexts/LanguageContext';

interface InventoryProps {
  items: GameItem[];
  onUseItem: (itemId: string) => void;
  onRemoveItem: (itemId: string) => void;
}

export function Inventory({ items, onUseItem, onRemoveItem }: InventoryProps) {
  const { t } = useLanguage();
  
  const getItemTypeColor = (type: string) => {
    switch (type) {
      case 'food': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'toy': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'tool': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'furniture': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getItemTypeIcon = (type: string) => {
    switch (type) {
      case 'food': return '🍽️';
      case 'toy': return '🎮';
      case 'tool': return '🔧';
      case 'furniture': return '🪑';
      default: return '📦';
    }
  };

  const getItemTypeName = (type: string) => {
    switch (type) {
      case 'food': return t('game.inventory.itemTypes.food');
      case 'toy': return t('game.inventory.itemTypes.toy');
      case 'tool': return t('game.inventory.itemTypes.tool');
      case 'furniture': return t('game.inventory.itemTypes.furniture');
      default: return t('game.inventory.itemTypes.other');
    }
  };

  const getStatName = (key: string) => {
    switch (key) {
      case 'energy': return t('game.stats.energy');
      case 'health': return t('game.stats.health');
      case 'hunger': return t('game.stats.hunger');
      case 'hygiene': return t('game.stats.hygiene');
      default: return key;
    }
  };

  return (
    <div className="card hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-bold text-gradient mb-6 flex items-center">
        <span className="text-3xl mr-3 animate-bounce-slow">🎒</span>
        {t('game.inventory.title')}
        <span className="ml-auto text-sm text-purple-300 glass-effect px-3 py-1 rounded-full border border-purple-500/30">
          {items.length}
        </span>
      </h3>

      {items.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <div className="text-5xl mb-4 animate-pulse-slow">📭</div>
          <p className="text-lg mb-2">{t('game.inventory.empty')}</p>
          <p className="text-sm text-gray-500">{t('game.inventory.emptyHint')}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="glass-effect rounded-xl p-4 border border-gray-700/50 hover:border-purple-500/30 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl group-hover:animate-bounce-slow">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-200 text-lg mb-2">{t(`game.items.${item.id}.name`)}</h4>
                    <span className={`inline-block px-3 py-2 rounded-full text-xs font-bold border ${getItemTypeColor(item.type)}`}>
                      {getItemTypeIcon(item.type)} {getItemTypeName(item.type)}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => onUseItem(item.id)}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xs px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    title={t('game.inventory.useItem')}
                  >
                    {t('game.inventory.use')}
                  </button>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xs px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    title={t('game.inventory.removeItem')}
                  >
                    {t('game.inventory.remove')}
                  </button>
                </div>
              </div>
              
              <p className="text-sm text-gray-300 mb-3 leading-relaxed">{t(`game.items.${item.id}.description`)}</p>
              
              {/* 物品效果 */}
              {Object.keys(item.effect).length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {Object.entries(item.effect).map(([key, value]) => (
                    <span
                      key={key}
                      className={`inline-block px-3 py-2 rounded-lg text-xs font-bold border ${
                        value && value > 0 
                          ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                          : 'bg-red-500/20 text-red-400 border-red-500/30'
                      }`}
                    >
                      {key === 'energy' && '⚡'}
                      {key === 'health' && '❤️'}
                      {key === 'hunger' && '🍽️'}
                      {key === 'hygiene' && '🧼'}
                      {getStatName(key)} {value > 0 ? '+' : ''}{value}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* 物品栏说明 */}
      <div className="mt-6 p-4 glass-effect border border-purple-500/30 rounded-xl">
        <p className="text-sm text-purple-300 leading-relaxed">
          💡 {t('game.inventory.tip')}
        </p>
      </div>
    </div>
  );
} 