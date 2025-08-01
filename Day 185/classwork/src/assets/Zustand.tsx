import { create} from 'zustand'

export type Store ={
    count: number
    inc: () => void
}

export const useStore = create<Store>()((set) => ({
  count: 0,
  inc: () => set((state) => ({
    count: state.count - 1
  })),
}));

export default function Zustand() {
    const {count, inc} = useStore();
    return (
        <button onClick={inc}>diqriz</button>
    )
}