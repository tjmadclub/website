import titleSlide from "@/assets/slideshow/title.webp";

export default function TitleScreen() {
    return (
        <div className="relative flex flex-col justify-center items-center w-full h-full">
            <img
                src={titleSlide}
                className="relative w-4/5 object-contain pointer-events-none z-10"
            />
            <div className="relative flex justify-center text-center items-center flex-col gap-y-5 mt-[10%] sm:mt-[5%]">
                <p>
                    A club at <a 
                        className="link"
                        href="https://tjhsst.fcps.edu/"
                    >
                        TJHSST
                    </a> with the goal to design, build, and publish mobile applications on iOS & Android
                </p>
                <a 
                    href="https://ion.tjhsst.edu/eighth"
                    className="py-2 px-6 rounded text-white bg-purple-600"
                    target="_blank"
                >
                    Sign Up
                </a>
            </div>
        </div>
    );
}