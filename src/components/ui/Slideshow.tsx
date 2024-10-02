import Title from "@/components/ui/Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import usePhoneStore from "@/store/phone";

export default function Slideshow() {
    const {
        viewIndex,
        incrementIndex,
        decrementIndex
    } = usePhoneStore((state) => state);
    
    return (
        <div className="relative flex flex-col flex-grow-0 basis-1/2 justify-center items-center mt-[10%] sm:mb-[10%]">
            <div>
                <Title />
            </div>
            <div className="flex justify-evenly mt-[5%] gap-x-20">
                {/* TODO: bound decrementing and incrementing to [0, views.length] */}
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