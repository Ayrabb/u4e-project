"use client";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import { Badge } from "@/app/components/utilities";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsZoomIn } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";

interface GalleryClientProps {
  id: string;
}

const GalleryClient: React.FC<GalleryClientProps> = ({ id }) => {
	const [images, setImages] = useState<string[]>([]);
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	useEffect(() => {
		const imageCount = 170;
		const imgs = Array.from({ length: imageCount }, (_, i) => `/gallery/workshop/image${i}.JPG`);
		setImages(imgs);
	}, [id]);

	return (
		<main className="min-h-screen bg-white font-montserrat">
			<Navbar />
			
			{/* Header Section */}
			<section 
				className="flex flex-col min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] mt-[var(--navbar-height)] bg-gradient-to-b from-[#044D28] from-28% via-[#078042] via-86% to-[#099A4F] to-100% items-start text-white px-5 sm:px-10 md:px-16 lg:px-20"
			>
				<div className="max-w-7xl w-full flex flex-col gap-3 py-5">
					{/* Back Button */}
					<a
						href="/news?tab=gallery"
						className="inline-flex items-center text-white hover:text-gray-200 transition-colors text-sm pb-3"
					>
						<FaArrowLeftLong className="w-4 h-auto mr-2" />
						back to gallery
					</a>

					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
						Off-grid Refrigeration Guidelines Pilot Implementation Program Inception Workshop
					</h2>
					<div className="flex flex-wrap items-center gap-3 mt-2">
						<time className="text-base sm:text-lg text-gray-50">
							15 December 2024
						</time>
						<span className="text-gray-300">|</span>
						<Badge type="gallery" size="sm" />
					</div>
				</div>
			</section>


			{/* Gallery Content */}
			<section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
				<div className="mb-8 sm:mb-12">
					<p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl">
						A visual documentation of the inception workshop for the Off-grid Refrigeration Guidelines Pilot Implementation Program, bringing together key stakeholders to launch this transformative initiative.
					</p>
				</div>

				{/* Image Count */}
				<div className="mb-6">
					<p className="text-sm text-gray-500">
						{images.length} photos
					</p>
				</div>

				{/* Gallery Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
				{images.map((src, idx) => (
					<div
						key={idx}
						className="group relative aspect-square overflow-hidden rounded-xs bg-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
						onClick={() => setSelectedImage(src)}
					>
					<Image
						src={src}
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
						src={selectedImage}
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

			<Footer />
		</main>
	);
};

export default GalleryClient;