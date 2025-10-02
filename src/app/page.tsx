"use client";
import Image from "next/image";
import GlanceSection from "./components/GlanceSection";
import Footer from "./components/footer";
import { FiX } from "react-icons/fi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";

type NewsItem = {
  id: string;               
  title: string;               
  summary: string;            
  date: string;                
  type: "news" | "press" | "video" | "external"; 
  source?: string;             
  url: string;                
  image?: string;                
};


const newsList: NewsItem[] = [
	{
		id: "1",
		title: "Invitation For Prequalification For The Africa Minigrids Program Grant For Pilot Minigrids in Rural Communities And Agricultural Value The U4E initiative in Nigeria The U4E initiative in Nigeria The U4E initiative in Nigeria",
		summary: "The U4E initiative in Nigeria has introduced new policies to improve efficiency in household appliances.",
		date: "2025-09-28",
		type: "press",
		url: "/news/nigeria-launches-energy-efficient-appliance-program",
		image: "/event.jpg"
	},
	{
		id: "2",
		title: "Energy efficiency drives sustainable growth in Nigerian cities",
		summary: "Local governments adopt measures to reduce energy waste and improve sustainability.",
		date: "2025-09-20",
		type: "news",
		url: "/news/energy-efficiency-drives-growth"
	},
	{
		id: "3",
		title: "The Guardian reports on Nigeria's shift to efficient cooling",
		summary: "International media highlights Nigeria’s progress in adopting energy-efficient air conditioners.",
		date: "2025-09-12",
		type: "external",
		source: "The Guardian",
		url: "https://www.theguardian.com/environment/nigeria-cooling-efficiency"
	},
	{
		id: "4",
		title: "Stakeholders endorse new efficiency standards",
		summary: "Key stakeholders across Nigeria have voiced support for the adoption of new energy efficiency standards.",
		date: "2025-08-25",
		type: "press",
		url: "/news/stakeholders-endorse-standards"
	},
	{
		id: "5",
		title: "UNEP and partners release updated efficiency report",
		summary: "The report outlines pathways for Nigeria to meet its energy savings and sustainability targets.",
		date: "2025-07-15",
		type: "news",
		url: "/news/unep-partners-release-efficiency-report"
	}
];

