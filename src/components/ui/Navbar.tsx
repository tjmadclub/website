import tjMadLogo from "@/assets/brand/tjmad_logo.webp";

export default function Navbar() {
    return (
        <nav className="sticky top-0 w-full py-4 px-10 flex justify-center sm:justify-between items-center z-50 shadow-sm bg-white">
            <a
                href="/"
            >
                <img
                    src={tjMadLogo}
                    className="relative w-10 h-10 mr-10"
                />
            </a>
            <div className="flex justify-center items-center gap-x-5">
                <a href="/about">
                    About
                </a>
                <a href="https://github.com/tjmadclub/lectures">
                    Lectures
                </a>
                <a href="/projects">
                    Projects
                </a>
                <a href="/resources">
                    Resources
                </a>
                <a href="/gallery">
                    Gallery
                </a>
                <a 
                    href="https://ion.tjhsst.edu/eighth"
                    className="py-2 px-6 rounded text-white bg-tjmad-blue"
                    target="_blank"
                >
                    Sign Up
                </a>
            </div>
        </nav>
    );
}