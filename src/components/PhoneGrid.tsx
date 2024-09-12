import PhoneApp, { PhoneAppProps } from "./PhoneApp";

export type PhoneGridAppList = (PhoneAppProps | null)[];

export interface PhoneGridProps {
    apps: PhoneGridAppList;
}

export default function PhoneGrid({ apps }: PhoneGridProps) {
    const appsInGrid = apps.map((app: PhoneAppProps | null) => {
        if (!app)
            return <div className="w-12 h-12 p-1"></div>;
        return <PhoneApp {...app} />;
    });

    return (
        <div className="grid grid-cols-4 gap-4 mt-8">
            {appsInGrid}
        </div>
    )
}