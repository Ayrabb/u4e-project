"use client"

import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import { SanityImage, ImageData, GalleryData } from "@/app/components/utilities";
import { useEffect, useState } from "react";
import imageUrlBuilder from '@sanity/image-url';
import { client } from "@/sanity/client";
import { useParams, useRouter } from "next/navigation";
import { BsZoomIn } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { TbError404 } from "react-icons/tb";
import { IoIosArrowRoundBack } from "react-icons/io";

const builder = imageUrlBuilder(client);
function urlFor(source: SanityImage) {
    return builder.image(source);
}

export default function GalleryPage () {
    const params = useParams<{ id: string }>()
    const router = useRouter()
    const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [images, setImages] = useState<ImageData[]>([]);
    const [title, setTitle] = useState<string>("");
    
    useEffect(() => {
        const fetchGalleryImages = async () => {
            try {
                setLoading(true);
                setError(null);

                // Fetch the gallery document from Sanity
                const query = `*[_type == "gallery" && _id == "${params.id}"][0] {
                    _id,
                    title,
                    images
                }`;

                const data: GalleryData= await client.fetch(query);
                
                if (!data) {
                    setError("Gallery not found");
                    return;
                }

                if (data.images && data.images.length > 0) {
                    // Transform Sanity images to ImageData format
                    const transformedImages: ImageData[] = data.images.map((img, idx) => ({
                        id: img._key,
                        url: urlFor(img).width(1200).url(),
                        name: `${data.title || 'Gallery'} - Image ${idx + 1}`,
                    }));

                    setImages(transformedImages);
                    setTitle(data.title || "Gallery");
                } else {
                    setError("No images found in this gallery");
                }
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
                    <p className="text-lg text-gray-700 py-5">Fetching images...</p>
                </div>

                <Footer />
            </main>
        )
    }

    if(!images || images.length === 0){
        return (
            <main className="min-h-screen font-montserrat bg-white">
                <Navbar />

                <div className="min-h-screen flex flex-col mx-auto justify-center items-center">
                    <TbError404 className="w-18 h-auto text-[#044D28]"/>
                    <p className="text-lg text-gray-700 pb-5">Page not found</p>
                    <button className="p-2 bg-[#044D28] text-white font-medium rounded-lg hover:bg-[#033d20] cursor-pointer"
                        onClick={() => router.push("/news")}
                    >
                        Return to news center
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
                    onClick={() => router.push("/news?tab=gallery")}
                    className="flex hover:underline cursor-pointer text-gray-300"
                >
                    <IoIosArrowRoundBack className="w-6 h-auto"/>
                    <p>Back to gallery</p>
                </a>
                <div className="grow flex items-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">{title}</h2>
                </div>
            </section>

            <div className="min-h-screen bg-white font-montserrat">
                {/* Gallery Grid */}
                <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
                    <div className="mb-6">
                        <p className="text-sm text-gray-500">{images.length} photos</p>
                    </div>
    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                        {loading
                            ? // Placeholder cards
                            Array.from({ length: 8 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="aspect-square bg-gray-200 rounded-xs animate-pulse shadow-xs"
                                />
                            ))
                            : // Actual images
                            images.map((image) => (
                                <div
                                    key={image.id}
                                    className="group relative aspect-square overflow-hidden rounded-xs bg-gray-100 cursor-pointer shadow-xs hover:shadow-xs transition-shadow duration-300"
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <Image
                                        src={image.url}
                                        alt={image.name}
                                        fill
                                        className="object-cover group-hover:scale-101 transition-transform duration-300"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                                    <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <BsZoomIn />
                                    </div>
                                </div>
                            ))}
                    </div>
                </section>
    
                {/* Lightbox Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
                            aria-label="Close"
                        >
                            <svg
                                className="w-6 h-6 text-gray-900"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
    
                        <div className="relative max-w-7xl w-full h-[90vh]" onClick={(e) => e.stopPropagation()}>
                            <Image src={selectedImage.url} alt={selectedImage.name} fill className="object-contain" sizes="100vw" />
                        </div>
    
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                const currentIndex = images.indexOf(selectedImage);
                                const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
                                setSelectedImage(images[prevIndex]);
                            }}
                            className="absolute left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                            aria-label="Previous image"
                        >
                            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
    
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                const currentIndex = images.indexOf(selectedImage);
                                const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
                                setSelectedImage(images[nextIndex]);
                            }}
                            className="absolute right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                            aria-label="Next image"
                        >
                            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}