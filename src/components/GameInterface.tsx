import { ROOMS, GAME_ITEMS } from '@/data/gameData';
import { useState } from 'react';

interface GameInterfaceProps {
  currentRoom: string;
  onUseItem: (itemId: string) => void;
}

export function GameInterface({ currentRoom, onUseItem }: GameInterfaceProps) {
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [characterMood, setCharacterMood] = useState<'happy' | 'neutral' | 'sad'>('happy');

  const currentRoomData = ROOMS.find(room => room.id === currentRoom);
  const roomItems = currentRoomData?.items || [];

  const handleItemDrop = (itemId: string) => {
    if (draggedItem) {
      onUseItem(draggedItem);
      setDraggedItem(null);
      
      // 根据物品类型改变角色心情
      const item = GAME_ITEMS.find(i => i.id === draggedItem);
      if (item) {
        if (item.type === 'food' || item.type === 'toy') {
          setCharacterMood('happy');
        } else if (item.type === 'tool') {
          setCharacterMood('neutral');
        }
      }
    }
  };

  const getCharacterEmoji = () => {
    switch (characterMood) {
      case 'happy': return '😊';
      case 'neutral': return '😐';
      case 'sad': return '😢';
      default: return '🍪';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {currentRoomData?.name}
        </h3>
        <p className="text-gray-600">{currentRoomData?.description}</p>
      </div>

      {/* 房间背景 */}
      <div className={`relative h-64 rounded-lg mb-6 ${currentRoomData?.background} border-2 border-gray-200`}>
        {/* Shadow Milk 角色 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-8xl animate-bounce">
            {getCharacterEmoji()}
          </div>
        </div>

        {/* 房间物品 */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {roomItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg p-2 shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onUseItem(item.id)}
                title={item.description}
              >
                <div className="text-2xl">{item.icon}</div>
                <div className="text-xs text-gray-600 mt-1">{item.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 垃圾桶 */}
        <div className="absolute top-4 right-4">
          <div className="bg-gray-300 rounded-lg p-3 cursor-pointer hover:bg-gray-400 transition-colors">
            <div className="text-2xl">🗑️</div>
            <div className="text-xs text-gray-600">垃圾桶</div>
          </div>
        </div>
      </div>

      {/* 游戏说明 */}
      <div className="bg-blue-50 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">游戏说明</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• 点击房间中的物品来使用它们</li>
          <li>• 不同物品会影响Shadow Milk的不同属性</li>
          <li>• 将不需要的物品拖到垃圾桶</li>
          <li>• 在房间之间切换来探索更多内容</li>
        </ul>
      </div>

      {/* 拖拽提示 */}
      {draggedItem && (
        <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-sm text-yellow-800">
            🎯 正在拖拽物品，点击房间中的位置来使用它
          </p>
        </div>
      )}
    </div>
  );
} 