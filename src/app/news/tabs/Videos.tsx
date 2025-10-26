import React from "react";
import { NewsItem } from "@/app/components/utilities";

const newsList: NewsItem[] = [
  {
    id: 1,
    title: "REA, UNEP Launch Off-Grid Refrigeration Initiative",
    description:
      "The Off-grid Refrigeration Guidelines Pilot Implementation Programme promotes energy-efficient, affordable, and climate-friendly cooling solutions that strengthen food security, healthcare, and rural livelihoods across Nigeria.",
    date: "2025-09-28",
    category: "press",
    url: "https://youtu.be/DZuPmWmX96c?si=X6S_w9kFuGOystLc",
    image: "/event.jpg",
    youtube_link: "https://www.youtube.com/embed/DZuPmWmX96c",
  },
  {
    id: 2,
    title: "REA’s Off-Grid Refrigeration Programme (ORGPIP)",
    description:
      "The Rural Electrification Agency (REA) hosted the Inception Workshop for the Off-Grid Refrigeration Programme (ORGPIP) — a key step toward promoting energy-efficient and climate-friendly cooling in Nigeria’s rural communities.",
    date: "2025-10-15",
    category: "news",
    url: "https://www.youtube.com/embed/1mHfqrEzJWk",
    image: "/offgrid_refrigeration.jpg",
    youtube_link: "https://www.youtube.com/embed/1mHfqrEzJWk",
  },
  {
    id: 3,
    title: "Stakeholders Proffer Solutions to Enhance Vaccine Storage",
    description:
      "Stakeholders in Abuja proffered solutions to enhance vaccine storage for humans and animals through off-grid refrigeration.",
    date: "2025-09-28",
    category: "press",
    url: "/news/nigeria-launches-energy-efficient-appliance-program",
    image: "/event.jpg",
    youtube_link: "https://www.youtube.com/embed/CpPLRW1hD00",
  },
  {
    id: 4,
    title: "Benefits Of The REA UNEP Off-Grid Refrigeration Pilot Program",
    description:
      "Project manager discusses the advantages and expected impacts of the REA-UNEP off-grid refrigeration pilot program, in advancing energy access, food security, and sustainable cooling solutions in underserved communities.",
    date: "2025-10-15",
    category: "news",
    url: "https://www.youtube.com/watch?v=9gvETMDFVOQ",
    image: "/offgrid_refrigeration.jpg",
    youtube_link: "https://www.youtube.com/embed/9gvETMDFVOQ",
  },
];

const VideoSection = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

 
  const sortedVideos = [...newsList].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );


  const totalVideos = sortedVideos.length;

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
        <div>
          {sortedVideos.map((video) => (
            <article
              key={video.id}
              className="group border-b border-gray-200 py-12"
            >
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
