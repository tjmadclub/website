export interface ResourceLink {
    name: string;
    href: string;
}

export interface ResourceSectionProps {
    category: string;
    links: ResourceLink[];
}

export default function ResourceSection({
    category,
    links
}: ResourceSectionProps) {
    return (
        <div className="p-4 flex flex-col w-fit">
            <h1
                className="font-bold text-4xl w-fit text-tjmad-blue mb-3 text-left"
            >
                {category}
            </h1>
            <ul className="space-y-1 list-disc list-inside w-fit">
                {
                    links.map((link: ResourceLink) => {
                        return (
                            <li>
                                <a 
                                    className="link"
                                    href={link.href}
                                >
                                    {link.name}
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}