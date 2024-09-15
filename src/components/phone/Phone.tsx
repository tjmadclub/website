import PhoneContainer from "@/components/phone/PhoneContainer";
import PhoneHeader from "@/components/phone/PhoneHeader";
import PhoneGrid, { PhoneGridAppList } from "@/components/phone/PhoneGrid";
import PhoneDock from "@/components/phone/PhoneDock";
import usePhoneStore from "@/store/phone";

export default function Phone() {
    const { 
        views, 
        viewIndex, 
        isDiverged,
        divergence,
        // @ts-ignore
        incrementIndex,
        // @ts-ignore
        decrementIndex
    } = usePhoneStore((state) => state);
    const currentView = views[viewIndex] as PhoneGridAppList || [];

    return (
        <PhoneContainer>
            <PhoneHeader />
            {
                isDiverged 
                    ? divergence
                    : <>
                        <PhoneGrid apps={currentView} />
                        <PhoneDock />
                    </>
            }
        </PhoneContainer>
    )
}