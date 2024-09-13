import React from "react";
import topRightIcons from "@/assets/phone/top_right_icons.webp";

export interface PhoneHeaderProps {
    leftSide: React.ReactNode;
}

export default function PhoneHeader({ leftSide }: PhoneHeaderProps) {
    return (
        <div className="flex justify-between items-center py-1 text-white h-8 w-full">
            <div className="flex justify-evenly items-center text-center w-[30%] h-full">
                {leftSide}
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