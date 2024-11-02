import githubLogo from "@/assets/phone/apps/github.webp";
import appStoreLogo from "@/assets/phone/apps/app_store.webp";
import playStoreLogo from "@/assets/phone/apps/play_store.webp";

export interface ProjectCardProps {
    name: string;
    image: string;
    description: string;
    github?: string;
    iphone?: string;
    android?: string;
}

export default function ProjectCard({
    name,
    image,
    description,
    github,
    iphone,
    android
}: ProjectCardProps) {
    return (
        <div className="p-4 border-[1px] border-black h-full w-full flex flex-col">
            <h1
                className="font-bold text-4xl text-tjmad-blue mb-3"
            >
                {name}
            </h1>
            <img
                src={image}
                className="w-full max-h-64 object-contain my-5"
            />
            <p className="font-light flex-grow text-sm sm:text-base">
                {description}
            </p>
            <div className="flex mt-2 justify-start items-start py-2 gap-x-5">
                {
                    github && (
                        <a 
                            href={github} 
                            target="_blank" 
                            className="rounded-md overflow-hidden w-8 h-8"
                        >
                            <img 
                                className="rounded-md object-cover" 
                                src={githubLogo} 
                            />
                        </a>        
                    )
                }
                {
                    iphone && (
                        <a 
                            href={iphone} 
                            target="_blank" 
                            className="rounded-md overflow-hidden w-8 h-8"
                        >
                            <img 
                                className="rounded-md object-cover" 
                                src={appStoreLogo} 
                            />
                        </a>        
                    )
                }
                {
                    android && (
                        <a 
                            href={android} 
                            target="_blank" 
                            className="rounded-md overflow-hidden w-8 h-8"
                        >
                            <img 
                                className="rounded-md object-cover" 
                                src={playStoreLogo} 
                            />
                        </a>        
                    )
                }
            </div>
        </div>
    );
}