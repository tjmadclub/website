import { Route, Routes } from "react-router-dom";
import Navbar from "@/components/ui/Navbar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Resources from "@/pages/Resources";

export default function App() {
    return (
        <main className="flex flex-col items-center min-h-screen sm:max-h-screen">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resources" element={<Resources />} />
            </Routes>
        </main>
    );
}