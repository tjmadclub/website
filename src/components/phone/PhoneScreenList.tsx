import PhoneGrid from "@/components/phone/PhoneGrid";
import { useState } from "react";
import usePhoneStore from "@/store/phone";

export default function PhoneScreenList() {
    const {
        views,
        viewIndex,
        // @ts-ignore
        incrementIndex,
        // @ts-ignore
        decrementIndex
    } = usePhoneStore((state) => state);
    const [dragX, setDragX] = useState(0);

    // Temporary - just to test multiple views with drag
    const handleDrag = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.buttons === 1) {
            const dx = event.movementX;
            setDragX((prev) => prev + dx);
        }
    };
    
    return (
        <div className="h-full overflow-hidden">
            <div 
                className={`flex h-full`}
                style={{ 
                    width: `${views.length * 100}%`,
                    transform: `translateX(${dragX}px)` 
                }}
                onMouseMove={handleDrag}
            >
                <div className="relative w-full h-full flex justify-start items-center flex-col">
                    <PhoneGrid apps={views[viewIndex]} />
                </div> 
                <div className="relative w-full h-full flex justify-start items-center flex-col">
                    <PhoneGrid apps={views[viewIndex+1]} />
                </div> 
            </div>
        </div>
    );
}