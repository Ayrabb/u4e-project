import { NewsItem } from "@/app/components/utilities";
import Image from "next/image";
import { Badge } from "@/app/components/utilities"
import Link from "next/link";
    
const newsList: NewsItem[] = [
	{
		id: 2,
		title: "Energy efficiency drives sustainable growth in Nigerian cities",
		description: "Local governments adopt measures to reduce energy waste and improve sustainability.",
		date: "2025-09-20",
		category: "news",
		url: "/news/energy-efficiency-drives-growth"
	},
    {
		id: 1,
		title: "Invitation For Prequalification For The Africa Minigrids Program Grant For Pilot Minigrids in Rural Communities And Agricultural Value The U4E initiative in Nigeria The U4E initiative in Nigeria The U4E initiative in Nigeria",
		description: "The U4E initiative in Nigeria has introduced new policies to improve efficiency in household appliances.",
		date: "2025-09-28",
		category: "press",
		url: "/news/nigeria-launches-energy-efficient-appliance-program",
		image: "/event.jpg"
	},
	{
		id: 3,
		title: "The Guardian reports on Nigeria's shift to efficient cooling",
		description: "International media highlights Nigeria’s progress in adopting energy-efficient air conditioners.",
		date: "2025-09-12",
		category: "external",
		source: "The Guardian",
		url: "https://www.theguardian.com/environment/nigeria-cooling-efficiency"
	},
	{
		id: 4,
		title: "Stakeholders endorse new efficiency standards",
		description: "Key stakeholders across Nigeria have voiced support for the adoption of new energy efficiency standards.",
		date: "2025-08-25",
		category: "news",
		url: "/news/stakeholders-endorse-standards"
	},
	{
		id: 5,
		title: "UNEP and partners release updated efficiency report",
		description: "The report outlines pathways for Nigeria to meet its energy savings and sustainability targets.",
		date: "2025-07-15",
		category: "video",
        video: "https://www.youtube.com/embed/CpPLRW1hD00",
		url: "/news/unep-partners-release-efficiency-report"
	}
];

const FeaturedSection = () => {
    const featured = newsList[0];

    return (
        <section className="min-w-screen pt-10">
            <div className="mx-10 grid grid-cols-1 lg:grid-cols-13 gap-3 items-start">
                {/* Left Featured News */}
                <div className="col-span-10 grid grid-cols-3">
                    <div className="me-3 space-y-2">
                        <div className="grid grid-cols-2">
                            <p className="text-gray-600 font-medium text-lg">14 Dec 2022</p>
                            <div className="text-end">
                                <Badge type={featured.category} />
                            </div>
                        </div>

                        <h2 className="text-2xl font-medium text-black hover:text-[#044D28] cursor-pointer">
                            {featured.title}
                        </h2>
                    </div>

                    {/* Center Image */}
                    <div className="col-span-2">
                        <Image
                            src="/panelsongrass.jpg"
                            alt="Featured news"
                            className="w-full h-auto object-cover"
                            width={500}
                            height={500}
                            priority
                        />
                    </div>
                </div>

                {/* Right News List */}
                <div className="col-span-3 space-y-6 h-full border-s border-gray-300">
                    { newsList.slice(1, 4).map((news, idx) => (
                        <div key={idx} 
                            className="ms-4 pb-4 border-b border-gray-300 space-y-2"
                        >
                            <div className="grid grid-cols-2">
                                <time className="text-gray-600 font-medium text-md">
                                    {new Date(news.date).toLocaleDateString('en-UK', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric'
                                    })}
                                </time>
                                <div className="text-end">
                                    <Badge type={news.category} />
                                </div>
                            </div>

                            <h2 className="text-lg font-medium text-black line-clamp-2 hover:text-[#044D28] cursor-pointer">
                                {news.title}
                            </h2>
                        </div>
                    )) }
                </div>
            </div>
        </section>
    );
}

interface AllNewsProps {
  newsList: NewsItem[];
}

const AllNews = ({ newsList }: AllNewsProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <section className="bg-white py-16">
        <div className="mx-50 justify-center px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <h2 className="text-3xl font-medium text-[#BFAB25] mb-8">
                All news
            </h2>

            {/* News List */}
            <div className="space-y-8">
            {newsList.map((news) => (
                <article 
                    key={news.id}
                    className="group flex items-start justify-between gap-8 pb-5 border-b border-gray-200 last:border-b-0"
                >
                    {/* Content Section */}
                    <div className="flex-1 min-w-0">
                        {/* Date */}
                        <time className="text-gray-500 text-md font-medium block">
                            {formatDate(news.date)}
                        </time>

                        {/* Title */}
                        <Link href={news.url || '#'}>
                            <h3 className="text-xl cursor-pointer mb-2 font-medium text-gray-900 group-hover:text-[#044D28] transition-colors leading-tight">
                                {news.title}
                            </h3>
                        </Link>

                        {/* Description */}
                        {news.description && (
                        <p className="text-gray-600 text-base leading-relaxed mb-4 line-clamp-3">
                            {news.description}
                        </p>
                        )}

                        {/* Badge and Source */}
                        <div className="flex items-center gap-3">
                            <Badge type={news.category} size="sm" />
                            {news.source && (
                                <>
                                <span className="text-gray-300">•</span>
                                    <span className="text-sm font-medium text-gray-500">
                                        {news.source}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                </article>
            ))}
            </div>

            {/* Empty State */}
            {newsList.length === 0 && (
                <div className="text-center py-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No news available</h3>
                    <p className="text-gray-600">Check back later for updates</p>
                </div>
            )}
        </div>
    </section>
  );
};

const NewsSection = () => {
	return (
		<section className="space-y-20">
			{/* Featured News Section */}
			<FeaturedSection />

			{/* All Media Updates */}
			<AllNews newsList={newsList}/>
		</section>
	);
}

export default NewsSection;