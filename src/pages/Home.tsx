import Phone from "@/components/phone/Phone";
import ContactScreen from "@/components/screens/ContactScreen";
import LectureScreen from "@/components/screens/LectureScreen";
import ProjectScreen from "@/components/screens/ProjectScreen";
import ResourceScreen from "@/components/screens/ResourceScreen";
import Slideshow from "@/components/ui/Slideshow";
import TeamScreen from "@/components/screens/TeamScreen";
import TitleScreen from "@/components/screens/TitleScreen";

export default function Home() {
    return (
        <div className="w-full flex-grow flex flex-col md:flex-row justify-evenly items-center space-y-20 md:space-y-0 py-10 md:overflow-hidden">
            <Slideshow
                screens={[
                    <TitleScreen />,
                    <TeamScreen />,
                    <LectureScreen />,
                    <ProjectScreen />,
                    <ResourceScreen />,
                    <ContactScreen />
                ]}
            />
            <Phone />
        </div>
    );
}