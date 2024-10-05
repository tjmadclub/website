import Phone from "@/components/phone/Phone";
import Navbar from "@/components/ui/Navbar";
import Slideshow from "@/components/ui/Slideshow";
import TitleScreen from "@/components/ui/TitleScreen";
import TeamScreen from "@/components/ui/TeamScreen";
import LectureScreen from "./components/ui/LectureScreen";

export default function App() {
    return (
        <main className="flex flex-col items-center justify-evenly min-h-screen sm:max-h-screen">
            <Navbar />
            <div className="w-full flex flex-col sm:flex-row justify-evenly items-center space-y-20 sm:space-y-0 py-10 overflow-x-hidden sm:overflow-hidden">
                <Slideshow
                    screens={[
                        <TitleScreen />,
                        <TeamScreen />,
                        <LectureScreen />
                    ]}
                />
                <Phone />
            </div>
        </main>
    );
}