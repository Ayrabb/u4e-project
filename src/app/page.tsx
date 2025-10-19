"use client";
import Image from "next/image";
import Footer from "./components/footer";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import Navbar from "./components/navbar";
import { Badge, BadgeType } from "./components/utilities";
import { useEffect, useState } from "react";
import Link from "next/link";

interface NewsItem {
  id: number;
  title: string;
  date: string; // ISO string
  category: BadgeType;
  image?: {
	url: string; // main image URL
	formats?: {
	  thumbnail?: string;
	  small?: string;
	  medium?: string;
	  large?: string;
	};
  };
  youtube_link?: string | null;
  description?: DescriptionBlock[]; // array of rich text blocks
  source?: string;
  url?: string;
}

interface DescriptionBlock {
  type: string; // e.g., "paragraph"
  children: DescriptionChild[];
}

interface DescriptionChild {
  type: string; // usually "text"
  text: string;
}

const NewsSection = () => {
	const [news, setNews] = useState<NewsItem[]>([]);
	const [loading, setLoading] = useState(true);

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString("en-GB", {
			day: "numeric",
			month: "short",
			year: "numeric"
		});
	};

	useEffect(() => {
		const fetchNews = async () => {
			setLoading(true)
			const api_url = process.env.NEXT_PUBLIC_API_URL;
			const target = `${api_url}/api/news-items?populate=*`;
			const reqUrl = `/api/proxy?url=${encodeURIComponent(target)}`;
			try {
				const res = await fetch(reqUrl);
				const data = await res.json();
				console.log(data);
				const all_news: NewsItem[] = data.data;
				setNews(all_news.filter((item: NewsItem) => item.category === "news" || item.category === "press"));
			} catch  {
				setNews([]); // fallback
				console.log("An error occurred while fetching news items.")
			} finally {
				setLoading(false)
			}
		};

		const fetchNewsFromLocal = async () => {
			setLoading(true);
			try {
				const local_json = "/api/news";
				const res = await fetch(local_json);
				const data = await res.json();
				const all_news: NewsItem[] = data.data;
				setNews(all_news.filter((item: NewsItem) => item.category === "news" || item.category === "press"));
			}
			catch {
				setNews([]); // fallback
				console.log("An error occurred while fetching news items.")
			}
			finally { setLoading(false)}
		};

		fetchNewsFromLocal();
	}, []);
	
	const sortedNews = [...news].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);

	return (
		<section className="bg-white py-12 px-4 md:px-12 space-y-3 max-w-6xl mx-auto mt-10">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-medium text-[#b59d2a]">Latest updates</h2>
			</div>

			<div className="space-y-8">
				<div className="space-y-8">
				{loading ? (
					// Placeholder loading cards
					[1, 2, 3].map((i) => (
						<article
							key={i}
							className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-8 pb-5 border-b border-gray-200 last:border-b-0 animate-pulse"
						>
							<div className="flex-1 min-w-0 space-y-3">
								<div className="h-4 bg-gray-200 rounded w-24"></div>
								<div className="h-6 bg-gray-200 rounded w-3/4"></div>
								<div className="space-y-2">
									<div className="h-4 bg-gray-200 rounded w-full"></div>
									<div className="h-4 bg-gray-200 rounded w-5/6"></div>
								</div>
								<div className="flex gap-2">
									<div className="h-6 bg-gray-200 rounded w-16"></div>
									<div className="h-6 bg-gray-200 rounded w-24"></div>
								</div>
							</div>
						</article>
					))
				) : (
				sortedNews.map((news) => (
					<article
						key={news.id}
						className="group flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-8 pb-5 border-b border-gray-200 last:border-b-0"
					>
						<div className="flex-1 min-w-0">
							<time className="text-gray-500 text-sm sm:text-md font-medium block">
								{formatDate(news.date)}
							</time>

							<Link href={news.url || "#"} target="_blank" rel="noopener noreferrer">
								<h3 className="text-lg sm:text-xl cursor-pointer mb-2 font-medium text-gray-900 group-hover:text-[#044D28] transition-colors leading-snug">
								{news.title}
								</h3>
							</Link>

						{news.description && (
							<p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 line-clamp-3">
								{news.description?.[0]?.children?.[0]?.text || ""}
							</p>
						)}

							<div className="flex flex-wrap items-center gap-2 sm:gap-3">
								<Badge type={news.category} size="sm" />
								{news.source && (
								<>
									<span className="text-gray-700 hidden sm:inline">•</span>
									<span className="text-sm font-medium text-gray-700">
										{news.source}
									</span>
								</>
								)}
							</div>
						</div>
					</article>
				)))}
				</div>
			</div>

			<div className="w-full text-end">
				<div className="inline-flex flex-col items-end">
					<a
						href="/news?tab=news"
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
	<section className="bg-gray-50 py-12 sm:py-16 md:py-20 px-6 sm:px-8 lg:px-20 border-t border-gray-200 relative">
		<div className="container mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-center mb-12 md:mb-16">
				<div className="flex flex-col items-center space-y-4 sm:space-y-6">
					<h3 className="font-medium text-sm sm:text-base text-gray-600 uppercase tracking-wide">
						Implemented by
					</h3>
					<div className="relative w-48 h-24 sm:w-56 sm:h-28 md:w-64 md:h-32">
						<Image
							src="/main_logo.png"
							alt="Rural Electrification Agency logo"
							fill
							className="object-contain"
						/>
					</div>
					<h3 className="font-medium text-lg sm:text-xl md:text-2xl text-[#044D28]">
						Rural Electrification Agency
					</h3>
				</div>

				<div className="flex flex-col items-center space-y-4 sm:space-y-6">
					<h3 className="font-medium text-sm sm:text-base text-gray-600 uppercase tracking-wide">
						In partnership with
					</h3>
					<div className="relative w-48 h-24 sm:w-56 sm:h-28 md:w-64 md:h-32">
						<Image
						src="/unep_logo.png"
						alt="United Nations Environment Programme logo"
						fill
						className="object-contain"
						/>
					</div>
					<h3 className="font-medium text-lg sm:text-xl md:text-2xl text-[#044D28]">
						United Nations Environment Programme
					</h3>
				</div>
			</div>

			<div className="flex justify-center md:justify-center">
				<a href="/about"
					className="group inline-flex items-center gap-2 px-6 py-3 bg-[#044D28] text-white font-medium rounded-lg hover:bg-[#033d20] transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
				>
					Learn about our partners
					<svg 
						className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
						fill="none" 
						stroke="currentColor" 
						viewBox="0 0 24 24"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</a>
			</div>
		</div>
	</section>
);

const VideoSection = () => (
	<section className="bg-[#01130A] min-h-[80vh] py-10 px-8 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
		<div className="text-left basis-2/5">
			<h2 className="text-2xl md:text-4xl font-medium mb-6 text-[#BFAB25]">
				Advancing Clean Energy Through Off-grid Refrigeration
			</h2>
			<p className="text-md lg:text-lg leading-relaxed text-white">
				The Off-grid Refrigeration Guidelines Pilot Implementation Programme promotes energy-efficient, affordable, and climate-friendly cooling solutions that strengthen food security, healthcare, and rural livelihoods across Nigeria.
			</p>
		</div>

		<div className="w-full aspect-video basis-3/5">
			<iframe
				className="w-full h-full rounded-sm shadow-lg"
				src="https://www.youtube.com/embed/CpPLRW1hD00"
				title="Africa Minigrids Program - Clean Energy Access"
				allowFullScreen
			/>
		</div>
	</section>
);

const GlanceSection = () => (
	<section className="bg-white py-16 px-6 md:px-20 max-w-7xl mx-auto">
		{/* Header */}
		<h2 className="text-3xl md:text-4xl font-medium text-[#BFAB25] text-center md:text-left mb-10 leading-snug">
			Empowering Rural Communities with Sustainable Cooling Solutions
		</h2>

		{/* Content with Wrapped Image */}
		<div className="relative text-gray-700 text-base md:text-lg leading-relaxed">
			{/* Floating Image (on the right for desktop) */}
			<div className="float-none md:float-right md:ml-8 mb-6 md:mb-4 w-full md:w-[45%] relative h-64 sm:h-80 md:h-[300px] rounded-xs overflow-hidden shadow-lg">
				<Image
					src="/home.jpg"
					alt="U4E Nigeria event"
					fill
					className="object-cover object-center"
					priority
				/>
			</div>

			{/* Paragraphs wrapping around the image */}
			<p className="mb-4">
				The <span className="font-semibold">United for Efficiency (U4E)</span> initiative, led by the{" "}
				<span className="font-semibold">United Nations Environment Programme (UNEP)</span>, partners with the{" "}
				<span className="font-semibold">Rural Electrification Agency (REA)</span> to accelerate the adoption
				of energy-efficient and climate-friendly technologies in Nigeria.
			</p>

			<p className="mb-4">
				Through the{" "}
				<span className="font-semibold">Off-grid Refrigeration Guidelines Pilot Implementation Programme</span>,
				this collaboration introduces sustainable cooling systems to rural and underserved communities—improving
				food security, healthcare, and local economic development.
			</p>

			<p className="mb-4">
				The programme also strengthens Nigeria&lsquo;s clean energy transition and supports key{" "}
				<span className="font-semibold">Sustainable Development Goals</span>, including{" "}
				<span className="italic">Affordable and Clean Energy</span>,{" "}
				<span className="italic">Responsible Consumption and Production</span>, and{" "}
				<span className="italic">Climate Action</span>.
			</p>

			<p>
				Together, UNEP and REA are demonstrating how innovation, forward-thinking policy, and community engagement
				can empower rural areas with modern, sustainable energy solutions that improve lives and protect the planet.
			</p>
		</div>
	</section>
);

const HeroSection = () => (
	<section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[95vh] flex items-center justify-start px-5 sm:px-8 lg:px-12 bg-black text-white overflow-hidden">
		<Image
			src="/hero-image2.jpg"
			alt="Off-grid refrigeration programme"
			fill
			priority
			quality={85}
			className="object-cover object-center"
			sizes="100vw"
		/>

		{/* Overlay */}
		<div className="absolute inset-0 bg-black/26 z-[1]"></div>

		<div className="py-8 md:py-12 relative z-10 items-end h-full">
			<div className="flex flex-col h-full w-full justify-end">
				<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4 md:mb-6">
					The Off-grid Refrigeration Guidelines Pilot Implementation Programme
				</h1>
				<p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed">
					Catalyzing the widespread adoption and deployment of energy-efficient off-grid refrigeration solutions.
				</p>
			</div>
		</div>
	</section>
);

export default function Home() {
  return (
	<main className="min-h-screen font-montserrat bg-white">
		<Navbar />

		{/* Hero Section */}
		<HeroSection />

		<section>
			<GlanceSection />
		</section>
		<VideoSection />
		<NewsSection />
		<Partners />
		
		<Footer />
    </main>
  );
}