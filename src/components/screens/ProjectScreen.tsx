import projectSlide from "@/assets/slideshow/projects.webp";

export default function ProjectScreen() {
    return (
        <div className="relative flex flex-col justify-center items-center w-full h-full">
            <div className="relative">
                <img
                    src={projectSlide}
                    className="relative w-full h-full object-contain pointer-events-none z-10"
                />
            </div>
            <div className="relative w-full flex justify-center text-center items-center flex-col gap-y-5 mt-[10%] sm:mt-[5%]">
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