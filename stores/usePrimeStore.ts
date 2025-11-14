import { create } from 'zustand';
import { verifIsPrime } from '@/service/verifIsPrime';

interface PrimeStore {
  currentNumber: number | null;
  isPrime: boolean;
  cache: Map<number, boolean>;
  setNumber: (number: number | null) => void;
  clearNumber: () => void;
}

export const usePrimeStore = create<PrimeStore>((set, get) => ({
  currentNumber: null,
  isPrime: false,
  cache: new Map(),

  setNumber: (number) => {
    if (number === null || number === undefined) {
      set({ currentNumber: null, isPrime: false });
      return;
    }

    const cache = get().cache;
    if (cache.has(number)) {
      set({ currentNumber: number, isPrime: cache.get(number)! });
      return;
    }

    const prime = verifIsPrime(number);
    cache.set(number, prime);
    set({ currentNumber: number, isPrime: prime });
  },

  clearNumber: () => {
    set({ currentNumber: null, isPrime: false });
  },
}));

