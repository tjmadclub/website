import PhoneApp, { PhoneAppProps } from "@/components/phone/PhoneApp";

export type PhoneGridAppList = (PhoneAppProps & { name: string } | null)[];

export interface PhoneGridProps {
    apps: PhoneGridAppList;
}

export default function PhoneGrid({ apps }: PhoneGridProps) {
    const appsInGrid = apps.map((app: PhoneAppProps & { name: string } | null, index: number) => {
        if (!app)
            return <div key={index} className="w-12 h-12 p-1"></div>;
        return (
            <div key={index} className="flex flex-col justify-center items-center text-center">
                <PhoneApp {...app} />
                <span className="text-[0.6rem] text-white font-medium">{app.name}</span>
            </div>
        );
    });

    return (
        <div className="grid grid-cols-4 gap-x-6 gap-y-3 mt-4 mx-4">
            {appsInGrid}
        </div>
    );
}