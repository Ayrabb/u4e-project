"use client";

import React from "react";

interface VideoCardProps {
  title: string;
  videoUrl: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, videoUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="aspect-video bg-gray-200">
        <iframe
          src={videoUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
    </div>
  );
};

export default VideoCard;
