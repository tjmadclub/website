import ResourceSection, { ResourceSectionProps } from "@/components/ui/ResourceSection";

const resources: ResourceSectionProps[] = [
    {
        category: "Android Studio",
        links: [
            {
                name: "How to install Android Studio",
                href: "https://github.com/tjmadclub/lectures/blob/16eff4183b41e42de1194ab730a6c6a86570a34a/resources/installation.md"
            },
            {
                name: "Android Emulator Tutorial",
                href: "https://developer.android.com/studio/run/emulator"
            },
            {
                name: "How to install plugins in Android Studio",
                href: "https://stackoverflow.com/questions/30617408/how-to-install-plugin-in-android-studio"
            },
            {
                name: "Create your first Android app",
                href: "https://developer.android.com/codelabs/basic-android-kotlin-compose-first-app"
            },
            {
                name: "Android Studio Walkthrough",
                href: "https://developer.android.com/studio/intro"
            }
        ]
    },
    {
        category: "Flutter",
        links: [
            {
                name: "Codecademy: Intro to Flutter",
                href: "https://www.codecademy.com/learn/intro-to-flutter"
            },
            {
                name: "Flutter Samples",
                href: "https://flutter.github.io/samples/"
            },
            {
                name: "Flutter Cookbook",
                href: "https://docs.flutter.dev/cookbook"
            },
            {
                name: "FlutterGems",
                href: "https://fluttergems.dev/"
            }
        ]
    },
    {
        category: "Dart",
        links: [
            {
                name: "Dart Language Introduction",
                href: "https://dart.dev/language"
            },
            {
                name: "Dart API Reference",
                href: "https://api.dart.dev/"
            },
            {
                name: "Google's Dart Tutorial Playlist",
                href: "https://www.youtube.com/playlist?list=PLjxrf2q8roU0Net_g1NT5_vOO3s_FR02J"
            },
            {
                name: "Official Dart Tutorials",
                href: "https://dart.dev/tutorials"
            }
        ]
    },
    {
        category: "Other",
        links: [
            {
                name: "Firebase & Flutter Integration",
                href: "https://firebase.google.com/docs/flutter/setup"
            },
            {
                name: "Mr. Tra's Mobile Apps Course Site",
                href: "https://sites.google.com/view/oncreatingapps"
            },
            {
                name: "Running Python on Flutter",
                href: "https://medium.com/@ihassanjavaid/how-to-run-python-scripts-on-flutter-d6a4aedb6227"
            }
        ]
    },
];

export default function Resources() {
    return (
        <div className="flex flex-col pt-20 pb-5 px-16 sm:px-20 justify-center items-center w-full">
            <div className="w-full md:w-3/4 lg:w-1/2">
                <h1
                    className="font-extrabold text-6xl text-tjmad-red mb-5 text-center"
                >
                    Resources
                </h1>
                <hr
                    className="border-none h-[1px] text-black bg-black"
                />
            </div>
            <div></div>
            <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-y-10 justify-between mt-4">
                {
                    resources.map((resource: ResourceSectionProps, index: number) => {
                        return (
                            <div
                                key={index}
                            >
                                <ResourceSection {...resource} />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}