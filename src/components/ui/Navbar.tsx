export default function Navbar() {
    return (
        <nav className="sticky top-0 w-full py-4 px-12 flex justify-center sm:justify-between items-center z-50 shadow-sm bg-white">
            <div className="flex justify-center items-center gap-x-[20%]">
                {/* Temporary links for styling purposes */}
                <a href="/">
                    Home
                </a>
                <a href="/">
                    Team
                </a>
                <a href="/">
                    About
                </a>
            </div>
        </nav>
    );
}