import { useState } from "react";
import { NewsItem } from "@/app/components/utilities";

const GallerySection = ({ videoNews }: { videoNews: NewsItem[] }) => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);
    const getEmbedUrl = (url?: string) => {
        if (!url) return "";

        if (url.includes("youtube.com/embed/")) return url;

        if (url.includes("youtube.com/watch")) {
            const m = url.match(/[?&]v=([^&]+)/);
            if (m) return `https://www.youtube.com/embed/${m[1]}`;
        }
        if (url.includes("youtu.be/")) {
            const m = url.match(/youtu\.be\/([^?&]+)/);
            if (m) return `https://www.youtube.com/embed/${m[1]}`;
        }
        return url;
    };
    
    return (
        <>
            {/* Featured Videos */}
            <section className="bg-[#0c1b0c] py-10">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-lg font-semibold text-yellow-400 mb-6">
                        Featured videos
                    </h2>

                    <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory">
                    {(videoNews.length ? videoNews : [
                        {
                        id: 1,
                        title: "Stakeholders Proffer Solutions To Enhance Vaccine Storage",
                        date: "30 Sep 2025",
                        image: "/stakeholders.jpg",
                        video: "https://www.youtube.com/embed/CpPLRW1hD00",
                        },
                        {
                        id: 2,
                        title: "Launch of ECOFRIDGES GO online shop",
                        date: "05 Jun 2025",
                        image: "/panelsongrass.jpg",
                        video: "https://www.youtube.com/embed/DarM4Fzr1ck",
                        },
                        {
                        id: 3,
                        title: "Together we can boost Energy Efficiency",
                        date: "26 Sep 2025",
                        image: "/panels.jpg",
                        video: "https://www.youtube.com/embed/uMcIReO7A-w",
                        },
                    ]).map((item) => {
                        const idKey = String(item.id);
                        const isActive = activeVideo === idKey;
                        const embed = getEmbedUrl(item.video);

                        return (
                        <div
                            key={idKey}
                            className="relative flex-shrink-0 snap-start rounded-lg overflow-hidden min-w-[320px] md:min-w-[420px] lg:min-w-[520px] h-72 bg-white shadow-md"
                        >
                            {isActive && embed ? (
                            <iframe
                                className="w-full h-full rounded-lg"
                                src={`${embed}?autoplay=1`}
                                title={item.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                            ) : (
                            <>
                                <img
                                src={item.image || "/cardplaceholder.jpg"}
                                alt={item.title}
                                className="w-full h-full object-cover"
                                />

                                
                                <button
                                onClick={() => setActiveVideo(idKey)}
                                className="absolute bottom-4 left-4 bg-white text-black text-xs font-medium px-4 py-1.5 rounded-full shadow-md hover:bg-gray-100 transition"
                                >
                                ▶ Play Video
                                </button>
                            </>
                            )}
                        </div>
                        );
                    })}
                    </div>
                </div>
            </section>
        </>
    );
}


export default GallerySection;