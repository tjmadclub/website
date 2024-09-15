import Phone from "@/components/phone/Phone";
import usePhoneStore from "@/store/phone";
import { useEffect } from "react";
import { defaultViews } from "@/views/index";

export default function App() {
    const setViews = usePhoneStore((state) => state.setViews);

    useEffect(() => {
        setViews(defaultViews);
    }, [setViews]);

    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <Phone />
        </main>
    );
}