import { ROOMS, GAME_ITEMS } from '@/data/gameData';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface GameInterfaceProps {
  currentRoom: string;
  onUseItem: (itemId: string) => void;
}

export function GameInterface({ currentRoom, onUseItem }: GameInterfaceProps) {
  const { t } = useLanguage();
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
    <div className="card hover:scale-105 transition-transform duration-300">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gradient mb-3">
          {t(`game.rooms.${currentRoom}.name`)}
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed">{t(`game.rooms.${currentRoom}.description`)}</p>
      </div>

      {/* 房间背景 */}
      <div className={`relative h-80 rounded-2xl mb-8 glass-effect border-2 border-purple-500/30 overflow-hidden`}>
        {/* Shadow Milk 角色 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-9xl animate-bounce-slow">
            {getCharacterEmoji()}
          </div>
        </div>

        {/* 房间物品 */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {roomItems.map((item) => (
              <div
                key={item.id}
                className="glass-effect rounded-xl p-3 shadow-lg border border-white/20 cursor-pointer hover:scale-110 transition-all duration-300 group"
                onClick={() => onUseItem(item.id)}
                title={t(`game.items.${item.id}.description`)}
              >
                <div className="text-3xl group-hover:animate-bounce-slow">{item.icon}</div>
                <div className="text-xs text-gray-300 mt-2 font-semibold">{t(`game.items.${item.id}.name`)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 垃圾桶 */}
        <div className="absolute top-6 right-6">
          <div className="glass-effect rounded-xl p-4 cursor-pointer hover:scale-110 hover:bg-red-500/20 transition-all duration-300 border border-red-500/30">
            <div className="text-3xl">🗑️</div>
            <div className="text-xs text-gray-300 font-semibold">{t('game.interface.trashBin')}</div>
          </div>
        </div>
      </div>

      {/* 游戏说明 */}
      <div className="glass-effect p-6 border border-blue-500/30 rounded-xl">
        <h4 className="font-bold text-blue-300 mb-4 text-lg">{t('game.interface.instructions.title')}</h4>
        <ul className="text-sm text-gray-300 space-y-2 leading-relaxed">
          <li className="flex items-center">
            <span className="text-blue-400 mr-2">•</span>
            {t('game.interface.instructions.clickItems')}
          </li>
          <li className="flex items-center">
            <span className="text-blue-400 mr-2">•</span>
            {t('game.interface.instructions.itemEffects')}
          </li>
          <li className="flex items-center">
            <span className="text-blue-400 mr-2">•</span>
            {t('game.interface.instructions.dragToTrash')}
          </li>
          <li className="flex items-center">
            <span className="text-blue-400 mr-2">•</span>
            {t('game.interface.instructions.switchRooms')}
          </li>
        </ul>
      </div>

      {/* 拖拽提示 */}
      {draggedItem && (
        <div className="mt-6 p-4 glass-effect border border-yellow-500/30 rounded-xl">
          <p className="text-sm text-yellow-300 leading-relaxed">
            🎯 {t('game.interface.dragHint')}
          </p>
        </div>
      )}
    </div>
  );
} 