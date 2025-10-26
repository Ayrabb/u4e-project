import { Badge } from "@/app/components/utilities";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { useEffect, useState } from "react";

const NewsSection = () => {
	const [news, setNews] = useState<SanityDocument[]>([]);
	const [loading, setLoading] = useState(true);

    const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString("en-GB", {
			day: "numeric",
			month: "short",
			year: "numeric"
      });
    };

	useEffect(() => {
		const fetchFromSanity = async () => {
			const ALL_NEWS_QUERY = `*[_type == "news"] | order(date desc) {
				_id,
				title,
				description,
				date,
				category,
				url,
				source,
				youtube_link,
				"imageUrl": image.asset->url
				}`;
	
			setLoading(true);
			try {
				const sanity_news = await client.fetch<SanityDocument[]>(ALL_NEWS_QUERY, {});
				console.log(sanity_news)
				setNews(sanity_news);
			}
			catch {
				setNews([]); // fallback
				console.log("An error occurred while fetching news items.")
			}
			finally { setLoading(false)}
		}

		fetchFromSanity();
	}, []);

	const sortedNews = [...news].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);

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
				) : (sortedNews.map((news, idx) => (
					<article
						key={idx}
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
								{news.description || ""}
								</p>
							)}

							<div className="flex flex-wrap items-center gap-2 sm:gap-3">
								<Badge type={news.category} size="sm" />
								{news.source && (
								<>
									<span className="text-gray-700 hidden sm:inline">•</span>
									<span className="text-sm font-medium text-gray-700">{news.source}</span>
								</>
								)}
							</div>
						</div>
					</article>
					))
				)}
				</div>
			</div>
		</section>
	);
};

export default NewsSection;
