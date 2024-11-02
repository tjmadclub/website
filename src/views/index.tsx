import githubLogo from "@/assets/phone/apps/github.webp";
import facebookLogo from "@/assets/phone/apps/facebook.webp";
import discordLogo from "@/assets/phone/apps/discord.webp";
import instagramLogo from "@/assets/phone/apps/instagram.webp";
import ionLogo from "@/assets/phone/apps/ion.webp";

import razaPhoto from "@/assets/phone/officers/raza.webp";
import shayanPhoto from "@/assets/phone/officers/shayan.webp";
import loganPhoto from "@/assets/phone/officers/logan.webp";
import ishanPhoto from "@/assets/phone/officers/ishan.webp";
import ryanPhoto from "@/assets/phone/officers/ryan.webp";
import judePhoto from "@/assets/phone/officers/jude.webp";

import slidesLogo from "@/assets/phone/apps/slides.webp";
import flutterLogo from "@/assets/phone/apps/flutter.webp";
import androidStudioLogo from "@/assets/phone/apps/android_studio.webp";

import appStoreLogo from "@/assets/phone/apps/app_store.webp";
import settingsLogo from "@/assets/phone/apps/settings.webp";
import notesLogo from "@/assets/phone/apps/notes.webp";

import chatGptLogo from "@/assets/phone/apps/chatgpt.webp";
import fccLogo from "@/assets/phone/apps/freecodecamp.webp";
import xcodeLogo from "@/assets/phone/apps/xcode.webp";
import dartLogo from "@/assets/phone/apps/dart.webp";

import gmailLogo from "@/assets/phone/apps/gmail.webp";

import usePhoneStore from "@/store/phone";
import OfficerView from "@/views/OfficerView";

function divergeToOfficerView(name: string, image: string, title: string, description: string, titleColor?: string) {
    const setDivergence = usePhoneStore.getState().setDivergence;

    setDivergence(
        true,
        <OfficerView 
            name={name}
            image={image}
            title={title}
            titleColor={titleColor}
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
        { name: "Github", logo: githubLogo, isLink: true, link: "https://github.com/tjmadclub" },
        null,
        { name: "Ion", logo: ionLogo, isLink: true, link: "https://ion.tjhsst.edu/eighth" }
    ],
    [
        null,
        null,
        { name: "Raza", logo: razaPhoto, isLink: false, onClick: () => divergeToOfficerView("Syed Raza Haider", razaPhoto, "VP of Design", "Descriptions coming soon!", "#eb3434") },
        null,
        null,
        null,
        null,
        { name: "Shayan", logo: shayanPhoto, isLink: false, onClick: () => divergeToOfficerView("Shayan Akram", shayanPhoto, "VP of Outreach", "Descriptions coming soon!", "#8139c4") },
        { name: "Ryan", logo: ryanPhoto, isLink: false, onClick: () => divergeToOfficerView("Ryan Ghimire", ryanPhoto, "VP of Technology", "Descriptions coming soon!", "#37b8a2") },
        null,
        { name: "Ishan", logo: ishanPhoto, isLink: false, onClick: () => divergeToOfficerView("Ishan Ajwani", ishanPhoto, "President", "Descriptions coming soon!", "#b86f37") },
        null,
        { name: "Logan", logo: loganPhoto, isLink: false, onClick: () => divergeToOfficerView("Logan Bradley", loganPhoto, "VP of Operations", "Descriptions coming soon!", "#2c66c9") },
        null,
        null,
        { name: "Jude", logo: judePhoto, isLink: false, onClick: () => divergeToOfficerView("Jude Caldwell", judePhoto, "VP of Finance", "Descriptions coming soon!", "#e63286") }
    ],
    [
        null,
        null,
        null,
        { name: "Slides", logo: slidesLogo, isLink: true, link: "https://github.com/tjmadclub/lectures" },
        null,
        null,
        null,
        null,
        { name: "Flutter", logo: flutterLogo, isLink: true, link: "https://flutter.dev" },
        null,
        null,
        null,
        null,
        null,
        { name: "Studio", logo: androidStudioLogo, isLink: true, link: "https://developer.android.com/studio/intro" }
    ],
    [
        null,
        null,
        { name: "App Store", logo: appStoreLogo, isLink: true, link: "/projects" },
        null,
        null,
        null,
        null,
        null,
        { name: "Settings", logo: settingsLogo, isLink: false },
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        { name: "Notes", logo: notesLogo, isLink: false }
    ],
    [
        null,
        null,
        { name: "ChatGPT", logo: chatGptLogo, isLink: true, link: "/resources" },
        null,
        { name: "FCC", logo: fccLogo, isLink: true, link: "https://www.freecodecamp.org/news/tag/flutter/" },
        null,
        null,
        null,
        null,
        null,
        null,
        { name: "XCode", logo: xcodeLogo, isLink: true, link: "https://developer.apple.com/xcode/" },
        null,
        null,
        { name: "Dart", logo: dartLogo, isLink: true, link: "https://dart.dev/language" }
    ],
    [
        null,
        { name: "Gmail", logo: gmailLogo, isLink: true, link: "mailto:tjmobileappsclub@gmail.com" },
        null,
        null,
        null,
        null,
        null,
        { name: "Facebook", logo: facebookLogo, isLink: true, link: "https://www.facebook.com/groups/1769516489949730" },
        null,
        null,
        null,
        null,
        { name: "Instagram", logo: instagramLogo, isLink: true, link: "https://www.instagram.com/tj_madclub" },
    ]
];