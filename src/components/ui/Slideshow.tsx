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
        <div className="relative flex flex-col flex-grow-0 basis-1/2 justify-center items-center h-[32rem] px-4 md:px-0">
            <div className="flex-shrink-0 mt-auto">
                {screens[viewIndex]}
            </div>
            <div className="mt-auto pb-10 flex justify-evenly pt-7 md:pt-5 gap-x-20">
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