import usePhoneStore from "@/store/phone";
import { useState } from "react";

export default function PhoneScreenList({ children }: React.PropsWithChildren) {
    const setDivergence = usePhoneStore((state) => state.setDivergence);
    const [startY, setStartY] = useState(0);
    const [dragY, setDragY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    
    // reference: https://codepen.io/thebabydino/pen/wybaGK/ & PhoneScreenList.tsx
    const unify = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        return "changedTouches" in event ? event.changedTouches[0] : event as React.MouseEvent<HTMLDivElement>; 
    }

    const handleSwipeHold = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        setStartY(unify(event).clientY);
        setIsDragging(true);
    };

    const handleSwipeDrag = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (isDragging) {
            const dy = unify(event).clientY - startY;
            if (dy < 0) 
                setDragY(dy);
        }
    };

    const handleSwipeRelease = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (isDragging) {
            const threshold = event.target ? (event.target as HTMLDivElement).offsetHeight * 0.4 : 0;
            
            if (Math.abs(dragY) > threshold) {
                setDivergence(false);
            }

            setIsDragging(false);
            setDragY(0);
        }
    };
    
    return (
        <div 
            className="absolute top-0 h-full w-full pt-[2%] sm:pt-[5%] pb-[4%] pr-[38%] sm:pr-[4%] overflow-hidden z-10"
            style={{ 
                transform: `translateY(${dragY}px)`,
                transition: isDragging ? "none" : "transform 0.3s ease-out" 
            }}
            onMouseDown={handleSwipeHold}
            onTouchStart={handleSwipeHold}
            onMouseMove={handleSwipeDrag}
            onTouchMove={handleSwipeDrag}
            onMouseUp={handleSwipeRelease}
            onTouchEnd={handleSwipeRelease}
            onMouseLeave={handleSwipeRelease}
            onTouchCancel={handleSwipeRelease}
        >
            {children}
        </div>
    );
}