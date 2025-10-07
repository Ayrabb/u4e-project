"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsZoomIn } from "react-icons/bs";

interface ImageFormat {
  url: string;
  width: number;
  height: number;
}

interface ImageData {
  id: number;
  name: string;
  alternativeText: string | null;
  url: string;
  formats?: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  };
}

const Gallery = () => {
	const [images, setImages] = useState<ImageData[]>([]);
	const [loading, setLoading] = useState(true);
	const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
	const api_url = process.env.NEXT_PUBLIC_API_URL

	useEffect(() => {
		const fetchImages = async () => {
			try {
				setLoading(true)
				const target = `${api_url}/api/galleries?populate=*`;
				const reqUrl = `/api/proxy?url=${encodeURIComponent(target)}`;

				const res = await fetch(reqUrl);
				const data = await res.json();
				if(data){
					setImages(data?.data[0]?.images);
				}
				console.log(data);
			}
			catch {
				console.log("An error occured while fetching images.");
			} finally {
				setLoading(false);
			}
		};

		fetchImages();
	}, []);

	if(loading) return (<></>)

	return (
		<div className="min-h-screen bg-white font-montserrat">
			{(!images || images?.length == 0) && (
				<div className="text-center my-50">
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
									d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
								/>
							</svg>
						</div>
						<h3 className="text-lg font-semibold text-gray-900 mb-2">
							Gallery empty
						</h3>
						<p className="text-gray-600">Check back later for updates</p>
					</div>
			)}
			
			{/* Gallery Content */}
			<section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
				{images.length > 0 && (
					<>
						<div className="mb-8 sm:mb-12">
							<p className="text-gray-600 text-base sm:text-lg leading-relaxed">
								A visual documentation of the inception workshop for the Off-grid Refrigeration Guidelines Pilot Implementation Program, bringing together key stakeholders to launch this transformative initiative.
							</p>
						</div>

						{/* Image Count */}
						<div className="mb-6">
							<p className="text-sm text-gray-500">
								{images.length} photos
							</p>
						</div>
					</>
				)}

				{/* Gallery Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
				{images && images.length > 0 && images.map((image, idx) => (
					<div
						key={idx}
						className="group relative aspect-square overflow-hidden rounded-xs bg-gray-100 cursor-pointer shadow-xs hover:shadow-md transition-shadow duration-300"
						onClick={() => setSelectedImage(image)}
					>
					<Image
						src={api_url + image?.url}
						alt={`Gallery image ${idx + 1}`}
						fill
						className="object-cover group-hover:scale-110 transition-transform duration-300"
						sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
					/>
					
					{/* Overlay on hover */}
					<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
					
					{/* Zoom icon */}
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
					<svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>

				<div className="relative max-w-7xl w-full h-[90vh]" onClick={(e) => e.stopPropagation()}>
					<Image
						src={api_url + selectedImage?.url}
						alt="Full size image"
						fill
						className="object-contain"
						sizes="100vw"
					/>
				</div>

				{/* Navigation arrows */}
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
	);
};

export default Gallery;