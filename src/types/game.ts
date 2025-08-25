export interface ShadowMilkStats {
  energy: number;
  health: number;
  hunger: number;
  hygiene: number;
}

export interface GameItem {
  id: string;
  name: string;
  type: 'food' | 'toy' | 'tool' | 'furniture';
  icon: string;
  effect: {
    energy?: number;
    health?: number;
    hunger?: number;
    hygiene?: number;
  };
  description: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  background: string;
  items: GameItem[];
}

export interface GameState {
  currentRoom: string;
  stats: ShadowMilkStats;
  inventory: GameItem[];
  gameTime: number;
  isGameActive: boolean;
}

export type GameAction = 
  | { type: 'CHANGE_ROOM'; roomId: string }
  | { type: 'USE_ITEM'; itemId: string }
  | { type: 'UPDATE_STATS'; stats: Partial<ShadowMilkStats> }
  | { type: 'ADD_ITEM'; item: GameItem }
  | { type: 'REMOVE_ITEM'; itemId: string }
  | { type: 'UPDATE_TIME'; time: number }
  | { type: 'TOGGLE_GAME'; isActive: boolean }; 