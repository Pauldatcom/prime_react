import { create } from 'zustand';
import { verifIsPrime } from '@/service/verifIsPrime';

interface PrimeStore {
  currentNumber: number | null;
  isPrime: boolean;
  cache: Map<number, boolean>;
  stats: {
    totalChecks: number;
    primesFound: number;
    cacheHits: number;
    cacheMisses: number;
  };
  setNumber: (number: number | null) => void;
  clearNumber: () => void;
  getStats: () => {
    totalChecks: number;
    primesFound: number;
    cacheHits: number;
    cacheMisses: number;
    cacheHitRate: number;
    accuracy: number;
  };
}

export const usePrimeStore = create<PrimeStore>((set, get) => ({
  currentNumber: null,
  isPrime: false,
  cache: new Map(),
  stats: {
    totalChecks: 0,
    primesFound: 0,
    cacheHits: 0,
    cacheMisses: 0,
  },

  setNumber: (number) => {
    if (number === null || number === undefined) {
      set({ currentNumber: null, isPrime: false });
      return;
    }

    const cache = get().cache;
    const wasCached = cache.has(number);
    
    if (wasCached) {
      const cachedResult = cache.get(number)!;
      set((state) => ({
        currentNumber: number,
        isPrime: cachedResult,
        stats: {
          ...state.stats,
          totalChecks: state.stats.totalChecks + 1,
          cacheHits: state.stats.cacheHits + 1,
          primesFound: cachedResult ? state.stats.primesFound + 1 : state.stats.primesFound,
        },
      }));
      return;
    }

    const prime = verifIsPrime(number);
    cache.set(number, prime);
    
    set((state) => ({
      currentNumber: number,
      isPrime: prime,
      stats: {
        ...state.stats,
        totalChecks: state.stats.totalChecks + 1,
        cacheMisses: state.stats.cacheMisses + 1,
        primesFound: prime ? state.stats.primesFound + 1 : state.stats.primesFound,
      },
    }));
  },

  clearNumber: () => {
    set({ currentNumber: null, isPrime: false });
  },

  getStats: () => {
    const stats = get().stats;
    const cacheHitRate = stats.totalChecks > 0 
      ? Math.round((stats.cacheHits / stats.totalChecks) * 100) 
      : 0;
    const accuracy = 100;
    
    return {
      ...stats,
      cacheHitRate,
      accuracy,
    };
  },
}));

