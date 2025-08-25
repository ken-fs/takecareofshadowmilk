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
      case 'food': return 'bg-green-100 text-green-800';
      case 'toy': return 'bg-blue-100 text-blue-800';
      case 'tool': return 'bg-purple-100 text-purple-800';
      case 'furniture': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
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
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <span className="text-2xl mr-2">🎒</span>
        {t('game.inventory.title')}
        <span className="ml-auto text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
          {items.length}
        </span>
      </h3>

      {items.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <div className="text-4xl mb-2">📭</div>
          <p>{t('game.inventory.empty')}</p>
          <p className="text-sm">{t('game.inventory.emptyHint')}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-lg p-3 border border-gray-200 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <h4 className="font-medium text-gray-900">{t(`game.items.${item.id}.name`)}</h4>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getItemTypeColor(item.type)}`}>
                      {getItemTypeIcon(item.type)} {getItemTypeName(item.type)}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => onUseItem(item.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-2 py-1 rounded transition-colors"
                    title={t('game.inventory.useItem')}
                  >
                    {t('game.inventory.use')}
                  </button>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-1 rounded transition-colors"
                    title={t('game.inventory.removeItem')}
                  >
                    {t('game.inventory.remove')}
                  </button>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-2">{t(`game.items.${item.id}.description`)}</p>
              
              {/* 物品效果 */}
              {Object.keys(item.effect).length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {Object.entries(item.effect).map(([key, value]) => (
                    <span
                      key={key}
                      className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        value && value > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
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
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-600">
          💡 {t('game.inventory.tip')}
        </p>
      </div>
    </div>
  );
} 