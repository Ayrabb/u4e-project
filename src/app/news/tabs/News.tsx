// import { NewsItem } from "@/app/components/utilities";
import { Badge, BadgeType } from "@/app/components/utilities";
import Link from "next/link";
import { useEffect, useState } from "react";

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
			setLoading(true);
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
				setLoading(false);
			}
		};

		fetchNews();
	}, []);

	useEffect(() => {
		if (news.length === 0) return;
		console.log("news", news);
	}, [news]);

	const sortedNews = [...news].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);

	if(loading) return (<></>)

	return (
		<section className="space-y-16">
			{/* <FeaturedSection /> */}
			{/* <AllNews newsList={newsItems} /> */}

			<div className="bg-white mx-auto max-w-6xl py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
				<h2 className="text-2xl sm:text-3xl font-medium text-[#BFAB25] mb-8">
					All news
				</h2>

				{/* News List */}
				<div className="space-y-8">
					{sortedNews.map((news) => (
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
					))}

					{/* Empty State */}
					{news.length === 0 && (
					<div className="text-center py-16">
						<div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
							<svg
								className="w-8 h-8 text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
								/>
							</svg>
						</div>
						<h3 className="text-lg font-semibold text-gray-900 mb-2">
							No news available
						</h3>
						<p className="text-gray-600">Check back later for updates</p>
					</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default NewsSection;
