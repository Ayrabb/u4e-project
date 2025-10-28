"use client"
import Footer from "@/app/components/footer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NavBar from "../components/navbar";
import { useEffect, useState } from "react";
import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { ImSpinner2 } from "react-icons/im";

const AllStories2 = ({ all_stories }: { all_stories: SanityDocument[] }) => {
    const router = useRouter();
    const handleStoryClick = (storyId: string) => {
        router.push(`/stories/${storyId}`);
    };

    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-20 py-16">
            <h2 className="text-2xl md:text-4xl text-[#BFAB25] font-medium">
                All stories
            </h2>
            <div className="flex flex-col divide-y divide-gray-200">
                {all_stories && all_stories.map((story, idx) => (
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
                                    onClick={() => handleStoryClick(story._id)}
                                    className="text-xl md:text-2xl text-gray-900 font-medium cursor-pointer hover:text-[#044D28] transition-colors"
                                >
                                    {story.title}
                                </h3>
                                <p className="text-base text-gray-600 leading-relaxed line-clamp-3">
                                    {story.description}
                                </p>
                            </div>
                        </div>
                        {story?.imageUrl && (
                            <div className="md:col-span-1">
                                <div className="relative aspect-[16/9] w-full">
                                    <Image
                                        src={story.imageUrl}
                                        alt={story.title}
                                        fill
                                        className="object-cover rounded-xs"
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

const AllStories = ({ all_stories }: { all_stories: SanityDocument[] }) => {
    const router = useRouter();
    const handleStoryClick = (storyId: string) => {
        router.push(`/stories/${storyId}`);
    };

    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-20 py-12 md:py-16 bg-gray-50">
            <div className="grid gap-8">
                {all_stories && all_stories.map((story) => (
                    <article
                        key={story._id}
                        className="group bg-white rounded-sm shadow-xs overflow-hidden border border-gray-100"
                        onClick={() => handleStoryClick(story._id)}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4">
                            <div className="md:col-span-2 flex flex-col justify-center space-y-3 order-2 md:order-1">
                                <time className="text-gray-500 text-sm sm:text-md font-medium uppercase tracking-wider">
                                    {new Date(story.date).toLocaleDateString('en-UK', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </time>
                                <h3 className="text-xl md:text-2xl text-gray-900 cursor-pointer font-medium group-hover:text-[#044D28] transition-colors">
                                    {story.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed line-clamp-3">
                                    {story.description}
                                </p>
                                <div className="mt-auto">
                                    <span className="inline-flex items-center text-[#044D28] font-medium group-hover:underline cursor-pointer">
                                        Read more
                                        <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            {story?.imageUrl && (
                                <div className="md:col-span-1 order-1 md:order-2">
                                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xs">
                                        <Image
                                            src={story.imageUrl}
                                            alt={story.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default function StoriesPage() {
    const [stories, setStories] = useState<SanityDocument[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchStories = async () => {
            setLoading(true);
            try {
                const query = `*[_type == "story"] | order(date desc) {
                    _id,
                    title,
                    description,
                    date,
                    "imageUrl": image.asset->url,
					"imageFileName": image.asset->originalFilename
                }`;

                const res = await client.fetch<SanityDocument[]>(query, {});
                console.log(res);
                setStories(res);
            }
            catch {
                setStories([]); // fallback
                console.log("An error occurred while fetching stories.")
            }
            finally { setLoading(false) }
        };
        fetchStories();
    }, [])

    return (
        <main className="relative min-h-screen font-montserrat bg-gray-50">
            <NavBar />

            {/* Hero section */}
            <section
				className="flex min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] mt-[var(--navbar-height)] bg-gradient-to-b from-[#044D28] from-28% via-[#078042] via-86% to-[#099A4F] to-100% items-center text-white px-5 sm:px-10 md:px-16 lg:px-20"
			>
                <div className="flex flex-col">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">Stories</h2>
                    <p className="text-gray-300 text-base sm:text-sm md:text-lg text-base leading-relaxed max-w-3xl">
                        Discover how the programme is making a difference across Nigeria.
                    </p>
                </div>
			</section>

            <section>
                {loading ? (
                    <div className="min-h-screen flex flex-col mx-auto justify-center items-center">
                        <ImSpinner2 className="w-12 h-auto text-[#044D28] animate-spin" />
                    </div>
                ) : (
                    <>
                        {stories.length > 0 ? (
                            <AllStories all_stories={stories} />
                        ) : (
                            <div className="min-h-[50vh] flex justify-center text-center w-full">
                                <p className="text-gray-500 m-auto text-lg md:text-xl">No stories available at the moment. Please check back later.</p>
                            </div>
                        )}
                    </>
                )}
            </section>

            <section>
                <Footer />
            </section>
        </main>
    );
}