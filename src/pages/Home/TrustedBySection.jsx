import Google from "../../assets/BrandsLogos/google.svg";
import Microsoft from "../../assets/BrandsLogos/microsoft.svg";
import Gitlab from "../../assets/BrandsLogos/gitlab.svg";
import DropBox from "../../assets/BrandsLogos/dropbox.svg";
import Spotify from "../../assets/BrandsLogos/spotify.svg";
import Slack from "../../assets/BrandsLogos/slack.svg";

function TrustedBySection() {
    return (
        <section
            className="
                flex
                flex-col
                justify-center
                items-center

                py-10
                px-6

                gap-5

                border-b
                border-(--Section-line)
            "
        >

            {/* ================= Heading ================= */}

            <div>
                <span
                    className="
                        font-['Manrope']
                        font-bold
                        text-[#868686]

                        max-[480px]:text-xs
                    "
                >
                    TRUSTED BY 500+ COMPANIES WORLDWIDE
                </span>
            </div>


            {/* ================= Logos ================= */}

            <div
                className="
                    flex
                    justify-evenly
                    items-center

                    w-full

                    max-[1024px]:flex-wrap
                    max-[1024px]:gap-4
                "
            >

                <img
                    src={Google}
                    alt="Google logo"
                    className="
                        w-32
                        cursor-pointer

                        transition-[filter]
                        duration-[3.2s]
                        ease-in-out

                        hover:filter-[invert(1)]
                        hover:animate-[Logo_3.2s_ease]
                        
                        max-[480px]:w-26
                    "
                />

                <img
                    src={Microsoft}
                    alt="Microsoft logo"
                    className="
                        w-32
                        cursor-pointer

                        transition-[filter]
                        duration-[3.2s]
                        ease-in-out

                        hover:filter-[invert(1)]
                        hover:animate-[Logo_3.2s_ease]

                        max-[480px]:w-26
                    "
                />

                <img
                    src={Gitlab}
                    alt="Gitlab logo"
                    className="
                        w-32
                        cursor-pointer

                        transition-[filter]
                        duration-[3.2s]
                        ease-in-out

                        hover:filter-[invert(1)]
                        hover:animate-[Logo_3.2s_ease]

                        max-[480px]:w-26
                    "
                />

                <img
                    src={DropBox}
                    alt="Dropbox logo"
                    className="
                        w-32
                        cursor-pointer

                        transition-[filter]
                        duration-[3.2s]
                        ease-in-out

                        hover:filter-[invert(1)]
                        hover:animate-[Logo_3.2s_ease]

                        max-[480px]:w-26
                    "
                />

                <img
                    src={Spotify}
                    alt="Spotify logo"
                    className="
                        w-32
                        cursor-pointer

                        transition-[filter]
                        duration-[3.2s]
                        ease-in-out

                        hover:filter-[invert(1)]
                        hover:animate-[Logo_3.2s_ease]

                        max-[480px]:w-26
                    "
                />

                <img
                    src={Slack}
                    alt="Slack logo"
                    className="
                        w-32
                        cursor-pointer

                        transition-[filter]
                        duration-[3.2s]
                        ease-in-out

                        hover:filter-[invert(1)]
                        hover:animate-[Logo_3.2s_ease]

                        max-[480px]:w-26
                    "
                />

            </div>

        </section>
    );
}

export default TrustedBySection;