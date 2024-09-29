import PhoneHeader from "@/components/phone/PhoneHeader";
import PhoneDock from "@/components/phone/PhoneDock";
import usePhoneStore from "@/store/phone";
import defaultPhoneOutline from "@/assets/phone/phone_container.webp";
import PhoneScreenList from "@/components/phone/PhoneScreenList";
import PhoneDivergence from "@/components/phone/PhoneDivergence";

export default function Phone() {
    const {  
        isDiverged,
        divergence
    } = usePhoneStore((state) => state);
    
    return (
        <div className="relative h-[32rem] flex justify-center items-center">
            <img
                src={defaultPhoneOutline}
                className="z-30 w-full h-full object-contain pointer-events-none"
            />
            <div className="absolute top-0 flex h-full w-[90%] pt-[2%] sm:pt-[4%] pb-[4%] pl-[17%] pr-[17%] sm:pr-[1%] sm:pl-[2%] overflow-hidden">
                <div className="h-full min-w-full flex justify-evenly flex-col bg-phone-background bg-cover bg-center overflow-hidden">
                    <PhoneHeader />
                    {isDiverged && 
                        <PhoneDivergence>
                            {divergence}
                        </PhoneDivergence>
                        // <div className="absolute top-0 h-full w-full pt-[2%] sm:pt-[5%] pb-[4%] pr-[38%] sm:pr-[4%] overflow-hidden z-10">
                        //     {divergence}
                        // </div>
                    }
                    <PhoneScreenList />
                    <PhoneDock />
                </div>
            </div>
        </div>
    )
}