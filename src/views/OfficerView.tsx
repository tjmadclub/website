export interface OfficerViewProps {
    name: string;
    image: string;
    title: string;
    description: string;
}

// Temporary - testing diverging views
export default function OfficerView({ name, image, title, description }: OfficerViewProps) {
    return (
        <div className="h-full w-full p-5 pt-10 break-words overflow-y-scroll z-20 bg-gray-900 text-white">
            <img 
                src={image}
            />
            <span>{name}</span>
            <em>{title}</em>
            <p>{description}</p>
        </div>
    )
}