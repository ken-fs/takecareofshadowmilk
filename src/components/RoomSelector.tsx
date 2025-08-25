import { ROOMS } from '@/data/gameData';
import { useLanguage } from '@/contexts/LanguageContext';

interface RoomSelectorProps {
  currentRoom: string;
  onRoomChange: (roomId: string) => void;
}

export function RoomSelector({ currentRoom, onRoomChange }: RoomSelectorProps) {
  const { t } = useLanguage();
  
  return (
    <div className="card hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-bold text-gradient mb-6 flex items-center">
        <span className="text-3xl mr-3 animate-bounce-slow">🏠</span>
        {t('game.roomSelector.title')}
      </h3>
      
      <div className="space-y-4">
        {ROOMS.map((room) => (
          <button
            key={room.id}
            onClick={() => onRoomChange(room.id)}
            className={`w-full p-4 rounded-xl text-left transition-all duration-300 transform hover:scale-105 ${
              currentRoom === room.id
                ? 'glass-effect border-2 border-purple-500/50 text-purple-200 shadow-lg'
                : 'glass-effect hover:bg-white/10 border-2 border-transparent text-gray-300 hover:text-white'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-lg mb-2">{t(`game.rooms.${room.id}.name`)}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{t(`game.rooms.${room.id}.description`)}</p>
              </div>
              <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentRoom === room.id ? 'bg-purple-400 shadow-lg' : 'bg-gray-500'
              }`} />
            </div>
          </button>
        ))}
      </div>

      {/* 房间信息 */}
      <div className="mt-6 p-4 glass-effect border border-purple-500/30 rounded-xl">
        <p className="text-sm text-purple-300 leading-relaxed">
          💡 {t('game.roomSelector.tip')}
        </p>
      </div>
    </div>
  );
} 