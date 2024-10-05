import androidLogo from "@/assets/slideshow/resources/android.webp";
import fccLogo from "@/assets/slideshow/resources/freecodecamp.webp";
import w3sLogo from "@/assets/slideshow/resources/w3schools.webp";
import xcodeLogo from "@/assets/slideshow/resources/xcode.webp";
import chatgptLogo from "@/assets/slideshow/resources/chatgpt.webp";

export default function LectureScreen() {
    return (
        <div className="relative flex flex-col justify-center items-center w-full h-full">
            <div className="relative">
                <span className="relative font-extrabold text-7xl sm:text-[8rem] text-tjmad-blue z-10">Resources</span>
                <img
                    src={androidLogo}
                    className="absolute h-[60%] object-contain top-[-10%] left-[55%] rotate-[2deg]"
                />
                <div className="absolute h-[50%] top-[-5%] right-0 rotate-[10deg] rounded-md overflow-hidden z-20">
                    <img
                        src={fccLogo}
                        className="h-full object-contain"
                    />
                </div>
                <img
                    src={w3sLogo}
                    className="absolute w-[50%] h-[50%] object-contain bottom-[-20%] left-[5%] rotate-[-5deg] z-20"
                /> 
                <div className="absolute h-[50%] top-[-20%] left-[-2%] rotate-[-10deg] rounded-md overflow-hidden z-20">
                    <img
                        src={xcodeLogo}
                        className="h-full object-contain"
                    />
                </div>
                <img
                    src={chatgptLogo}
                    className="absolute w-[50%] h-[50%] object-contain bottom-[-20%] left-[50%] rotate-[5deg]"
                />
            </div>
            <div className="relative w-full flex justify-center text-center items-center flex-col gap-y-5 mt-[20%] sm:mt-[10%]">
                <p>
                    Want to learn on your own? You can use the self-learning resources that we have provided <a
                        href="/resources"
                        className="link"
                    >
                        here
                    </a>.
                </p>
            </div>
        </div>
    );
}