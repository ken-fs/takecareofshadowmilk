import { Room, GameItem } from '@/types/game';

export const GAME_ITEMS: GameItem[] = [
  // 食物类
  {
    id: 'cookie',
    name: '饼干',
    type: 'food',
    icon: '🍪',
    effect: { hunger: 20, energy: 5 },
    description: '美味的饼干，可以填饱肚子'
  },
  {
    id: 'milk',
    name: '牛奶',
    type: 'food',
    icon: '🥛',
    effect: { hunger: 15, health: 10 },
    description: '营养丰富的牛奶'
  },
  {
    id: 'cake',
    name: '蛋糕',
    type: 'food',
    icon: '🎂',
    effect: { hunger: 30, energy: 15, health: 5 },
    description: '美味的生日蛋糕'
  },
  
  // 玩具类
  {
    id: 'ball',
    name: '球',
    type: 'toy',
    icon: '⚽',
    effect: { energy: 10 },
    description: '可以玩的球'
  },
  {
    id: 'teddy',
    name: '泰迪熊',
    type: 'toy',
    icon: '🧸',
    effect: { energy: 5, health: 5 },
    description: '可爱的泰迪熊玩偶'
  },
  
  // 工具类
  {
    id: 'bath',
    name: '洗澡',
    type: 'tool',
    icon: '🛁',
    effect: { hygiene: 30, energy: -5 },
    description: '清洁身体，提高卫生度'
  },
  {
    id: 'medicine',
    name: '药物',
    type: 'tool',
    icon: '💊',
    effect: { health: 25, energy: -10 },
    description: '治疗疾病，恢复健康'
  },
  
  // 家具类
  {
    id: 'bed',
    name: '床',
    type: 'furniture',
    icon: '🛏️',
    effect: { energy: 40, health: 10 },
    description: '舒适的床，可以休息'
  },
  {
    id: 'chair',
    name: '椅子',
    type: 'furniture',
    icon: '🪑',
    effect: { energy: 5 },
    description: '可以坐的椅子'
  }
];

export const ROOMS: Room[] = [
  {
    id: 'bedroom',
    name: '卧室',
    description: '温馨的卧室，有床和椅子',
    background: 'bg-gradient-to-br from-blue-100 to-purple-100',
    items: GAME_ITEMS.filter(item => item.type === 'furniture')
  },
  {
    id: 'kitchen',
    name: '厨房',
    description: '充满香味的厨房，有各种食物',
    background: 'bg-gradient-to-br from-yellow-100 to-orange-100',
    items: GAME_ITEMS.filter(item => item.type === 'food')
  },
  {
    id: 'bathroom',
    name: '浴室',
    description: '干净的浴室，可以洗澡',
    background: 'bg-gradient-to-br from-cyan-100 to-blue-100',
    items: GAME_ITEMS.filter(item => item.type === 'tool')
  },
  {
    id: 'playroom',
    name: '游戏室',
    description: '充满乐趣的游戏室，有各种玩具',
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