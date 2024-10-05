import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import usePhoneStore from "@/store/phone";

export interface SlideshowProps { 
    screens: React.ReactNode[];
}

export default function Slideshow({ screens }: SlideshowProps) {
    const {
        viewIndex,
        incrementIndex,
        decrementIndex
    } = usePhoneStore((state) => state);

    return (
        <div className="relative flex flex-col flex-grow-0 basis-1/2 justify-between items-center pt-[10%] sm:pb-[10%] h-[32rem]">
            <div className="w-[75%] h-[75%]">
                {screens[viewIndex]}
            </div>
            <div className="flex justify-evenly mt-auto pt-[15%] gap-x-20">
                <button
                    onClick={() => decrementIndex()}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span className="text-gray-700">{viewIndex + 1}</span>
                <button
                    onClick={() => incrementIndex()}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
}