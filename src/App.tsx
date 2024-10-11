import { Route, Routes } from "react-router-dom";
import Navbar from "@/components/ui/Navbar";
import Home from "@/pages/Home";

export default function App() {
    return (
        <main className="flex flex-col items-center min-h-screen sm:max-h-screen">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </main>
    );
}