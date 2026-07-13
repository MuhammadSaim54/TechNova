import { Code2, Palette, TrendingUp, Search, PenTool, Cloud } from "lucide-react";

let ServicesData = [
    {
        id: 1,
        class: "card Development",
        title: "Web Development",
        description: "We build fast, responsive and scalable websites with modern technologies.",
        icon:  Code2,
        iconClass: "icon web-development",
        iconColor: "#F8FAFC"
    },
    {
        id: 2,
        class: "card Design",
        title: "UI/UX Design",
        description: "We design beautiful and intuitive interfaces that provide the best user experience.",
        icon: Palette,
        iconClass: "icon",
        iconColor: "#0051fb"
    },
    {
        id: 3,
        class: "card Marketing",
        title: "Digital Marketing",
        description: "We help you grow your brand and reach more customers with smart marketing strategies.",
        icon: TrendingUp,
        iconClass: "icon",
        iconColor: "#0051fb"
    },
    {
        id: 4,
        class: "card SEO",
        title: "SEO Optimization",
        description: "We optimize your website to improve search rankings, increase visibility, and drive organic traffic.",
        icon: Search,
        iconClass: "icon",
        iconColor: "#0051fb"
    },
    {
        id: 5,
        class: "card Content",
        title: "Content Creation",
        description: "We create engaging and valuable content that strengthens your brand and connects with your audience.",
        icon: PenTool,
        iconClass: "icon",
        iconColor: "#0051fb"
    },
    {
        id: 6,
        class: "card Cloud",
        title: "Cloud Solutions",
        description: "We provide secure and scalable cloud solutions to improve performance, reliability, and business efficiency.",
        icon: Cloud,
        iconClass: "icon",
        iconColor: "#0051fb"
    }
]

export default ServicesData