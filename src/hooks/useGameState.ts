import { useReducer, useCallback, useEffect, useState, useRef } from 'react';
import { GameState, GameAction, ShadowMilkStats } from '@/types/game';
import { INITIAL_STATS } from '@/data/gameData';

const initialState: GameState = {
  currentRoom: 'bedroom',
  inventory: [],
  stats: INITIAL_STATS,
  isGameActive: false,
  gameTime: 0
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'CHANGE_ROOM':
      return { ...state, currentRoom: action.roomId };
    case 'USE_ITEM':
      return {
        ...state,
        inventory: state.inventory.filter(item => item.id !== action.itemId)
      };
    case 'ADD_ITEM':
      return {
        ...state,
        inventory: [...state.inventory, action.item]
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        inventory: state.inventory.filter(item => item.id !== action.itemId)
      };
    case 'TOGGLE_GAME':
      return { ...state, isGameActive: action.isActive };
    case 'UPDATE_STATS':
      return { 
        ...state, 
        stats: { ...state.stats, ...action.stats } 
      };
    case 'UPDATE_TIME':
      return { ...state, gameTime: action.time };
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

// 新增：专门用于iframe游戏的Hook
interface UseIframeGameReturn {
  isGameLoaded: boolean;
  isFullscreen: boolean;
  handleGameLoad: () => void;
  handleFullscreen: () => void;
  iframeRef: React.RefObject<HTMLIFrameElement>;
}

export function useIframeGame(): UseIframeGameReturn {
  const [isGameLoaded, setIsGameLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleGameLoad = useCallback(() => {
    setIsGameLoaded(true);
  }, []);

  const handleFullscreen = useCallback(() => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
        setIsFullscreen(true);
      }
    }
  }, []);

  // 监听全屏状态变化
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return {
    isGameLoaded,
    isFullscreen,
    handleGameLoad,
    handleFullscreen,
    iframeRef,
  };
} 