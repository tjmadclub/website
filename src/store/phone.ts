import { PhoneGridAppList } from "@/components/phone/PhoneGrid";
import { defaultViews } from "@/views";
import { create } from "zustand";

interface PhoneState {
    views: PhoneGridAppList[];
    viewIndex: number;
    isDiverged: boolean;
    divergence: React.ReactNode;
    setDivergence: (diverge: boolean, view?: React.ReactNode) => void;
    incrementIndex: () => void;
    decrementIndex: () => void;
}

const usePhoneStore = create<PhoneState>()((set) => ({
    views: defaultViews,
    viewIndex: 0,
    isDiverged: false,
    divergence: null,
    setDivergence: (diverge: boolean, view?: React.ReactNode) => set(() => ({ isDiverged: diverge, divergence: view })),
    incrementIndex: () => set((state) => ({ 
        viewIndex: state.viewIndex < state.views.length -1 ? state.viewIndex + 1 : state.viewIndex 
    })),
    decrementIndex: () => set((state) => ({
        viewIndex: state.viewIndex > 0 ? state.viewIndex - 1 : state.viewIndex
    })),
}));

export default usePhoneStore;