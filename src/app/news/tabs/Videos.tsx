import React, { useEffect, useState } from "react";
import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const VideoSection = () => {
	const [videos, setVideos] = useState<SanityDocument[]>([]);
	const [loading, setLoading] = useState(true);
	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString("en-GB", {
			day: "numeric",
			month: "short",
			year: "numeric",
		});
	};

	const sortedVideos = [...videos].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);
	const totalVideos = sortedVideos.length;

	useEffect(() => {
		const fetchFromSanity = async () => {
			const ALL_VIDEOS_QUERY = `*[_type == "video"] | order(date desc) {
				_id,
				title,
				description,
				date,
				youtube_link
				}`;

			setLoading(true);
			try {
				const sanity_videos = await client.fetch<SanityDocument[]>(ALL_VIDEOS_QUERY, {});
				setVideos(sanity_videos);
			}
			catch {
				setVideos([]); // fallback
				console.log("An error occurred while fetching videos.")
			}
			finally { setLoading(false) }
		}

		fetchFromSanity();
	}, []);

	return (
		<section className="bg-white py-16">
			<div className="max-w-7xl pb-6 mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mb-6">
					<h2 className="text-2xl sm:text-3xl font-medium text-[#BFAB25]">
						All Videos
					</h2>
					<p className="text-sm text-gray-500 mt-1">{totalVideos} videos</p>
				</div>
				{/* Video List */}
				{loading ? (
					<div className="grid gap-8">
						{[...Array(3)].map((_, idx) => (
							<div
								key={idx}
								className="border-b border-gray-200 py-12 animate-pulse"
							>
								<div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
								<div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
								<div className="h-64 bg-gray-300 rounded"></div>
							</div>
						))}
					</div>
				) : (
					<div>
						{sortedVideos.map((video, idx) => (
							<article key={idx} className="group border-b border-gray-200 py-12">
								{/* Title */}
								<h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium text-gray-900 mb-2 leading-tight">
									{video.title}
								</h2>

								{/* Date */}
								<time className="text-gray-500 text-base font-normal block">
									{formatDate(video.date)}
								</time>

								{/* Description */}
								{video.description && (
									<p className="text-sm sm:text-base md:text-base text-gray-600 leading-relaxed mb-4 max-w-4xl">
										{video.description}
									</p>
								)}

								{/* Video Player */}
								<div className="relative aspect-video w-full bg-black rounded-lg overflow-hidden shadow-lg">
									{video.youtube_link &&
										(video.youtube_link.includes("youtube.com") ||
											video.youtube_link.includes("youtu.be")) && (
											<iframe
												src={video.youtube_link}
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
				)}

				{/* Empty State */}
				{!loading && videos.length === 0 && (
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
									d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<h3 className="text-lg font-semibold text-gray-900 mb-2">
							No videos available
						</h3>
						<p className="text-gray-600">Check back later for video updates</p>
					</div>
				)}
			</div>
		</section>
	);
};

export default VideoSection;
