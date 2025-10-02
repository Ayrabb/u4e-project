import { useEffect, useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { useRouter, usePathname } from "next/navigation";

const links = [
    {
        label: "About",
        link: "/about",
    },
    {
        label: "News",
        link: "/news",
    },
    {
        label: "Stories",
        link: "/stories",
    },
    {
        label: "Resources",
        link: "/resources",
    },
    {
        label: "Contact us",
        link: "/contact",
    }
]

export default function NavBar ({ 
    menu, changeMenu 
}: { 
    menu: boolean, changeMenu: React.Dispatch<React.SetStateAction<boolean>> 
} ) {
    const router = useRouter();
    const path = usePathname();
    const alwaysBgNav: boolean = path !== "/" && path !== "/stories";
    const [isScrolled, setIsScrolled] = useState(false);

    // Add scroll event listener
    useEffect(() => {
        if(alwaysBgNav) {return};

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [alwaysBgNav]);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                (isScrolled || alwaysBgNav) ? 'bg-[#044D28] py-4' : 'bg-transparent py-8'
            } px-8 flex justify-between items-center`}>
            {/* Logo (hidden on mobile) */}
            <div 
                onClick={() => router.push("/")}
                className="font-bold text-xl cursor-pointer hidden md:block" 
            >
                <Image
                    src="/u4e_logo.png"
                    alt="U4E Logo"
                    className={`${(isScrolled || alwaysBgNav) ? "w-30 h-auto" : "w-40 h-auto"}`}
                    width={200}
                    height={200}
                    priority
                />
            </div>

            <nav className="space-x-8 hidden md:flex text-white">
                {links.map((link, idx) => (
                    <a key={idx}
                        href={link.link} className="hover:text-gray-300">{link.label}</a>
                ))}
            </nav>

            {/* Mobile hamburger */}
            <div className="md:hidden">
                <button className="text-white"
                    onClick={() => changeMenu(!menu)}
                >
                    {menu ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>
        </header>
    )
};