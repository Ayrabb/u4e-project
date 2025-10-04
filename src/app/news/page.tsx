"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  image?: string;
  video?: string;
  description?: string;
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNews() {
      const res = await fetch("/api/news");
      if (res.ok) {
        const data = await res.json();
        setNews(data);
      }
    }
    fetchNews();
  }, []);

  const imageNews = news.filter((item) => item.image);
  const videoNews = news.filter((item) => item.video);

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
    <main className="min-h-screen font-montserrat">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#004225] to-[#0c6a34] py-12 px-4 md:px-12">
        <h1 className="text-3xl font-semibold text-white mb-2">News center</h1>
        <p className="text-gray-300 text-base leading-relaxed max-w-3xl">
          Stay updated with the latest updates, stories and press releases from
          U4E Nigeria.
        </p>
      </section>

      {/* Featured News Section */}
      <section className="bg-white py-6">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Featured Info */}
          <div className="lg:col-span-3 space-y-2">
            <p className="text-gray-500 text-sm">14 Dec 2022</p>
            <div className="flex items-center gap-2">
              <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                NEWS
              </span>
              <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">
                PRESS RELEASE
              </span>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 leading-snug">
              REA Launches the Africa Minigrids Program (AMP)
            </h2>
          </div>

          {/* Center Image */}
          <div className="lg:col-span-6">
            <img
              src="/panelsongrass.jpg"
              alt="Featured news"
              className="w-full h-[280px] object-cover rounded-lg"
            />
          </div>

          {/* Right News List */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <p className="text-gray-500 text-sm">14 Dec 2022</p>
              <div className="flex items-center gap-2">
                <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">
                  PRESS RELEASE
                </span>
              </div>
              <h3 className="mt-1 text-sm font-medium text-gray-900 leading-snug">
                REA Launches the Africa Minigrids Program (AMP)
              </h3>
            </div>

            <div>
              <p className="text-gray-500 text-sm">05 Jun 2025</p>
              <div className="flex items-center gap-2">
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                  NEWS
                </span>
              </div>
              <h3 className="mt-1 text-sm font-medium text-gray-900 leading-snug">
                REA Launches the Africa Minigrids Program (AMP) with solar grids...
              </h3>
            </div>

            <div>
              <p className="text-gray-500 text-sm">26 Sep 2025</p>
              <div className="flex items-center gap-2">
                <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">
                  STORY
                </span>
              </div>
              <h3 className="mt-1 text-sm font-medium text-gray-900 leading-snug">
                REA Launches the Africa Minigrids Program
              </h3>
            </div>
          </div>
        </div>
      </section>

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
{/* All Media Updates */}
<section className="bg-white py-12">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-lg font-semibold text-yellow-500 mb-6">
      All media updates
    </h2>

    <div className="space-y-6">
      {/* Item 1 */}
      <div className="flex items-start justify-between gap-4 border-b pb-6">
        <div className="flex-1">
          <p className="text-gray-500 text-sm">14 Dec 2022</p>
          <h3 className="text-base font-semibold text-gray-900 leading-snug">
            Off-Grid Refrigeration Will Transform Food Security, Healthcare, Economy – Minister
          </h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
            Minister of Livestock Development, Idi, highlights how off-grid refrigeration will
            transform food security, improve healthcare, and drive local economic growth...
          </p>
          <div className="mt-2">
            <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
              FEATURE
            </span>
          </div>
        </div>
        <a
          href="https://guardian.ng/features/agro-care/off-grid-refrigeration-will-transform-food-security-healthcare-economy-minister/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/cardplaceholder.jpg"
            alt="Guardian News"
            className="w-36 h-24 object-cover rounded-lg"
          />
        </a>
      </div>

      {/* Item 2 */}
      <div className="flex items-start justify-between gap-4 border-b pb-6">
        <div className="flex-1">
          <p className="text-gray-500 text-sm">14 Dec 2022</p>
          <h3 className="text-base font-semibold text-gray-900 leading-snug">
            REA, UNEP Initiate Measure To Reduce Postharvest Losses In Rural Areas
          </h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
            The initiative seeks to reduce food waste in rural communities through energy-efficient
            technologies and improved cold storage solutions...
          </p>
          <div className="mt-2">
            <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">
              NEWS
            </span>
          </div>
        </div>
        <a
          href="https://share.google/tsh9mJkwUM872ua8B"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/cardplaceholder.jpg"
            alt="Independent Nigeria"
            className="w-36 h-24 object-cover rounded-lg"
          />
        </a>
      </div>

      {/* Item 3 (YouTube Video) */}
      <div className="flex items-start justify-between gap-4 border-b pb-6">
        <div className="flex-1">
          <p className="text-gray-500 text-sm">30 Sep 2025</p>
          <h3 className="text-base font-semibold text-gray-900 leading-snug">
            Stakeholders Proffer Solutions To Enhance Vaccine Storage
          </h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
            Experts and stakeholders propose innovative solutions to strengthen cold-chain systems
            for vaccines in rural and underserved areas...
          </p>
          <div className="mt-2">
            <span className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full">
              VIDEO
            </span>
          </div>
        </div>
        <a
          href="https://youtu.be/CpPLRW1hD00"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/stakeholders.jpg"
            alt="YouTube Video"
            className="w-36 h-24 object-cover rounded-lg"
          />
        </a>
      </div>

      {/* Item 4 */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <p className="text-gray-500 text-sm">05 Jun 2025</p>
          <h3 className="text-base font-semibold text-gray-900 leading-snug">
            Off-Grid Refrigeration: REA, UNEP Flag-Off Initiative To Bridge Energy Access Gaps
          </h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
            The REA and UNEP have launched a joint initiative to expand off-grid cold storage access,
            helping farmers, healthcare centers, and local communities...
          </p>
          <div className="mt-2">
            <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
              STORY
            </span>
          </div>
        </div>
        <a
          href="https://sciencenigeria.com/off-grid-refrigeration-rea-unep-flag-off-initiative-to-bridge-energy-access-gaps/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/cardplaceholder.jpg"
            alt="Science Nigeria"
            className="w-36 h-24 object-cover rounded-lg"
          />
        </a>
      </div>
    </div>
  </div>
</section>



      <Footer />
    </main>
  );
}
