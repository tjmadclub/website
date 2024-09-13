import PhoneContainer from "@/components/PhoneContainer";
import PhoneDock from "@/components/PhoneDock";
import PhoneHeader from "@/components/PhoneHeader";

export default function App() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <PhoneContainer>
                <PhoneHeader
                    // Testing how time looks with the current font and location 
                    leftSide={<span className="font-bold">7:27</span>}
                />
                <PhoneDock />
            </PhoneContainer>
        </main>
    );
}