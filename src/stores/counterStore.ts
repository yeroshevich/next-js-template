import { create } from 'zustand';

export interface ICountStore {
	count: number;
	inc: Function;
	dec: Function;
}

export const counterStore = create<ICountStore>((set) => ({
	count: 0,
	inc: () => set((state) => ({ count: state.count + 1 })),
	dec: () => set((state) => ({ count: state.count - 1 })),
}));
