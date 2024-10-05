import tjMadLogo from "@/assets/brand/tjmad_logo_wordmark.webp";
import androidLogo from "@/assets/slideshow/title/android_logo.webp";
import androidStudioLogo from "@/assets/slideshow/title/android_studio.webp";
import appStoreLogo from "@/assets/slideshow/title/app_store.webp";
import playStoreLogo from "@/assets/slideshow/title/play_store.webp";
import figmaLogo from "@/assets/slideshow/title/figma.webp";

export default function TitleScreen() {
    return (
        <div className="relative flex flex-col justify-center items-center w-full h-full">
            <div className="relative">
                <img
                    src={tjMadLogo}
                    className="relative w-full h-full object-contain pointer-events-none z-10"
                />
                <img
                    src={androidLogo}
                    className="absolute w-[50%] h-[50%] object-contain top-[-40%] left-[-25%] rotate-[-20deg] z-20"
                />
                <img
                    src={playStoreLogo}
                    className="absolute w-[50%] h-[50%] object-contain top-[-30%] right-[-20%] rotate-[-15deg]"
                />
                <img
                    src={appStoreLogo}
                    className="absolute w-[50%] h-[50%] object-contain bottom-[-25%] left-[-12%] rotate-[-10deg]"
                />
                <img
                    src={figmaLogo}
                    className="absolute w-[50%] h-[50%] object-contain bottom-[-20%] right-[-2%] rotate-[10deg] z-20"
                />
                <img
                    src={androidStudioLogo}
                    className="absolute w-[50%] h-[50%] object-contain top-[-25%] right-[34%] rotate-[10deg]"
                />
            </div>
            <div className="relative flex justify-center text-center items-center flex-col gap-y-5 mt-[7.5%]">
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