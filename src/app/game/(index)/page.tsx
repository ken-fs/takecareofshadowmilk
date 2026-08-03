'use client';

import { GameInterface } from '@/components/GameInterface';
import { GameStats } from '@/components/GameStats';
import { RoomSelector } from '@/components/RoomSelector';
import { Inventory } from '@/components/Inventory';
import { useGameState } from '@/hooks/useGameState';
import { useLanguage } from '@/contexts/LanguageContext';

/*
  Metadata and VideoGame schema now live in ./layout.tsx as server-rendered
  output. This page previously used next/head, which App Router ignores
  entirely, and injected its JSON-LD from useEffect — so none of it ever
  reached the served HTML.
*/

export default function GamePage() {
  const { state, changeRoom, useItem, addItem, removeItem, toggleGame } = useGameState();
  const { t } = useLanguage();

  return (
    <>
      <div className="min-h-screen">
        {/* 游戏标题栏 */}
        <div className="glass-effect sticky top-0 z-50 backdrop-blur-xl px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gradient">
              {t('game.title')}
            </h1>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => toggleGame(!state.isGameActive)}
                className={state.isGameActive ? 'btn-secondary' : 'btn-primary'}
              >
                {state.isGameActive ? t('game.pauseGame') : t('game.startGame')}
              </button>
              <div className="glass-effect px-4 py-2 rounded-xl border border-ice/30">
                <span className="text-sm text-ice font-semibold">
                  {t('game.gameTime')}: {Math.floor(state.gameTime / 60)}:{(state.gameTime % 60).toString().padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* 左侧边栏 - 状态和房间选择 */}
            <div className="lg:col-span-1 space-y-8">
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
    </>
  );
}   