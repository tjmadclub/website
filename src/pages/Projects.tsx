import ProjectCard, { ProjectCardProps } from "@/components/ui/ProjectCard";
import navTjProjectPhoto from "@/assets/pages/navtj_project_head.webp";
import defaultProjectPhoto from "@/assets/pages/default_project_head.webp";

const projects: ProjectCardProps[] = [
    {
        name: "NavTJ",
        description: "A navigation app for getting around TJHSST. Currently in the process of getting approved!",
        image: navTjProjectPhoto,
        github: "https://github.com/Raccoon15834/tj_scavenger_draft/",
    },
    {
        name: "???",
        image: defaultProjectPhoto,
        description: "Want to see your own app here? Join the club and participate!"
    },
    {
        name: "???",
        image: defaultProjectPhoto,
        description: "Want to see your own app here? Join the club and participate!"
    }
];

export default function Projects() {
    return (
        <div className="flex flex-grow flex-col pt-20 pb-5 px-16 sm:px-20 w-full">
            <h1
                className="font-extrabold text-6xl text-tjmad-blue mb-5 text-left"
            >
                Projects
            </h1>
            <hr
                className="border-none h-[1px] text-black bg-black"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-2 mt-4">
                {
                    projects.map((project: ProjectCardProps, index: number) => {
                        return (
                            <div 
                                key={index}
                                className="w-full h-full"
                            >
                                <ProjectCard {...project} />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}