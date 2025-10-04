"use client"
import Footer from "@/app/components/footer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NavBar from "../components/navbar";
type NewsItem = {
  title: string;               
  summary: string;            
  date: string;                
  type: "news" | "press" | "media" | "story"; 
  source?: string;             
  url: string;                
  image?: string;                
};

const newsList: NewsItem[] = [
  {
    title: "Nigeria launches energy-efficient appliance program",
    summary: "The U4E initiative in Nigeria has introduced new policies to improve efficiency in household appliances.",
    date: "2025-09-28",
    type: "story",
    url: "",
    image: "/suya.jpg",
  },
  {
    title: "Nigeria launches energy-efficient appliance program",
    summary: "The U4E initiative in Nigeria has introduced new policies to improve efficiency in household appliances.",
    date: "2025-09-28",
    type: "story",
    url: "",
  },
  {
    title: "Nigeria launches energy-efficient appliance program",
    summary: "The U4E initiative in Nigeria has introduced new policies to improve efficiency in household appliances.",
    date: "2025-09-28",
    type: "story",
    url: "",
    image: "/event.jpg",
  },
  {
    title: "Nigeria launches energy-efficient appliance program",
    summary: "The U4E initiative in Nigeria has introduced new policies to improve efficiency in household appliances.",
    date: "2025-09-28",
    type: "story",
    url: "",
    image: "/event.jpg",
  },
  {
    title: "Nigeria launches energy-efficient appliance program",
    summary: "The U4E initiative in Nigeria has introduced new policies to improve efficiency in household appliances.",
    date: "2025-09-28",
    type: "story",
    url: "",
    image: "/event.jpg",
  }
];

const AllStories = ({ stories }: { stories: NewsItem[] }) => {
    const router = useRouter();
    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-20 py-16">
            <h2 className="text-2xl md:text-4xl text-[#BFAB25] font-medium mb-8">
                All stories
            </h2>
            <div className="flex flex-col divide-y divide-gray-200">
                {stories && stories.map((story, idx) => (
                    <div 
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8"
                        key={idx} 
                    >
                        <div className="md:col-span-2 flex flex-col space-y-2">
                            <time className="text-gray-500 font-medium text-md">
                                {new Date(story.date).toLocaleDateString('en-UK', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                })}
                            </time>
                            <div className="space-y-2">
                                <h3 
                                    onClick={() => router.push(story?.url || "")}
                                    className="text-xl md:text-2xl text-gray-900 font-medium cursor-pointer hover:text-[#044D28] transition-colors"
                                >
                                    {story.title}
                                </h3>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    {story.summary}
                                </p>
                            </div>
                        </div>
                        {story?.image && (
                            <div className="md:col-span-1">
                                <div className="relative aspect-[16/9] w-full">
                                    <Image 
                                        src={story.image}
                                        alt={story.title}
                                        fill
                                        className="object-cover rounded-sm"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function Stories () {	
    return (
    <main className="relative min-h-screen font-montserrat bg-white">
        <NavBar />
        
        {/* Hero section */}
        <section className="flex items-center min-h-[95vh] bg-black">
            <div className="w-full px-10">
                <div className="flex flex-col md:flex-row items-center gap-2">
                    <div className="w-full md:w-1/3 space-y-6">
                        <h2 className="font-bold text-gray-300 text-lg tracking-wider uppercase">
                            Featured Story
                        </h2>
                        <div className="space-y-4">
                            <a 
                                className="text-3xl md:text-3xl font-semibold text-white leading-tight hover:underline cursor-pointer">
                                Lighting up small businesses in Nigeria
                            </a>
                            <p className="text-gray-400 text-md">
                                Discover how sustainable energy is transforming local enterprises and communities across Nigeria.
                            </p>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="w-full md:w-2/3">
                        <div className="relative aspect-[16/9]">
                            <Image 
                                src="/suya.jpg"
                                alt="Featured story image"
                                fill
                                className="object-cover rounded-lg"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <AllStories stories={newsList} />
        </section>

        <section>
            <Footer />
        </section>
    </main>
    );
}