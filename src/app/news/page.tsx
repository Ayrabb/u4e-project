"use client";
import { useEffect, useState, Suspense } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import NewsSection from "./tabs/News";
import GallerySection from "./tabs/Gallery";
import VideoSection from "./tabs/Videos";
import { NewsItem } from "../components/utilities";
import { useRouter, useSearchParams } from "next/navigation";

type Section = {
  label: string;
  tab: string;
};

const HeroSection = ({ active, changeTab, sections } : { active: string, changeTab: (tab: string) => void, sections: Section[] }) => {

	return (
		<section 
			className="lg:min-h-64 min-h-42 mt-[var(--navbar-height)] bg-gradient-to-b from-[#044D28] from-28% via-[#078042] via-86% to-[#099A4F] to-100% flex items-end"
		>
			<div className="flex flex-col h-full w-full space-y-4">
				<div className="flex flex-col text-white mx-10 lg:mx-20">
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">News center</h2>
					<p className="text-gray-300 text-sm md:text-xl text-base leading-relaxed max-w-3xl">
						Stay updated with the latest updates, stories and press releases from
						U4E Nigeria.
					</p>
				</div>

				<div className="border-t border-white/40 w-full pt-1">
					<div className="flex flex-row mx-10 lg:mx-20 text-white space-x-3">
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

const Tabs = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const querytab = searchParams.get("tab") || "news";
	const sections = [
		{
			label: "News",
			tab: 'news'
		},
		{
			label: "Gallery",
			tab: 'gallery'
		},
		{
			label: "Videos",
			tab: 'videos'
		}
	];
	const [activeTab, setActiveTab] = useState(querytab || sections[0].tab);

	useEffect(() => {
		setActiveTab(querytab);
	}, [querytab]);

	const handleTabChange = (tab: string) => {
		setActiveTab(tab);
		router.push(`/news?tab=${tab}`, { scroll: false });
	};

	return (
		<>
			<HeroSection active={activeTab} changeTab={handleTabChange} sections={sections}/>

			<div className="pb-6">
				{activeTab === "news" && (<NewsSection />)}

				{activeTab === "gallery" && (<GallerySection />)}

				{activeTab === "videos" && (<VideoSection />)}
			</div>
		</>
	);
};

export default function NewsPage() {
	const [news, setNews] = useState<NewsItem[]>([]);

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

			<Suspense fallback={<div>Loading...</div>}>
				<Tabs />
			</Suspense>

			<Footer />
		</main>
	);
}
