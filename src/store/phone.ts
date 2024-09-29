import { PhoneGridAppList } from "@/components/phone/PhoneGrid";
import { defaultViews } from "@/views";
import { create } from "zustand";

interface PhoneState {
    views: PhoneGridAppList[];
    viewIndex: number;
    isDiverged: boolean;
    divergence: React.ReactNode;
    setDivergence: (view: React.ReactNode) => void;
    incrementIndex: () => void;
    decrementIndex: () => void;
}

const usePhoneStore = create<PhoneState>()((set) => ({
    views: defaultViews,
    viewIndex: 0,
    isDiverged: false,
    divergence: null,
    setDivergence: (view: React.ReactNode) => set(() => ({ isDiverged: true, divergence: view })),
    incrementIndex: () => set((state) => ({ viewIndex: state.viewIndex + 1 })),
    decrementIndex: () => set((state) => ({ viewIndex: state.viewIndex - 1 })),
}));

export default usePhoneStore;