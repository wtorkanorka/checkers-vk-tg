import { create } from "zustand";

interface BottomMenuStore {
  isButtonActive: boolean;
  toggleButton: () => void;
  setIsOpen: () => void;
  setIsClose: () => void;
}

export const useBottomMenuStore = create<BottomMenuStore>((set) => ({
  isButtonActive: false,
  setIsOpen: () =>
    set(() => ({
      isButtonActive: true,
    })),
  setIsClose: () =>
    set(() => ({
      isButtonActive: false,
    })),
  toggleButton: () =>
    set((state: { isButtonActive: boolean }) => ({
      isButtonActive: !state.isButtonActive,
    })),
}));
