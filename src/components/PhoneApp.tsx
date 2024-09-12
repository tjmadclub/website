interface MobileApplication {
    logo: string;
    callback?: Function | string;
}

export default function PhoneApp({ logo }: MobileApplication) {
    return (
        <a 
            className="overflow-hidden w-12 h-12 p-1 cursor-pointer"
        >
            <img
                src={logo}
                className="h-full w-full object-cover rounded-lg"
            />
        </a>
    )
}