import React from "react";
import { NewsItem } from "@/app/components/utilities";
import { Badge } from "@/app/components/utilities";
import Image from "next/image";
import Link from "next/link";

const newsList: NewsItem[] = [
    {
		id: 1,
		title: "Invitation For Prequalification For The Africa Minigrids Program Grant For Pilot Minigrids in Rural Communities And Agricultural Value The U4E initiative in Nigeria The U4E initiative in Nigeria The U4E initiative in Nigeria",
		description: "The U4E initiative in Nigeria has introduced new policies to improve efficiency in household appliances.",
		date: "2025-09-28",
		category: "press",
		url: "/news/nigeria-launches-energy-efficient-appliance-program",
		image: "/event.jpg",
	},
	{
		id: 4,
		title: "Stakeholders endorse new efficiency standards",
		description: "Key stakeholders across Nigeria have voiced support for the adoption of new energy efficiency standards.",
		date: "2025-08-25",
		category: "news",
		url: "/news/stakeholders-endorse-standards",
        image: "/men-talking.jpg",
	},
	{
		id: 5,
		title: "UNEP and partners release updated efficiency report",
		description: "The report outlines pathways for Nigeria to meet its energy savings and sustainability targets.",
		date: "2025-07-15",
		category: "news",
		url: "/news/unep-partners-release-efficiency-report",
        image: "/event.jpg",
	}
];

const GallerySection = () => {

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString('en-GB', {
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		});
	};

	return (
		<section className="bg-white py-16">
			<div className="max-w-7xl mx-auto pb-6 px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="mb-6">
					<h2 className="text-3xl font-medium text-[#BFAB25] mb-8">
						Photo news
					</h2>
				</div>

				{/* Gallery Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{newsList.map((news) => (
						<article
							key={news.id}
							className="group relative cursor-pointer bg-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
						>
							{/* Image */}
							<div className="relative aspect-[4/3] overflow-hidden">
								<Image
									src={news.image || "/cardplaceholder.jpg"}
									alt={news.title}
									fill
									className="object-cover group-hover:scale-110 transition-transform duration-500"
									sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
								/>
														
								{/* Badge */}
								<div className="absolute top-4 left-4 z-10">
									<Badge type={news.category} size="sm" />
								</div>
							</div>

							{/* Content */}
							<Link href={news.url || '#'} className="block p-5">
								<time className="text-gray-500 text-md font-medium block">
									{formatDate(news.date)}
								</time>
								
								<h3 className="text-black text-lg font-medium mb-2 line-clamp-2 group-hover:text-[#044D28] transition-colors leading-tight">
									{news.title}
								</h3>

							{news.description && (
								<p className="text-gray-600 text-sm line-clamp-2">
									{news.description}
								</p>
							)}
							</Link>
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No photos available</h3>
                    <p className="text-gray-600">Check back later for updates</p>
					</div>
				)}
			</div>
		</section>
	);
};

export default GallerySection;