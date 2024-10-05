import razaPhoto from "@/assets/phone/officers/raza.webp";
import shayanPhoto from "@/assets/phone/officers/shayan.webp";
import loganPhoto from "@/assets/phone/officers/logan.webp";
import ishanPhoto from "@/assets/phone/officers/ishan.webp";
import ryanPhoto from "@/assets/phone/officers/ryan.webp";
import judePhoto from "@/assets/phone/officers/jude.webp";

export default function TeamScreen() {
    return (
        <div className="relative flex flex-col justify-center items-center w-full h-full">
            <div className="relative">
                <span className="relative font-extrabold text-7xl sm:text-[8rem] text-tjmad-red z-10">Officers</span>
                <div className="absolute h-[50%] top-[-20%] left-[-5%] rotate-[-10deg] rounded-md overflow-hidden z-20">
                    <img
                        src={razaPhoto}
                        className="h-full object-contain"
                    />
                </div>
                <div className="absolute h-[50%] bottom-[-20%] left-[5%] rotate-[5deg] rounded-md overflow-hidden">
                    <img
                        src={shayanPhoto}
                        className="h-full object-contain"
                    />
                </div>
                <div className="absolute h-[50%] top-[-10%] right-[-5%] rotate-[10deg] rounded-md overflow-hidden">
                    <img
                        src={loganPhoto}
                        className="h-full object-contain"
                    />
                </div>
                <div className="absolute h-[50%] bottom-[-25%] left-[40%] rotate-[-10deg] rounded-md overflow-hidden">
                    <img
                        src={ishanPhoto}
                        className="h-full object-contain"
                    />
                </div>
                <div className="absolute h-[50%] bottom-[-25%] right-[15%] rotate-[5deg] rounded-md overflow-hidden z-20">
                    <img
                        src={ryanPhoto}
                        className="h-full object-contain"
                    />
                </div>
                <div className="absolute h-[50%] top-[-15%] right-[40%] rotate-[10deg] rounded-md overflow-hidden">
                    <img
                        src={judePhoto}
                        className="h-full object-contain"
                    />
                </div>
            </div>
            <div className="relative w-full flex justify-center text-center items-center flex-col mt-[20%] sm:mt-[12%] whitespace-nowrap">
                <p className="pb-5">The officers for the 2024-2025 year are:</p>
                <div className="flex justify-evenly gap-x-10 items-center text-gray-950">
                    <ul className="text-left list-disc">
                        <li className="has-tooltip">
                            <span className="tooltip rounded px-3 py-1 text-sm bg-gray-600 text-white -mt-8">
                                VP of Design
                            </span>
                            Syed Raza Haider
                        </li>
                        <li className="has-tooltip">
                            <span className="tooltip rounded px-3 py-1 text-sm bg-gray-600 text-white -mt-8">
                                VP of Outreach
                            </span>
                            Shayan Akram
                        </li>
                        <li className="has-tooltip">
                            <span className="tooltip rounded px-3 py-1 text-sm bg-gray-600 text-white -mt-8">
                                VP of Technology
                            </span>
                            Ryan Ghimire
                        </li>
                    </ul>
                    <ul className="text-left list-disc">
                        <li className="has-tooltip">
                            <span className="tooltip rounded px-3 py-1 text-sm bg-gray-600 text-white -mt-8">
                                President
                            </span>
                            Ishan Ajwani
                        </li>
                        <li className="has-tooltip">
                            <span className="tooltip rounded px-3 py-1 text-sm bg-gray-600 text-white -mt-8">
                                VP of Operations
                            </span>
                            Logan Bradley
                        </li>
                        <li className="has-tooltip">
                            <span className="tooltip rounded px-3 py-1 text-sm bg-gray-600 text-white -mt-8">
                                VP of Finance
                            </span>
                            Jude Caldwell
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}