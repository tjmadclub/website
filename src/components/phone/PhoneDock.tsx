import PhoneApp from "@/components/phone/PhoneApp";
import notesLogo from "@/assets/phone/apps/notes.webp";
import safariLogo from "@/assets/phone/apps/safari.webp";
import settingsLogo from "@/assets/phone/apps/settings.webp";

export default function PhoneDock() {
    return (
        <div className="mt-auto flex justify-evenly px-8 py-[0.35rem] gap-3 bg-gray-700 rounded-3xl">
            <PhoneApp
                logo={notesLogo}
                isLink={false}
            />
            <PhoneApp
                logo={safariLogo}
                isLink={true}
                link="https://google.com/"
            />
            <PhoneApp
                logo={settingsLogo}
                isLink={false}
            />
        </div>
    );
}