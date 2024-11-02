import officerSlide from "@/assets/slideshow/officers.webp";

export default function TeamScreen() {
    return (
        <div className="relative flex flex-col justify-center items-center w-full h-full">
            <div className="relative">
                <img
                    src={officerSlide}
                    className="relative w-full h-full object-contain pointer-events-none z-10"
                />
            </div>
            <div className="relative w-full flex justify-center text-center items-center flex-col mt-[10%] sm:mt-[5%] whitespace-nowrap">
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