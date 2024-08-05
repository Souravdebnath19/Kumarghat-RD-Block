"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const CarouselsBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images] = useState([
    { src: "/img1.jpeg", alt: "Image 1" },
    { src: "/img2.jpeg", alt: "Image 2" },
    { src: "/img3.jpg", alt: "Image 3" },
    { src: "/img4.jpg", alt: "Image 4" },
    { src: "/img5.png", alt: "Image 5" },

    { src: "/img11.jpg", alt: "Image 11" },

    // Add more images here
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-[600px] mt-2">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <Image
          src={images[currentSlide].src}
          alt={images[currentSlide].alt}
          className="h-auto"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-4">
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handlePrevSlide}
        >
          Previous
        </button>
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleNextSlide}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CarouselsBanner;
