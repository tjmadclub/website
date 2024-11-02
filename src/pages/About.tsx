import aboutBackdrop from "@/assets/pages/about_backdrop.webp";
import clubMeetingPhoto from "@/assets/pages/club_meeting.webp";

export default function About() {
    return (
        <div className="w-full flex-grow flex flex-col justify-center items-center pt-20 px-15 sm:px-20">
            <h1
                className="font-extrabold text-6xl text-tjmad-red mb-5 text-center"
            >
                About Us
            </h1>
            <div className="md:w-3/4 lg:w-1/2 mx-10 flex flex-col justify-center items-center gap-y-10 font-light text-center">
                <hr
                    className="border-none w-full h-[1px] text-black bg-black"
                />
                <p>
                    The TJ Mobile Apps Club, founded in 2015 by Spencer Atkin, teaches members to 
                    create iPhone and Android apps, progressing from basics to advanced topics 
                    throughout the year.
                </p>
                <img 
                    className="object-contain w-3/4"
                    src={clubMeetingPhoto}
                />
                <p>
                    We meet Wednesday 8A in Mr. Kosek's room (Rm 286). The general block structure
                    is 50% lecturing, 50% coding. Joining the club lets you create your own app, 
                    work on a final project, and submit to the Congressional App Challenge, 
                    among other opportunities.
                    <br /><br />
                    See you at the club!
                </p>
                <img 
                    className="object-contain w-3/4"
                    src={aboutBackdrop}
                />
            </div>
        </div>
    );
}