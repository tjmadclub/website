import navTjScreenshot from "@/assets/slideshow/projects/navtj.webp";
import commandLineScreenshot from "@/assets/slideshow/projects/commandline.webp";
import matchMobileScreenshot from "@/assets/slideshow/projects/matchmobile.webp";
import pomodoroScreenshot from "@/assets/slideshow/projects/pomodoro.webp";
import wrenchSymbol from "@/assets/slideshow/projects/wrench.webp";

export default function ProjectScreen() {
    return (
        <div className="relative flex flex-col justify-center items-center w-full h-full">
            <div className="relative">
                <span className="relative font-extrabold text-7xl sm:text-[8rem] text-tjmad-red z-10">Projects</span>
                <div className="absolute h-[75%] top-[-30%] left-0 rotate-[-5deg] rounded-md overflow-hidden">
                    <img
                        src={navTjScreenshot}
                        className="h-full object-contain"
                    />
                </div>
                <div className="absolute h-[75%] bottom-[-30%] right-0 rotate-[5deg] rounded-md overflow-hidden z-20">
                    <img
                        src={matchMobileScreenshot}
                        className="h-full object-contain"
                    />
                </div>
                <div className="absolute h-[75%] top-[-30%] right-[50%] rotate-[2deg] rounded-md overflow-hidden">
                    <img
                        src={pomodoroScreenshot}
                        className="h-full object-contain"
                    />
                </div>
                <img
                    src={commandLineScreenshot}
                    className="absolute w-[50%] h-[50%] object-contain bottom-[-20%] right-[50%] rotate-[5deg]"
                />
                <img
                    src={wrenchSymbol}
                    className="absolute w-[50%] h-[50%] object-contain top-[-5%] right-[-5%] rotate-90 z-20"
                />
            </div>
            <div className="relative w-full flex justify-center text-center items-center flex-col gap-y-5 mt-[20%] sm:mt-[10%]">
                <p>
                    Our previous club-wide projects can be found <a
                        href="/projects"
                        className="link"
                    >
                        here
                    </a>. Want to submit a project idea? Fill out this <a
                        href="https://forms.gle/G9pLG59mdzAUZNFbA"
                        className="link"
                    >
                        app request form
                    </a>!
                </p>
            </div>
        </div>
    );
}