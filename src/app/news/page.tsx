"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import NewsSection from "./tabs/News";
import GallerySection from "./tabs/Gallery";
import { NewsItem } from "../components/utilities";

const HeroSection = ({ active, changeTab } : { active: string, changeTab: (tab: string) => void }) => {
	const sections = [
		{
			label: "News",
			tab: '/news'
		},
		{
			label: "Gallery",
			tab: '/gallery'
		}
	]

	return (
		<section 
			className="min-h-42 mt-[var(--navbar-height)] bg-gradient-to-b from-[#044D28] from-28% via-[#078042] via-86% to-[#099A4F] to-100% flex items-end"
		>
			<div className="flex flex-col h-full w-full space-y-4">
				<div className="flex flex-col text-white mx-20">
					<h2 className="text-5xl font-medium">News center</h2>
					<p className="text-gray-300 text-lg text-base leading-relaxed max-w-3xl">
						Stay updated with the latest updates, stories and press releases from
						U4E Nigeria.
					</p>
				</div>

				<div className="border-t border-white/40 w-full pt-1">
					<div className="flex flex-row mx-20 text-white space-x-3">
					{sections.map((section, idx) => (
						<nav 
							key={idx}
							onClick={() => changeTab(section.tab)}
							className="flex flex-col"
						>
							<p className={`text-md cursor-pointer ${active === section.tab ? "font-semibold" : "font-medium"}`}>{section.label}</p>
							<div className={`w-full bg-white ${active === section.tab ? "h-[3px]" : "h-[0]"}`} />
						</nav>
					))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default function NewsPage() {
	const [news, setNews] = useState<NewsItem[]>([]);
	const sections = [
		{
			label: "News",
			tab: '/news'
		},
		{
			label: "Gallery",
			tab: '/gallery'
		}
	];
	const [activeTab, setActiveTab] = useState(sections[1].tab);

	useEffect(() => {
		async function fetchNews() {
		const res = await fetch("/api/news");
		if (res.ok) {
			const data = await res.json();
			setNews(data);
		}
		}
		fetchNews();
	}, []);

	const imageNews = news.filter((item) => item.image);
	const videoNews = news.filter((item) => item.video);

	return (
		<main className="min-h-screen bg-white font-montserrat">
			<Navbar />

			{/* Hero Section */}
			<HeroSection active={activeTab} changeTab={setActiveTab} />

			{activeTab === "/news" && (<NewsSection />)}

			{activeTab === "/gallery" && (<GallerySection />)}

			<Footer />
		</main>
	);
}
