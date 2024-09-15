import { MouseEventHandler } from "react";

export interface PhoneAppProps {
    logo: string;
    isLink: boolean;
    link?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function PhoneApp({ 
    logo, 
    isLink, 
    link, 
    onClick 
}: PhoneAppProps) {
    const logoImage = <img src={logo} className="h-full w-full object-cover rounded-lg" />;
    
    return isLink 
        ? (
            <a 
                className="overflow-hidden w-12 h-12 p-1 cursor-pointer"
                href={link}
                target="_blank"
            >
                {logoImage}
            </a>
        ) 
        : (
            <button
                className="overflow-hidden w-12 h-12 p-1"
                onClick={onClick}
            >
                {logoImage}
            </button>
        );
}