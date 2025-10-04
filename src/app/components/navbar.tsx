import { useEffect, useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { useRouter, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const links = [
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

export default function Navbar () {
    const router = useRouter();
    const path = usePathname();
    const alwaysBgNav: boolean = path !== "/" && path !== "/stories";
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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
        <>
            <header
                style={{ height: 'var(--navbar-height)' }} 
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    (isScrolled || alwaysBgNav) ? 'bg-[#044D28] py-4' : 'bg-transparent py-8'
                } px-8 flex justify-between items-center`}
            >
                {/* Desktop Logo (hidden on mobile) */}
                <div 
                    onClick={() => router.push("/")}
                    className="font-bold text-xl cursor-pointer hidden md:block" 
                >
                    <Image
                        src="/u4e_logo.png"
                        alt="U4E Logo"
                        className={`${(isScrolled || alwaysBgNav) ? "w-24 h-auto" : "w-30 h-auto"}`}
                        width={150}
                        height={150}
                        priority
                    />
                </div>

                <nav className="space-x-8 hidden md:flex text-white">
                    {links.map((link, idx) => (
                        <Link key={idx}
                            href={link.link} className="hover:text-gray-300">{link.label}
						</Link>
                    ))}
                </nav>

                {/* Mobile hamburger */}
                <div className="md:hidden">
                    <button className="text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </header>

            <AnimatePresence>
				{menuOpen && (
				<motion.div
					initial={{ x: "-100%" }}
					animate={{ x: 0 }}
					exit={{ x: "-100%" }}
					transition={{ type: "tween", duration: 0.3 }}
					className="fixed top-0 left-0 h-full w-3/4 bg-[#1b1b7a]/90 text-white shadow-lg z-50 p-8 flex flex-col space-y-6"
				>
					<button
						className="self-end mb-6"
						onClick={() => setMenuOpen(false)}
					>
						<FiX size={28} />
					</button>
					{links.map((link, idx) => (
                        <a key={idx}
                            href={link.link} className="hover:text-gray-300">{link.label}</a>
                    ))}
				</motion.div>
				)}
			</AnimatePresence>
		</>
    );
};