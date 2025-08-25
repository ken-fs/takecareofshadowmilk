import { ROOMS } from '@/data/gameData';

interface RoomSelectorProps {
  currentRoom: string;
  onRoomChange: (roomId: string) => void;
}

export function RoomSelector({ currentRoom, onRoomChange }: RoomSelectorProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <span className="text-2xl mr-2">🏠</span>
        选择房间
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
                <h4 className="font-medium">{room.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{room.description}</p>
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
          💡 提示：不同房间有不同的物品和功能。探索每个房间来发现新的游戏内容！
        </p>
      </div>
    </div>
  );
} 