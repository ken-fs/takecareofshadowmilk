import { useReducer, useCallback, useEffect } from 'react';
import { GameState, GameAction, ShadowMilkStats } from '@/types/game';
import { INITIAL_STATS } from '@/data/gameData';

const initialState: GameState = {
  currentRoom: 'bedroom',
  stats: INITIAL_STATS,
  inventory: [],
  gameTime: 0,
  isGameActive: false
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'CHANGE_ROOM':
      return {
        ...state,
        currentRoom: action.roomId
      };
    
    case 'USE_ITEM':
      const item = state.inventory.find(i => i.id === action.itemId);
      if (!item) return state;
      
      const newStats = { ...state.stats };
      Object.entries(item.effect).forEach(([key, value]) => {
        if (value && key in newStats) {
          const statKey = key as keyof ShadowMilkStats;
          newStats[statKey] = Math.max(0, Math.min(100, newStats[statKey] + value));
        }
      });
      
      return {
        ...state,
        stats: newStats,
        inventory: state.inventory.filter(i => i.id !== action.itemId)
      };
    
    case 'UPDATE_STATS':
      const updatedStats = { ...state.stats, ...action.stats };
      Object.keys(updatedStats).forEach(key => {
        const statKey = key as keyof ShadowMilkStats;
        updatedStats[statKey] = Math.max(0, Math.min(100, updatedStats[statKey]));
      });
      
      return {
        ...state,
        stats: updatedStats
      };
    
    case 'ADD_ITEM':
      return {
        ...state,
        inventory: [...state.inventory, action.item]
      };
    
    case 'REMOVE_ITEM':
      return {
        ...state,
        inventory: state.inventory.filter(i => i.id !== action.itemId)
      };
    
    case 'UPDATE_TIME':
      return {
        ...state,
        gameTime: action.time
      };
    
    case 'TOGGLE_GAME':
      return {
        ...state,
        isGameActive: action.isActive
      };
    
    default:
      return state;
  }
}

export function useGameState() {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const changeRoom = useCallback((roomId: string) => {
    dispatch({ type: 'CHANGE_ROOM', roomId });
  }, []);

  const useItem = useCallback((itemId: string) => {
    dispatch({ type: 'USE_ITEM', itemId });
  }, []);

  const addItem = useCallback((item: any) => {
    dispatch({ type: 'ADD_ITEM', item });
  }, []);

  const removeItem = useCallback((itemId: string) => {
    dispatch({ type: 'REMOVE_ITEM', itemId });
  }, []);

  const toggleGame = useCallback((isActive: boolean) => {
    dispatch({ type: 'TOGGLE_GAME', isActive });
  }, []);

  // 自动减少状态值
  useEffect(() => {
    if (!state.isGameActive) return;

    const interval = setInterval(() => {
      const newStats = { ...state.stats };
      newStats.hunger = Math.max(0, newStats.hunger - 0.5);
      newStats.energy = Math.max(0, newStats.energy - 0.3);
      newStats.hygiene = Math.max(0, newStats.hygiene - 0.2);
      
      if (newStats.hunger < 20 || newStats.energy < 20) {
        newStats.health = Math.max(0, newStats.health - 0.1);
      }
      
      dispatch({ type: 'UPDATE_STATS', stats: newStats });
      dispatch({ type: 'UPDATE_TIME', time: state.gameTime + 1 });
    }, 1000);

    return () => clearInterval(interval);
  }, [state.isGameActive, state.stats, state.gameTime]);

  return {
    state,
    changeRoom,
    useItem,
    addItem,
    removeItem,
    toggleGame
  };
} 