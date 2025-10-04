import React from "react";
import { NewsItem } from "@/app/components/utilities";

const newsList: NewsItem[] = [
    {
		id: 1,
		title: "Invitation For Prequalification For The Africa Minigrids Program Grant For Pilot Minigrids in Rural Communities And Agricultural Value The U4E initiative in Nigeria The U4E initiative in Nigeria The U4E initiative in Nigeria",
		description: "The U4E initiative in Nigeria has introduced new policies to improve efficiency in household appliances.",
		date: "2025-09-28",
		category: "press",
		url: "/news/nigeria-launches-energy-efficient-appliance-program",
		image: "/event.jpg",
        video: "https://www.youtube.com/embed/CpPLRW1hD00"
	},
	{
		id: 4,
		title: "Stakeholders endorse new efficiency standards",
		description: "Key stakeholders across Nigeria have voiced support for the adoption of new energy efficiency standards.",
		date: "2025-08-25",
		category: "news",
		url: "/news/stakeholders-endorse-standards",
        image: "/men-talking.jpg",
        video: "https://www.youtube.com/embed/CpPLRW1hD00"
	},
	{
		id: 5,
		title: "UNEP and partners release updated efficiency report",
		description: "The report outlines pathways for Nigeria to meet its energy savings and sustainability targets.",
		date: "2025-07-15",
		category: "news",
		url: "/news/unep-partners-release-efficiency-report",
        image: "/event.jpg",
        video: "https://www.youtube.com/embed/CpPLRW1hD00"
	}
];

const VideoSection = () => {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl pb-6 mx-50 px-4 sm:px-6 lg:px-8">
                {/* Video List */}
                <div className="">
                    {newsList.map((video) => (
                        <article
                            key={video.id}
                            className="group border-b border-gray-200 py-12"
                        >
                            {/* Title */}
                            <h2 className="text-2xl font-medium text-gray-900 mb-2 leading-tight">
                                {video.title}
                            </h2>

                            {/* Date */}
                            <time className="text-gray-500 text-base font-normal block">
                                {formatDate(video.date)}
                            </time>

                            {/* Description */}
                            {video.description && (
                            <p className="text-gray-600 text-base leading-relaxed mb-4 max-w-4xl">
                                {video.description}
                            </p>
                            )}

                            {/* Video Player */}
                            <div className="relative aspect-video w-full bg-black rounded-lg overflow-hidden shadow-lg">
                                {video.video && (video.video.includes('youtube.com') || video.video.includes('youtu.be')) && (
                                    <iframe
                                        src={video.video}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                    />
                                )}
                            </div>
                        </article>
                    ))}
                </div>

                {/* Empty State */}
                {newsList.length === 0 && (
                    <div className="text-center py-16">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">No videos available</h3>
                        <p className="text-gray-600">Check back later for video updates</p>
                    </div>
                )}
                </div>
        </section>
    );
};

export default VideoSection;