const NewsSection = () => {
	const featured: NewsItem = newsList[0];

	return (
		<section className="bg-white py-12 px-4 md:px-12 space-y-3">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-medium text-[#b59d2a]">Latest updates</h2>
			</div>

			<div className="grid grid-cols-2 gap-2">
				{/* Featured big card */}
				<div className="w-full group cursor-pointer">
					<div className="relative w-full h-full shadow">
						<Image
							src={featured.image || ""}
							alt="Main update"
							className="object-cover w-full h-full"
							width={350}
							height={350}
						/>

						<div className="absolute inset-0 bg-black/40"></div>

						<div className="absolute bottom-0 left-4 right-4 flex flex-col py-5 justify-between text-white h-full">
							<div className="flex flex-row justify-between">
								<time className="font-medium text-sm">
									{new Date(featured.date).toLocaleDateString('en-UK', {
										year: 'numeric',
										month: 'short',
										day: 'numeric'
									})}
								</time>
								<div>
									<HiOutlineArrowUpRight className="w-4 h-auto transform transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
								</div>
							</div>
							<h3 className="text-lg font-medium line-clamp-2">
								{featured.title}
							</h3>
						</div>
					</div>
				</div>

				{/* Smaller 2x2 grid */}
				<div className="w-full grid grid-cols-2 gap-2">
					{newsList.slice(1,5).map((element, idx) => (
					<div
						key={idx}
						className="relative w-full h-full shadow group cursor-pointer"
					>
						<Image
							src={featured.image || ""}
							alt="Main update"
							className="object-cover w-full h-full"
							width={350}
							height={350}
						/>

						<div className="absolute inset-0 bg-black/40"></div>

						<div className="absolute bottom-0 left-3 right-3 flex flex-col py-2 justify-between text-white h-full">
							<div className="flex flex-row justify-between">
								<time className="font-medium text-xs">
									{new Date(element.date).toLocaleDateString('en-UK', {
										year: 'numeric',
										month: 'short',
										day: 'numeric'
									})}
								</time>
								<div>
									<HiOutlineArrowUpRight className="w-3 h-auto transform transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
								</div>
							</div>
							<h3 className="text-sm font-medium line-clamp-2">
								{element.title}
							</h3>
						</div>
					</div>
					))}
				</div>
			</div>

			<div className="w-full text-end">
				<div className="inline-flex flex-col items-end">
					<a
						href="/news"
						className="text-md font-medium text-gray-600 hover:text-[#044D28] transition flex flex-row justify-end items-center"
					>
						See all news <HiOutlineArrowUpRight className="w-4 h-auto ms-2 text-[#044D28]"/>
					</a>
					<div className="h-[1px] w-full bg-[#044D28]"></div>
				</div>
			</div>
      </section>
	);
}

const Partners = () => (
    <section className="bg-white py-12 px-8 lg:px-20">
        <div className="container mx-auto grid grid-cols-2 gap-16">
            {/* Implementing partner */}
            <div className="flex flex-col items-center space-y-6">
                <h3 className="font-medium text-md">Implementing partner</h3>
                <div className="relative w-64 h-32">
                    <Image
                        src="/main_logo.png"
                        alt="Implementing partner logo"
                        fill
                        className="object-contain"
                    />
                </div>
				<h3 className="font-semibold text-lg">Rural Electrification Agency</h3>
            </div>

            {/* Led by */}
            <div className="flex flex-col items-center space-y-6">
                <h3 className="font-medium text-md">Led by</h3>
                <div className="relative w-64 h-32">
                    <Image
                        src="/Unep_logo.png"
                        alt="UNEP logo"
                        fill
                        className="object-contain"
                    />
                </div>
				<h3 className="font-semibold text-lg">United Nations Environment Programme</h3>
            </div>
        </div>
    </section>
);


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen font-montserrat">
		{/* Navbar */}
    	<NavBar menu={menuOpen} changeMenu={setMenuOpen}/>

            {/* Mobile slide-in menu */}
		<AnimatePresence>
        {menuOpen && (
			<motion.div
				initial={{ x: "-100%" }}   
				animate={{ x: 0 }}         
				exit={{ x: "-100%" }}      
				transition={{ type: "tween", duration: 0.3 }}
				className="fixed top-0 left-0 h-full w-3/4 bg-[#044D28]/90 text-white shadow-lg z-50 p-8 flex flex-col space-y-6"
			>
				<button
				className="self-end mb-6"
				onClick={() => setMenuOpen(false)}
				>
				<FiX size={28} />
				</button>
				<a href="#" className="hover:text-gray-300">About</a>
				<a href="#" className="hover:text-gray-300">News</a>
				<a href="#" className="hover:text-gray-300">Stories</a>
				<a href="#" className="hover:text-gray-300">Resources</a>
				<a href="#" className="hover:text-gray-300">Contact us</a>
			</motion.div>
        )}
		</AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-start px-12 text-white">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            // src="/panelsongrass.jpg"
            src="/mathias-owa-martins-WeEu-3KVhkE-unsplash.jpg"
            alt="Cityscape"
            fill
            priority
            className="object-cover object-center transform scale-x-[-1] blur-xs"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 -z-10" />

        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            United for Efficiency Initiative <br /> in
            <span className="text-green-800"> Nigeria</span>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed text-left">
            The Africa Minigrids Program is supporting access to clean energy by increasing 
            the financial viability, and promoting scaled-up commercial investment, in 
            renewable energy minigrids in Africa
          </p>
        </div>
      </section>

      <NewsSection />

		{/* Supporting Local Energy Grids Section */}
		<section className="bg-[#01130A] h-[80vh] py-10 px-8 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
			<div className="text-left basis-2/5">
				<h2 className="text-4xl lg:text-4xl font-medium mb-6 text-[#BFAB25]">
					Supporting Local Energy Grids
				</h2>
				<p className="text-base lg:text-lg leading-relaxed text-white">
					The Africa Minigrids Program is supporting access to clean energy by
					increasing the financial viability, and promoting scaled-up
					commercial investment in renewable energy minigrids in Africa, with
					a focus on cost-reduction levers and innovative business models.
				</p>
			</div>

			<div className="w-full aspect-video basis-3/5">
				<iframe
					className="w-full h-full rounded-lg shadow-lg"
					src="https://www.youtube.com/embed/5AvrfIN1HwE"
					title="Africa Minigrids Program - Clean Energy Access"
					allowFullScreen
				/>
			</div>
		</section>

		<section>
			<GlanceSection />
		</section>

		{/* Section 2: Partners */}
		<Partners />

		<section>
			<Footer />
		</section>
    </main>
  );
}
