import { useEffect, useState } from "react";
import Image from "next/image";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { useRouter, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

interface SubLink {
    label: string;
    link: string;
}

interface NavLink {
    label: string;
    link: string;
    subLinks?: SubLink[];
}

const links: NavLink[] = [
    {
        label: "Home",
        link: "/",
    },
    {
        label: "About",
        link: "/about",
    },
    {
        label: "News",
        link: "/news",
        subLinks: [
            { label: "All News", link: "/news?tab=news" },
            { label: "Gallery", link: "/news?tab=gallery" },
            { label: "Videos", link: "/news?tab=videos" }
        ]
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
];

export default function Navbar() {
    const router = useRouter();
    const path = usePathname();
    const alwaysBgNav: boolean = path !== "/" && path !== "/stories";
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);

    useEffect(() => {
        if (alwaysBgNav) { return };
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [alwaysBgNav]);


    const handleMobileMenuToggle = (label: string) => {
        setMobileExpandedMenu(mobileExpandedMenu === label ? null : label);
    };

    return (
        <>
            <header
                style={{ height: 'var(--navbar-height)' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${(isScrolled || alwaysBgNav) ? 'bg-[#044D28] py-4' : 'bg-transparent py-8'
                    } px-8 flex justify-between items-center`}
            >
                {/* Desktop Logo */}
                <div 
                    onClick={() => router.push("/")}
                    className="flex flex-row items-center gap-4 cursor-pointer"
                >
                    <div className="block">
                        <Image
                            src="/rea-white.png"
                            alt="REA Logo"
                            className="h-14 w-auto"
                            width={100}
                            height={40}
                            priority
                        />
                    </div>

                    <div className="block h-10 w-px bg-white/30"></div>

                    <div className="block">
                        <Image
                            src="/unep-white.png"
                            alt="UNEP Logo"
                            className="h-12 w-auto"
                            width={100}
                            height={40}
                            priority
                        />
                    </div>

                    <div className="block h-10 w-px bg-white/30"></div>

                    <div className="block">
                        <Image
                            src="/u4e_logo.png"
                            alt="U4E Logo"
                            className="h-8 w-auto"
                            width={120}
                            height={48}
                            priority
                        />
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="space-x-8 hidden lg:flex text-white items-center">
                    {links.map((link, idx) => (
                        <div 
                            key={idx} 
                            className="relative"
                            onMouseEnter={() => link.subLinks && setActiveDropdown(link.label)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            {link.subLinks ? (
                                // Dropdown menu item
                                <div>
                                    <Link
                                        href={link.link}
                                        className="hover:text-gray-300 flex items-center gap-1 py-2"
                                    >
                                        {link.label}
                                        <FiChevronDown
                                            className={`transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''
                                                }`}
                                            size={16}
                                        />
                                    </Link>

                                    {/* Dropdown menu */}
                                    <AnimatePresence>
                                        {activeDropdown === link.label && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[200px] overflow-hidden"
                                            >
                                                {link.subLinks.map((subLink, subIdx) => (
                                                    <Link
                                                        key={subIdx}
                                                        href={subLink.link}
                                                        className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                                                    >
                                                        {subLink.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                // Regular menu item
                                <Link href={link.link} className="hover:text-gray-300">
                                    {link.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Mobile hamburger */}
                <div className="lg:hidden">
                    <button className="text-white" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed top-0 left-0 h-full w-3/4 bg-[#044D28] text-white shadow-lg z-50 p-8 flex flex-col overflow-y-auto"
                    >
                        <button
                            className="self-end mb-6"
                            onClick={() => setMenuOpen(false)}
                        >
                            <FiX size={28} />
                        </button>

                        <nav className="flex flex-col space-y-4">
                            {links.map((link, idx) => (
                                <div key={idx}>
                                    {link.subLinks ? (
                                        // Mobile dropdown
                                        <div>
                                            <button
                                                onClick={() => handleMobileMenuToggle(link.label)}
                                                className="w-full flex items-center justify-between hover:text-gray-300 py-2"
                                            >
                                                <span>{link.label}</span>
                                                <FiChevronDown
                                                    className={`transition-transform duration-200 ${mobileExpandedMenu === link.label ? 'rotate-180' : ''
                                                        }`}
                                                    size={20}
                                                />
                                            </button>

                                            {/* Mobile submenu */}
                                            <AnimatePresence>
                                                {mobileExpandedMenu === link.label && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="overflow-hidden pl-4 mt-2 space-y-2"
                                                    >
                                                        {link.subLinks.map((subLink, subIdx) => (
                                                            <Link
                                                                key={subIdx}
                                                                href={subLink.link}
                                                                className="block py-2 text-gray-200 hover:text-white pl-3"
                                                                onClick={() => setMenuOpen(false)}
                                                            >
                                                                {subLink.label}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        // Regular mobile link
                                        <Link
                                            href={link.link}
                                            className="block hover:text-gray-300 py-2"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}