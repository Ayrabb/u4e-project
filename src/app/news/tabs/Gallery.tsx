"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BsZoomIn } from "react-icons/bs";

interface ImageData {
  id: number;
  url: string;
  name: string;
}

const TOTAL_IMAGES = 30; // number of images in /public/workshop

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [loading, setLoading] = useState(true);

  // Generate array of image objects
  const images: ImageData[] = Array.from({ length: TOTAL_IMAGES }, (_, idx) => ({
    id: idx + 1,
    url: `/gallery/workshop/image${idx + 1}.JPG`,
    name: `image${idx + 1}`,
  }));

  // Simulate loading delay (optional if fetching images from API)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1s loading placeholder
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white font-montserrat">
      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
        <div className="mb-6">
          <p className="text-sm text-gray-500">{TOTAL_IMAGES} photos</p>
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
                  className="group relative aspect-square overflow-hidden rounded-xs bg-gray-100 cursor-pointer shadow-xs hover:shadow-md transition-shadow duration-300"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.url}
                    alt={image.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
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
  );
};

export default Gallery;