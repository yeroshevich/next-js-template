import { create } from 'zustand';

export interface ICountStore {
	count: number;
	inc: () => void;
	dec: () => void;
}

export const counterStore = create<ICountStore>((set) => ({
	count: 0,
	inc: () => set((state) => ({ count: state.count + 1 })),
	dec: () => set((state) => ({ count: state.count - 1 })),
}));
