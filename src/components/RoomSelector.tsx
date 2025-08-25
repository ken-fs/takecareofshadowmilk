import { ROOMS } from '@/data/gameData';
import { useLanguage } from '@/contexts/LanguageContext';

interface RoomSelectorProps {
  currentRoom: string;
  onRoomChange: (roomId: string) => void;
}

export function RoomSelector({ currentRoom, onRoomChange }: RoomSelectorProps) {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <span className="text-2xl mr-2">🏠</span>
        {t('game.roomSelector.title')}
      </h3>
      
      <div className="space-y-3">
        {ROOMS.map((room) => (
          <button
            key={room.id}
            onClick={() => onRoomChange(room.id)}
            className={`w-full p-3 rounded-lg text-left transition-all duration-200 ${
              currentRoom === room.id
                ? 'bg-blue-100 border-2 border-blue-300 text-blue-900'
                : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent text-gray-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">{t(`game.rooms.${room.id}.name`)}</h4>
                <p className="text-sm text-gray-600 mt-1">{t(`game.rooms.${room.id}.description`)}</p>
              </div>
              <div className={`w-3 h-3 rounded-full ${
                currentRoom === room.id ? 'bg-blue-500' : 'bg-gray-300'
              }`} />
            </div>
          </button>
        ))}
      </div>

      {/* 房间信息 */}
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-600">
          💡 {t('game.roomSelector.tip')}
        </p>
      </div>
    </div>
  );
} 