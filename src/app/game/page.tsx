'use client';

import { GameInterface } from '@/components/GameInterface';
import { GameStats } from '@/components/GameStats';
import { RoomSelector } from '@/components/RoomSelector';
import { Inventory } from '@/components/Inventory';
import { useGameState } from '@/hooks/useGameState';
import { useLanguage } from '@/contexts/LanguageContext';

export default function GamePage() {
  const { state, changeRoom, useItem, addItem, removeItem, toggleGame } = useGameState();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* 游戏标题栏 */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            {t('game.title')}
          </h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => toggleGame(!state.isGameActive)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                state.isGameActive
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              {state.isGameActive ? t('game.pauseGame') : t('game.startGame')}
            </button>
            <span className="text-sm text-gray-600">
              {t('game.gameTime')}: {Math.floor(state.gameTime / 60)}:{(state.gameTime % 60).toString().padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* 左侧边栏 - 状态和房间选择 */}
          <div className="lg:col-span-1 space-y-6">
            <GameStats stats={state.stats} />
            <RoomSelector 
              currentRoom={state.currentRoom} 
              onRoomChange={changeRoom} 
            />
          </div>

          {/* 主游戏区域 */}
          <div className="lg:col-span-2">
            <GameInterface 
              currentRoom={state.currentRoom}
              onUseItem={useItem}
            />
          </div>

          {/* 右侧边栏 - 物品栏 */}
          <div className="lg:col-span-1">
            <Inventory 
              items={state.inventory}
              onUseItem={useItem}
              onRemoveItem={removeItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
}   