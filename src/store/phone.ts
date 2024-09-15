import { PhoneGridAppList } from "@/components/phone/PhoneGrid";
import { create } from "zustand";

interface PhoneState {
    views: PhoneGridAppList[];
    viewIndex: number;
    isDiverged: boolean;
    divergence: React.ReactNode;
    setDivergence: (view: React.ReactNode) => void;
    incrementIndex: () => void;
    decrementIndex: () => void;
    setViews: (views: PhoneGridAppList[]) => void;
}

const usePhoneStore = create<PhoneState>()((set) => ({
    views: [],
    viewIndex: 0,
    isDiverged: false,
    divergence: null,
    setDivergence: (view: React.ReactNode) => set(() => ({ isDiverged: true, divergence: view })),
    incrementIndex: () => set((state) => ({ viewIndex: state.viewIndex + 1 })),
    decrementIndex: () => set((state) => ({ viewIndex: state.viewIndex - 1 })),
    setViews: (views: PhoneGridAppList[]) => set(() => ({ views: views })),
}));

export default usePhoneStore;