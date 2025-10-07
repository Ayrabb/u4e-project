"use client";
import { Suspense, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import NewsSection from "./tabs/News";
import GallerySection from "./tabs/Gallery";
import VideoSection from "./tabs/Videos";
import { NewsItem } from "../components/utilities";
import { useSearchParams, useRouter } from 'next/navigation'

type Section = {
  label: string;
  tab: string;
};

const HeroSection = ({ active, changeTab, sections } : { active: string, changeTab: (tab: string) => void, sections: Section[] }) => {

	return (
		<section 
			className="min-h-42 mt-[var(--navbar-height)] bg-gradient-to-b from-[#044D28] from-28% via-[#078042] via-86% to-[#099A4F] to-100% flex items-end"
		>
			<div className="flex flex-col h-full w-full space-y-4">
				<div className="flex flex-col text-white px-5 sm:px-10 md:px-16 lg:px-20">
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">News center</h2>
					<p className="text-gray-300 text-base sm:text-sm md:text-lg text-base leading-relaxed max-w-3xl">
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

const Tabs = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const [allNews, setAllNews] = useState<NewsItem[]>([]);
	const [news, setNews] = useState<NewsItem[]>([]);
	const [imageNews, setImageNews] = useState<NewsItem[]>([]);
	const [videoNews, setVideoNews] = useState<NewsItem[]>([]);

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
	const [activeTab, setActiveTab] = useState(searchParams.get('tab') || sections[0].tab);

	const handleTabChange = (tab: string) => {
		setActiveTab(tab);
		router.push(`/news?tab=${tab}`);
	};

	useEffect(() => {
		const fetchNews = async () => {
			const api_url = process.env.NEXT_PUBLIC_API_URL;console.log(api_url);
			// const req_url = `${api_url}/api/news-items`;
			const req_url = `https://frilly-minna-favoringly.ngrok-free.dev/api/news-items`;
			try {
				const res = await fetch("/api/proxy");
				const data = await res.json();
				console.log(data);
				setAllNews(data.data);
				} catch  {
					setAllNews([]); // fallback
				}
			};

		fetchNews();
	}, []);

	useEffect(() => {
		console.log(allNews);
		if(allNews.length > 0){
			setNews(allNews.filter(item => item.category === "news" || item.category === "press"));
			setImageNews(allNews.filter(item => item.category === "gallery"));
			setVideoNews(allNews.filter(item => item.category === "video"));
		}
	}, [allNews]);

	return (
		<>
			<HeroSection active={activeTab} changeTab={handleTabChange} sections={sections}/>

			<div className="pb-6">
				{activeTab === "news" && (<NewsSection newsItems={news}/>)}

				{activeTab === "gallery" && (<GallerySection />)}

				{activeTab === "videos" && (<VideoSection />)}
			</div>
		</>
	);
};

export default function NewsPage() {

	return (
		<main className="min-h-screen bg-white font-montserrat">
			<Navbar />

			{/* Hero Section */}
			<Suspense fallback={<div>Loading...</div>}>
				<Tabs />
			</Suspense>

			<Footer />
		</main>
	);
}
