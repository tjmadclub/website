import PhoneContainer from "@/components/PhoneContainer";
import PhoneDock from "@/components/PhoneDock";

export default function App() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <PhoneContainer>
                <PhoneDock />
            </PhoneContainer>
        </main>
    );
}