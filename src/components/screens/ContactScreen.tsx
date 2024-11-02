import contactSlide from "@/assets/slideshow/contact.webp";

export default function ContactScreen() {
    return (
        <div className="relative flex flex-col justify-center items-center w-full h-full">
            <img
                src={contactSlide}
                className="relative w-4/5 object-contain pointer-events-none z-10"
            />
            <div className="relative w-full flex justify-center text-center items-center flex-col gap-y-5 mt-[10%] sm:mt-[5%]">
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