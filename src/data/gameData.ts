import { Room, GameItem } from '@/types/game';

export const GAME_ITEMS: GameItem[] = [
  // 食物类
  {
    id: 'cookie',
    name: 'cookie',
    type: 'food',
    icon: '🍪',
    effect: { hunger: 20, energy: 5 },
    description: 'cookie'
  },
  {
    id: 'milk',
    name: 'milk',
    type: 'food',
    icon: '🥛',
    effect: { hunger: 15, health: 10 },
    description: 'milk'
  },
  {
    id: 'cake',
    name: 'cake',
    type: 'food',
    icon: '🎂',
    effect: { hunger: 30, energy: 15, health: 5 },
    description: 'cake'
  },
  
  // 玩具类
  {
    id: 'ball',
    name: 'ball',
    type: 'toy',
    icon: '⚽',
    effect: { energy: 10 },
    description: 'ball'
  },
  {
    id: 'teddy',
    name: 'teddy',
    type: 'toy',
    icon: '🧸',
    effect: { energy: 5, health: 5 },
    description: 'teddy'
  },
  
  // 工具类
  {
    id: 'bath',
    name: 'bath',
    type: 'tool',
    icon: '🛁',
    effect: { hygiene: 30, energy: -5 },
    description: 'bath'
  },
  {
    id: 'medicine',
    name: 'medicine',
    type: 'tool',
    icon: '💊',
    effect: { health: 25, energy: -10 },
    description: 'medicine'
  },
  
  // 家具类
  {
    id: 'bed',
    name: 'bed',
    type: 'furniture',
    icon: '🛏️',
    effect: { energy: 40, health: 10 },
    description: 'bed'
  },
  {
    id: 'chair',
    name: 'chair',
    type: 'furniture',
    icon: '🪑',
    effect: { energy: 5 },
    description: 'chair'
  }
];

export const ROOMS: Room[] = [
  {
    id: 'bedroom',
    name: 'bedroom',
    description: 'bedroom',
    background: 'bg-gradient-to-br from-blue-100 to-purple-100',
    items: GAME_ITEMS.filter(item => item.type === 'furniture')
  },
  {
    id: 'kitchen',
    name: 'kitchen',
    description: 'kitchen',
    background: 'bg-gradient-to-br from-yellow-100 to-orange-100',
    items: GAME_ITEMS.filter(item => item.type === 'food')
  },
  {
    id: 'bathroom',
    name: 'bathroom',
    description: 'bathroom',
    background: 'bg-gradient-to-br from-cyan-100 to-blue-100',
    items: GAME_ITEMS.filter(item => item.type === 'tool')
  },
  {
    id: 'playroom',
    name: 'playroom',
    description: 'playroom',
    background: 'bg-gradient-to-br from-green-100 to-emerald-100',
    items: GAME_ITEMS.filter(item => item.type === 'toy')
  }
];

export const INITIAL_STATS = {
  energy: 100,
  health: 100,
  hunger: 100,
  hygiene: 100
}; 