'use client';

import { GameInterface } from '@/components/GameInterface';
import { GameStats } from '@/components/GameStats';
import { RoomSelector } from '@/components/RoomSelector';
import { Inventory } from '@/components/Inventory';
import { useGameState } from '@/hooks/useGameState';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';
import Head from 'next/head';

export default function GamePage() {
  const { state, changeRoom, useItem, addItem, removeItem, toggleGame } = useGameState();
  const { t } = useLanguage();

  // 添加结构化数据
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "VideoGame",
      "name": "Take Care of Shadow Milk",
      "description": "A virtual pet-style Scratch game where players can take care of the Shadow Milk Cookie character from Cookie Run: Kingdom",
      "genre": ["Virtual Pet", "Simulation Game", "Casual Game"],
      "gamePlatform": "Web Browser",
      "applicationCategory": "Game",
      "operatingSystem": "Any",
      "url": "http://takecareofshadowmilk.site",
      // "image": "https://takecareofshadowmilk.org/game-preview.jpg",
      "author": {
        "@type": "Organization",
        "name": "GPE_sb3"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Take Care of Shadow Milk"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "ratingCount": "1000"
      }
    };

    // 添加结构化数据到页面
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Take Care of Shadow Milk Game - Free Online Virtual Pet Game</title>
        <meta name="description" content="Start playing Take Care of Shadow Milk game now! Take care of your virtual pet and experience unique Scratch gameplay. Completely free, no download required!" />
        <meta name="keywords" content="Take Care of Shadow Milk, Game, Virtual Pet, Scratch Game, Online Game, Free Game" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Take Care of Shadow Milk Game - Free Online Virtual Pet Game" />
        <meta property="og:description" content="Start playing Take Care of Shadow Milk game now! Take care of your virtual pet and experience unique Scratch gameplay." />
        <meta property="og:type" content="game" />
        <meta property="og:url" content="http://takecareofshadowmilk.site/game" />
        <meta property="og:site_name" content="Take Care of Shadow Milk" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Take Care of Shadow Milk Game" />
        <meta name="twitter:description" content="Start playing Take Care of Shadow Milk game now!" />
        
        {/* 游戏特定meta标签 */}
        <meta name="game:release_date" content="2024-01-01" />
        <meta name="game:category" content="Virtual Pet Game" />
        <meta name="game:platform" content="Web Browser" />
        <meta name="game:rating" content="Suitable for all ages" />
      </Head>

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
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                  state.isGameActive
                    ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg'
                    : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg'
                }`}
              >
                {state.isGameActive ? t('game.pauseGame') : t('game.startGame')}
              </button>
              <div className="glass-effect px-4 py-2 rounded-xl border border-purple-500/30">
                <span className="text-sm text-purple-300 font-semibold">
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