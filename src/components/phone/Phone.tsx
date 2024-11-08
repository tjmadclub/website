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
        <div className="relative h-[32rem] w-[16rem] flex justify-center items-center">
            <img
                src={defaultPhoneOutline}
                className="z-30 w-full h-full object-contain pointer-events-none"
            />
            <div className="absolute top-0 flex h-full w-[90%] pt-[7%] pb-[7%] pr-[1%] pl-[2%] overflow-hidden">
                <div className="h-full min-w-full flex justify-evenly flex-col bg-phone-background bg-cover bg-center overflow-hidden">
                    <PhoneHeader />
                    {isDiverged && 
                        <PhoneDivergence>
                            {divergence}
                        </PhoneDivergence>
                    }
                    <PhoneScreenList />
                    <PhoneDock />
                </div>
            </div>
        </div>
    )
}