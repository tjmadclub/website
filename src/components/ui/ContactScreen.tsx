import instagramLogo from "@/assets/phone/apps/instagram.webp";
import gmailLogo from "@/assets/slideshow/contact/gmail.webp";
import envelopeSymbol from "@/assets/slideshow/contact/envelope.webp";
import memoSymbol from "@/assets/slideshow/contact/memo.webp";

export default function LectureScreen() {
    return (
        <div className="relative flex flex-col justify-center items-center w-full h-full">
            <div className="relative">
                <span className="relative font-extrabold text-7xl sm:text-[8rem] text-tjmad-red z-10">Contact</span>
                <img
                    src={gmailLogo}
                    className="absolute w-[50%] h-[50%] object-contain top-[-10%] left-[-20%] rotate-[-5deg] z-20"
                />
                <img
                    src={instagramLogo}
                    className="absolute w-[50%] h-[50%] object-contain bottom-[-15%] right-[-22%] rotate-[5deg] z-20"
                />
                <img
                    src={envelopeSymbol}
                    className="absolute w-[50%] h-[50%] object-contain bottom-[-15%] left-[10%]"
                />
                <img
                    src={memoSymbol}
                    className="absolute w-[50%] h-[50%] object-contain top-0 left-[45%]"
                />
            </div>
            <div className="relative w-full flex justify-center text-center items-center flex-col gap-y-5 mt-[20%] sm:mt-[10%]">
                <p>
                    You can contact the TJMAD officer team at <a
                        href="mailto:tjmobileappsclub@gmail.com"
                        className="link"
                    >
                        tjmobileappsclub@gmail.com
                    </a>, contact any officer on Facebook, or message us on <a
                        href="https://instagram.com/tj_madclub"
                        className="link"
                    >
                        Instagram
                    </a>.
                </p>
            </div>
        </div>
    );
}