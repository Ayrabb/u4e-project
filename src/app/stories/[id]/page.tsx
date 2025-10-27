"use client"

import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/client";
import { useParams, useRouter } from "next/navigation";
import { ImSpinner2 } from "react-icons/im";
import { TbError404 } from "react-icons/tb";
import { IoIosArrowRoundBack } from "react-icons/io";
import { SanityDocument } from "next-sanity";
import RichText from '@/app/components/RichText';

export default function StoryPage () {
    const params = useParams<{ id: string }>()
    const router = useRouter();
    const [story, setStory] = useState<SanityDocument | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchGalleryImages = async () => {
            try {
                setLoading(true);
                setError(null);

                // Fetch the gallery document from Sanity
                const query = `*[_type == "story" && _id == "${params.id}"][0] {
                    _id,
                    title,
                    description,
                    body,
                    "pdfUrl": image.asset->url,
                    "pdfFileName": image.asset->originalFilename
                }`;
                const res = await client.fetch<SanityDocument>(query, {});
                console.log(res);
                setStory(res);
            } catch (error) {
                console.error("Error fetching gallery images:", error);
                setError("Failed to load gallery");
            } finally {
                setLoading(false);
            }
        };
        
        fetchGalleryImages();
    }, [params.id]);

    if(loading){
        return (
            <main className="min-h-screen font-montserrat bg-white">
                <Navbar />

                <div className="min-h-screen flex flex-col mx-auto justify-center items-center">
                    <ImSpinner2 className="w-12 h-auto text-[#044D28] animate-spin"/>
                </div>

                <Footer />
            </main>
        )
    }

    if(!story){
        return (
            <main className="min-h-screen font-montserrat bg-white">
                <Navbar />

                <div className="min-h-screen flex flex-col mx-auto justify-center items-center">
                    <TbError404 className="w-18 h-auto text-[#044D28]"/>
                    <p className="text-lg text-gray-700 pb-5">Page not found</p>
                    <button className="p-2 bg-[#044D28] text-white font-medium rounded-lg hover:bg-[#033d20] cursor-pointer"
                        onClick={() => router.push("/stories")}
                    >
                        Return to stories page
                    </button>
                </div>

                <Footer />
            </main>
        )
    }

    return (
        <main className="min-h-screen font-montserrat bg-white">
            <Navbar />

            <section 
                className="flex flex-col items-start min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] mt-[var(--navbar-height)] bg-gradient-to-b from-[#044D28] from-28% via-[#078042] via-86% to-[#099A4F] to-100% text-white px-5 sm:px-10 md:px-16 lg:px-20"
            >   
                <a 
                    onClick={() => router.push("/stories")}
                    className="flex hover:underline cursor-pointer text-gray-300 mt-2"
                >
                    <IoIosArrowRoundBack className="w-6 h-auto"/>
                    <p>Back to stories</p>
                </a>
                <div className="grow flex items-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">{story.title}</h2>
                </div>
            </section>

            <div className="min-h-screen bg-white font-montserrat pb-16">
                {story.pdfUrl && (
                    <div className="w-full max-w-4xl mx-auto my-8 px-4">
                        <Image
                            src={story.pdfUrl}
                            alt={story.title}
                            width={800}
                            height={450}
                            className="w-full h-auto object-contain rounded-xs"
                            priority
                        />
                    </div>
                )}
                <div className="max-w-4xl mx-auto px-4">
                    <div className="prose prose-lg max-w-none text-gray-800">
                        <RichText blocks={story.body} />
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}