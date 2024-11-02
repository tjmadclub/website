import lectureSlide from "@/assets/slideshow/lectures.webp";

export default function LectureScreen() {
    return (
        <div className="relative flex flex-col justify-center items-center w-full h-full">
            <img
                src={lectureSlide}
                className="relative w-4/5 object-contain pointer-events-none z-10"
            />
            <div className="relative w-full flex justify-center text-center items-center flex-col gap-y-5 mt-[10%] sm:mt-[5%]">
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