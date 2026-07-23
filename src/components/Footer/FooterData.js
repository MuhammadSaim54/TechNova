import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa6";

const FooterData = {

    quickLinks: [
        {
            id: 1,
            title: "Home",
            path: "/"
        },
        {
            id: 2,
            title: "About",
            path: "/about"
        },
        {
            id: 3,
            title: "Services",
            path: "/services"
        },
        {
            id: 4,
            title: "Portfolio",
            path: "/portfolio"
        },
        {
            id: 5,
            title: "Blog",
            path: "/blog"
        }
    ],

    services: [
        {
            id: 1,
            title: "Web Development"
        },
        {
            id: 2,
            title: "UI/UX Design"
        },
        {
            id: 3,
            title: "SEO Optimization"
        },
        {
            id: 4,
            title: "Cloud Solutions"
        },
        {
            id: 5,
            title: "Digital Marketing"
        }
    ],

    contact: [
        {
            id: 1,
            title: "Email",
            value: "hello@technova.com"
        },
        {
            id: 2,
            title: "Phone",
            value: "+92 300 1234567"
        },
        {
            id: 3,
            title: "Location",
            value: "Lahore, Pakistan"
        }
    ],

    socialLinks: [
        {
            id: 1,
            icon: FaFacebook,
            url: "#"
        },
        {
            id: 2,
            icon: FaLinkedin,
            url: "#"
        },
        {
            id: 3,
            icon: FaGithub,
            url: "#"
        },
        {
            id: 4,
            icon: FaTwitter,
            url: "#"
        }
    ]

};

export default FooterData;