import topRightIcons from "@/assets/phone/top_right_icons.webp";
import { useEffect, useState } from "react";

export interface PhoneHeaderProps {
    leftSide?: string;
}

export default function PhoneHeader({ leftSide }: PhoneHeaderProps) {
    const [currentTime, setCurrentTime] = useState<string>(getPhoneTime());
    
    useEffect(() => {
        if (leftSide)
            return;

        let id: NodeJS.Timeout;
        const time = new Date();
        const delay = 60000 - (time.getSeconds() * 1000 + time.getMilliseconds());

        setTimeout(() => {
            setCurrentTime(getPhoneTime());
            id = setInterval(() => setCurrentTime(getPhoneTime()), 60000);
        }, delay);
        
        return () => clearInterval(id);
    }, []);

    return (
        <div className="flex justify-between items-center py-1 text-white h-8 w-full">
            <div className="flex justify-evenly items-center text-center w-[30%] h-full">
                <span className="text-xs">
                    {
                        leftSide 
                            ? leftSide
                            : currentTime
                    }
                </span>
            </div>
            <div className="flex justify-evenly items-center h-full">
                <img 
                    src={topRightIcons}
                    className="w-[90%] h-full object-contain"
                />
            </div>
        </div>
    );
}

function getPhoneTime(): string {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    return `${hours > 12 ? hours - 12 : hours}:${minutes.toString().padStart(2, "0")}`;
}