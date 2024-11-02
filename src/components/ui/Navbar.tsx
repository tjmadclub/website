import tjMadLogo from "@/assets/brand/tjmad_logo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) { 
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    
    return (
        <nav className="sticky top-0 w-full py-4 px-10 md:flex md:justify-between md:items-center z-50 shadow-sm bg-white">
            <div className="flex justify-between items-center">
                <a href="/">
                    <img src={tjMadLogo} className="relative w-10 h-10 mr-10" />
                </a>
                <div className="flex md:hidden items-center">
                    <button onClick={toggleOpen}>
                        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="text-xl" />
                    </button>
                </div>
            </div>
            <div className={`${isOpen ? "flex flex-col gap-y-2 mt-5 [&_a]:w-full" : "hidden"} md:flex justify-center items-start md:items-center md:gap-x-5`}>
                <a className="hover:bg-gray-100 rounded p-2" href="/about">About</a>
                <a className="hover:bg-gray-100 rounded p-2" href="https://github.com/tjmadclub/lectures">Lectures</a>
                <a className="hover:bg-gray-100 rounded p-2" href="/projects">Projects</a>
                <a className="hover:bg-gray-100 rounded p-2" href="/resources">Resources</a>
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
