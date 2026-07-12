import { Code2, Palette, TrendingUp } from "lucide-react";

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
    }
]

export default ServicesData