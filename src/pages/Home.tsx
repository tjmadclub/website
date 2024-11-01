import Phone from "@/components/phone/Phone";
import ContactScreen from "@/components/ui/ContactScreen";
import LectureScreen from "@/components/ui/LectureScreen";
import ProjectScreen from "@/components/ui/ProjectScreen";
import ResourceScreen from "@/components/ui/ResourceScreen";
import Slideshow from "@/components/ui/Slideshow";
import TeamScreen from "@/components/ui/TeamScreen";
import TitleScreen from "@/components/ui/TitleScreen";

export default function Home() {
    return (
        <div className="w-full flex flex-col sm:flex-row justify-evenly items-center space-y-20 sm:space-y-0 py-10 overflow-x-hidden sm:overflow-hidden">
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