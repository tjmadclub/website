import resourceSlide from "@/assets/slideshow/resources.webp";

export default function ResourceScreen() {
    return (
        <div className="relative flex flex-col justify-center items-center w-full h-full">
            <img
                src={resourceSlide}
                className="relative w-4/5 object-contain pointer-events-none z-10"
            />
            <div className="relative w-full flex justify-center text-center items-center flex-col gap-y-5 mt-[10%] sm:mt-[5%]">
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