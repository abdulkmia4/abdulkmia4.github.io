"use client";

import { useEffect, useState } from "react";

type ResearchImage = {
  src: string;
  description: string;
};

type ResearchImageCarouselProps = {
  images: ResearchImage[];
};

export default function ResearchImageCarousel({
  images,
}: ResearchImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((previousIndex) =>
        previousIndex === images.length - 1 ? 0 : previousIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  if (!images || images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];

  return (
    <div className="research-image-carousel">
      <div className="research-image-wrapper">
        <img
          key={currentImage.src}
          src={currentImage.src}
          alt={currentImage.description}
          className="research-carousel-image"
        />

        <div className="research-image-description">
          {currentImage.description}
        </div>
      </div>

      {images.length > 1 && (
        <div className="research-carousel-dots">
          {images.map((image, index) => (
            <span
              key={image.src}
              className={`research-carousel-dot ${
                index === currentIndex ? "active" : ""
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}