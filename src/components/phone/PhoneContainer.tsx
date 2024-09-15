import React from "react";
import defaultPhoneOutline from "@/assets/phone/phone_container.webp";

export default function PhoneContainer({ children }: React.PropsWithChildren) {
    return (
        <div className="relative h-[95vh] flex justify-center items-center">
            <img
                src={defaultPhoneOutline}
                className="z-10 w-full h-full object-contain"
            />
            <div className="absolute top-0 bottom-0 w-full h-full flex justify-center items-center px-[1.25rem] pb-4 pt-3">
                <div className="flex-grow px-1 pb-8 pt-1 w-full h-full bg-phone-background bg-cover bg-center">
                    <div className="relative w-full h-full flex justify-center items-center flex-col z-20">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}