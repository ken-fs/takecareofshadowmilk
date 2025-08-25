import { GameItem } from '@/types/game';

interface InventoryProps {
  items: GameItem[];
  onUseItem: (itemId: string) => void;
  onRemoveItem: (itemId: string) => void;
}

export function Inventory({ items, onUseItem, onRemoveItem }: InventoryProps) {
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

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <span className="text-2xl mr-2">🎒</span>
        物品栏
        <span className="ml-auto text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
          {items.length}
        </span>
      </h3>

      {items.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <div className="text-4xl mb-2">📭</div>
          <p>物品栏是空的</p>
          <p className="text-sm">在房间中收集物品来开始游戏</p>
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
                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getItemTypeColor(item.type)}`}>
                      {getItemTypeIcon(item.type)} {item.type}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => onUseItem(item.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-2 py-1 rounded transition-colors"
                    title="使用物品"
                  >
                    使用
                  </button>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="bg-red-600 hover:bg-red-700 text-white text-xs px-2 py-1 rounded transition-colors"
                    title="丢弃物品"
                  >
                    丢弃
                  </button>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              
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
                      {value > 0 ? '+' : ''}{value}
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
          💡 提示：使用物品会影响Shadow Milk的状态。合理使用物品来保持他的健康！
        </p>
      </div>
    </div>
  );
} 