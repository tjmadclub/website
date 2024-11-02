export interface OfficerViewProps {
    name: string;
    image: string;
    title: string;
    titleColor?: string;
    description: string;
}

export default function OfficerView({ 
    name, 
    image, 
    title,
    titleColor, 
    description 
}: OfficerViewProps) {
    return (
        <div className="h-full w-full flex flex-col font-light text-sm items-center p-5 pt-10 break-words overflow-y-scroll z-20 bg-[#11161c] text-white">
            <img 
                src={image}
                className="object-contain w-3/4 rounded-2xl my-3"
            />
            <div className="flex flex-col items-center [&_*]:mb-3">
                <h1 className="font-bold text-xl text-center mb-3">
                    {name}
                </h1>
                <div 
                    className="rounded-full px-3 py-1 w-fit"
                    style={{ backgroundColor: titleColor || "transparent" }}
                >
                    {title}
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}