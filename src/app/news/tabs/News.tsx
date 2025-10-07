import { NewsItem } from "@/app/components/utilities";
import Image from "next/image";
import { Badge } from "@/app/components/utilities";
import Link from "next/link";
import { useEffect } from "react";

const newsList: NewsItem[] = [
  {
    id: 2,
    title: "Energy efficiency drives sustainable growth in Nigerian cities",
    description:
      "Local governments adopt measures to reduce energy waste and improve sustainability.",
    date: "2025-09-20",
    category: "news",
    url: "/news/energy-efficiency-drives-growth",
  },
  {
    id: 1,
    title:
      "Invitation For Prequalification For The Africa Minigrids Program Grant For Pilot Minigrids in Rural Communities And Agricultural Value The U4E initiative in Nigeria",
    description:
      "The U4E initiative in Nigeria has introduced new policies to improve efficiency in household appliances.",
    date: "2025-09-28",
    category: "press",
    url: "/news/nigeria-launches-energy-efficient-appliance-program",
    image: "/event.jpg",
  },
  {
    id: 3,
    title: "The Guardian reports on Nigeria's shift to efficient cooling",
    description:
      "International media highlights Nigeria’s progress in adopting energy-efficient air conditioners.",
    date: "2025-09-12",
    category: "news",
    source: "The Guardian",
    url: "https://www.theguardian.com/environment/nigeria-cooling-efficiency",
  },
  {
    id: 4,
    title: "Stakeholders endorse new efficiency standards",
    description:
      "Key stakeholders across Nigeria have voiced support for the adoption of new energy efficiency standards.",
    date: "2025-08-25",
    category: "news",
    url: "/news/stakeholders-endorse-standards",
  },
  {
    id: 5,
    title: "UNEP and partners release updated efficiency report",
    description:
      "The report outlines pathways for Nigeria to meet its energy savings and sustainability targets.",
    date: "2025-07-15",
    category: "video",
    youtube_link: "https://www.youtube.com/embed/CpPLRW1hD00",
    url: "/news/unep-partners-release-efficiency-report",
  },
];

const FeaturedSection = () => {
	const featured = newsList[0];

  return (
    <section className="w-full pt-10 px-4 sm:px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-13 gap-6 items-start">
        {/* Left Featured News */}
        <div className="col-span-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <p className="text-gray-600 font-medium text-sm sm:text-base">
                14 Dec 2022
              </p>
              <Badge type={featured.category} />
            </div>

            <h2 className="text-lg sm:text-2xl font-medium text-black hover:text-[#044D28] cursor-pointer leading-snug">
              {featured.title}
            </h2>
          </div>

          {/* Center Image */}
          <div className="md:col-span-2 mt-4 md:mt-0">
            <Image
              src="/panelsongrass.jpg"
              alt="Featured news"
              className="w-full h-auto rounded-lg object-cover"
              width={500}
              height={400}
              priority
            />
          </div>
        </div>

        {/* Right News List */}
        <div className="col-span-3 mt-8 lg:mt-0 lg:border-s border-gray-300 lg:ps-6 space-y-6">
          {newsList.slice(1, 4).map((news, idx) => (
            <div
              key={idx}
              className="pb-4 border-b border-gray-200 space-y-2 last:border-b-0"
            >
              <div className="flex justify-between items-center">
                <time className="text-gray-600 text-sm sm:text-base font-medium">
                  {new Date(news.date).toLocaleDateString("en-UK", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <Badge type={news.category} />
              </div>

              <h2 className="text-base sm:text-lg font-medium text-black line-clamp-2 hover:text-[#044D28] cursor-pointer">
                {news.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface AllNewsProps {
  newsList: NewsItem[];
}

const AllNews = ({ newsList }: AllNewsProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric",
    });
  };

  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
      {/* Section Header */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#BFAB25] mb-8">
        All news
      </h2>

      {/* News List */}
      <div className="space-y-8">
        {newsList.map((news) => (
          <article
            key={news.id}
            className="group flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-8 pb-5 border-b border-gray-200 last:border-b-0"
          >
            <div className="flex-1 min-w-0">
              <time className="text-gray-500 text-sm sm:text-md font-medium block">
                {formatDate(news.date)}
              </time>

              <Link href={news.url || "#"}>
                <h3 className="text-lg sm:text-xl cursor-pointer mb-2 font-medium text-gray-900 group-hover:text-[#044D28] transition-colors leading-snug">
                  {news.title}
                </h3>
              </Link>

              {news.description && (
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 line-clamp-3">
                  {news.description}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <Badge type={news.category} size="sm" />
                {news.source && (
                  <>
                    <span className="text-gray-300 hidden sm:inline">•</span>
                    <span className="text-sm font-medium text-gray-500">
                      {news.source}
                    </span>
                  </>
                )}
              </div>
            </div>
          </article>
        ))}

        {/* Empty State */}
        {newsList.length === 0 && (
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
    </section>
  );
};

const NewsSection = ({ newsItems }: { newsItems: NewsItem[] }) => {
	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString("en-GB", {
			day: "numeric",
			month: "short",
			year: "numeric",
		});
	};

	useEffect(() => {
		if (newsItems.length === 0) return;
		console.log("news", newsItems);
	}, [newsItems]);

	return (
		<section className="space-y-16">
			{/* <FeaturedSection /> */}
			{/* <AllNews newsList={newsItems} /> */}

			<section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
				<h2 className="text-2xl sm:text-3xl font-medium text-[#BFAB25] mb-8">
					All news
				</h2>

				{/* News List */}
				<div className="space-y-8">
					{newsItems.map((news) => (
					<article
						key={news.id}
						className="group flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-8 pb-5 border-b border-gray-200 last:border-b-0"
					>
						<div className="flex-1 min-w-0">
							<time className="text-gray-500 text-sm sm:text-md font-medium block">
								{formatDate(news.date)}
							</time>

							<Link href={news.url || "#"}>
								<h3 className="text-lg sm:text-xl cursor-pointer mb-2 font-medium text-gray-900 group-hover:text-[#044D28] transition-colors leading-snug">
								{news.title}
								</h3>
							</Link>

						{/* {news.description && (
							<p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 line-clamp-3">
							{news.description}
							</p>
						)} */}

							<div className="flex flex-wrap items-center gap-2 sm:gap-3">
								<Badge type={news.category} size="sm" />
								{news.source && (
								<>
									<span className="text-gray-300 hidden sm:inline">•</span>
									<span className="text-sm font-medium text-gray-500">
									{news.source}
									</span>
								</>
								)}
							</div>
						</div>
					</article>
					))}

					{/* Empty State */}
					{newsItems.length === 0 && (
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
				</section>
		</section>
	);
};

export default NewsSection;
