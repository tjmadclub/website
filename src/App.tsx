import Phone from "@/components/phone/Phone";
import Title from "@/components/ui/Title";
import Navbar from "@/components/ui/Navbar";

export default function App() {
    return (
        <main className="flex flex-col items-center justify-evenly min-h-screen sm:max-h-screen">
            <Navbar />
            <div className="flex flex-col sm:flex-row justify-evenly items-center space-y-20 sm:space-y-0 py-10 overflow-x-hidden sm:overflow-hidden">
                <Title />
                <Phone />
            </div>
        </main>
    );
}