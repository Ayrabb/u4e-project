"use client";
import { SanityImage, GalleryData } from "@/app/components/utilities";
import { client } from "@/sanity/client";
import imageUrlBuilder from '@sanity/image-url';
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImage) {
	return builder.image(source);
}

const Gallery = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(true);
	const [images, setImages] = useState<GalleryData[]>([]);

	useEffect(() => {
		const fetchGalleryImages = async () => {
			try {
				setLoading(true);
				
				const query = `*[_type == "gallery"] | order(_createdAt desc) {
					_id,
					title,
					"coverImage": images[0],
					"imageCount": count(images)
				}`;
				
				const data = await client.fetch<Array<{
					_id: string;
					title: string;
					coverImage: SanityImage;
					imageCount: number;
				}>>(query);
				
				console.log(data);
				
				if (data && data.length > 0) {
					const transformedImages: GalleryData[] = data
						.filter(element => element.coverImage) // Only include galleries with images
						.map(element => ({
							_id: element._id,
							title: element.title,
							url: urlFor(element.coverImage).width(1200).url(),
							imageCount: element.imageCount,
						}));
					
					setImages(transformedImages);
				}
			} catch (error) {
				console.error("Error fetching gallery images:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchGalleryImages();
	}, []);

	const handleGalleryClick = (galleryId: string) => {
		router.push(`/news/gallery/${galleryId}`);
	};

	return (
		<div className="min-h-screen bg-white font-montserrat">
			{/* Gallery Grid */}
			<section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
				<div className="mb-6">
					<p className="text-sm text-gray-500">
						{loading ? "Loading..." : `${images.length} image ${images.length === 1 ? 'gallery' : 'galleries'}`}
					</p>
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
						: images.length === 0
						? // No images message
						<div className="col-span-full text-center py-12">
							<p className="text-gray-500">No galleries found</p>
						</div>
						: // Actual images
						images.map((image) => (
							<div
								key={image._id}
								className="group relative aspect-square overflow-hidden rounded-xs bg-gray-100 cursor-pointer shadow-xs hover:shadow-md transition-shadow duration-300"
								onClick={() => handleGalleryClick(image._id)}
							>
								<Image
									src={image.url || ""}
									alt={image.title}
									fill
									className="object-cover group-hover:scale-101 transition-transform duration-300"
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
								/>
								<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
								<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
									<h3 className="text-white font-medium text-md mb-1">{image.title}</h3>
									<p className="text-white/80 text-sm">
										{image.imageCount} {image.imageCount === 1 ? 'photo' : 'photos'}
									</p>
								</div>
							</div>
						))}
				</div>
			</section>
		</div>
	);
};

export default Gallery;