// components/Lightbox.tsx

import React from "react";

interface LightboxProps {
  isOpen: boolean;
  videoLink: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, videoLink, onClose }) => {
  if (!isOpen) return null;

  // Function to extract YouTube Video ID
  const getYouTubeID = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeID(videoLink);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className={`bg-white rounded-2xl shadow-2xl overflow-hidden w-full relative ${videoId ? 'max-w-4xl' : 'max-w-md p-8'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 z-10 w-8 h-8 md:w-10 md:h-10 text-white bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors text-sm md:text-base cursor-pointer"
        >
          ✕
        </button>

        {videoId ? (
          <div className="relative pt-[56.25%] w-full bg-black">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h3>
            <p className="text-gray-600 mb-8 px-4">
              We are crafting an exciting demo for you. Please check back later!
            </p>
            <button
              onClick={onClose}
              className="bg-brand-blue text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lightbox;
