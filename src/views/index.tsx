import githubLogo from "@/assets/phone/apps/github.webp";
import facebookLogo from "@/assets/phone/apps/facebook.webp";
import discordLogo from "@/assets/phone/apps/discord.webp";
import instagramLogo from "@/assets/phone/apps/instagram.webp";

import razaPhoto from "@/assets/phone/officers/raza.webp";
import shayanPhoto from "@/assets/phone/officers/shayan.webp";
import loganPhoto from "@/assets/phone/officers/logan.webp";
import ishanPhoto from "@/assets/phone/officers/ishan.webp";
import ryanPhoto from "@/assets/phone/officers/ryan.webp";
import judePhoto from "@/assets/phone/officers/jude.webp";

import usePhoneStore from "@/store/phone";
import OfficerView from "@/views/OfficerView";

function divergeToOfficerView(name: string, image: string, title: string, description: string) {
    const setDivergence = usePhoneStore.getState().setDivergence;

    setDivergence(
        true,
        <OfficerView 
            name={name}
            image={image}
            title={title}
            description={description}
        />
    );
}

export const defaultViews = [
    [
        null,
        { name: "Facebook", logo: facebookLogo, isLink: true, link: "https://www.facebook.com/groups/1769516489949730" },
        null,
        null,
        { name: "Discord", logo: discordLogo, isLink: true, link: "https://discord.gg/yqc3u2UdFe" },
        null,
        null,
        { name: "Instagram", logo: instagramLogo, isLink: true, link: "https://www.instagram.com/tj_madclub" },
        null,
        null,
        null,
        null,
        null,
        null,
        { name: "Github", logo: githubLogo, isLink: true, link: "https://github.com/tjmadclub" }
    ],
    [
        null,
        null,
        { name: "Raza", logo: razaPhoto, isLink: false, onClick: () => divergeToOfficerView("Syed Raza Haider", razaPhoto, "VP of Design", "") },
        null,
        null,
        null,
        null,
        { name: "Shayan", logo: shayanPhoto, isLink: false, onClick: () => divergeToOfficerView("Shayan Akram", shayanPhoto, "VP of Outreach", "") },
        { name: "Ryan", logo: ryanPhoto, isLink: false, onClick: () => divergeToOfficerView("Ryan Ghimire", ryanPhoto, "VP of Technology", "") },
        null,
        { name: "Ishan", logo: ishanPhoto, isLink: false, onClick: () => divergeToOfficerView("Ishan Ajwani", ishanPhoto, "President", "") },
        null,
        { name: "Logan", logo: loganPhoto, isLink: false, onClick: () => divergeToOfficerView("Logan Bradley", loganPhoto, "VP of Operations", "") },
        null,
        null,
        { name: "Jude", logo: judePhoto, isLink: false, onClick: () => divergeToOfficerView("Jude Caldwell", judePhoto, "VP of Finance", "") }
    ]
];