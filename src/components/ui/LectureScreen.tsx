import slidesLogo from "@/assets/slideshow/lectures/slides.webp";
import flutterLogo from "@/assets/slideshow/lectures/flutter.webp";
import dartLogo from "@/assets/slideshow/lectures/dart.webp";
import cogSymbol from "@/assets/slideshow/lectures/cog.webp";
import brainSymbol from "@/assets/slideshow/lectures/brain.webp";

export default function LectureScreen() {
    return (
        <div className="relative flex flex-col justify-center items-center w-full h-full">
            <div className="relative">
                <span className="relative font-extrabold text-7xl sm:text-[8rem] text-tjmad-blue z-10">Lectures</span>
                <img
                    src={slidesLogo}
                    className="absolute w-[50%] h-[50%] object-contain top-[-10%] left-[30%] rotate-[-5deg]"
                />
                <img
                    src={cogSymbol}
                    className="absolute w-[50%] h-[50%] object-contain top-[-5%] right-[-22%] rotate-[15deg] z-20"
                />
                <img
                    src={brainSymbol}
                    className="absolute w-[50%] h-[50%] object-contain bottom-[-20%] left-[50%] rotate-[-20deg]"
                /> 
                <img
                    src={flutterLogo}
                    className="absolute w-[50%] h-[50%] object-contain top-[-20%] left-[-25%] rotate-[10deg] z-20"
                />
                <img
                    src={dartLogo}
                    className="absolute w-[50%] h-[50%] object-contain bottom-[-15%] left-[5%] rotate-[10deg] z-20"
                />
            </div>
            <div className="relative w-full flex justify-center text-center items-center flex-col gap-y-5 mt-[20%] sm:mt-[10%]">
                <p>
                    Lectures and all related information by TJMAD can be found in the <a
                        href="https://github.com/tjmadclub/lectures"
                        className="link"
                    >
                        GitHub repository
                    </a>, organized by year and date.
                </p>
            </div>
        </div>
    );
}