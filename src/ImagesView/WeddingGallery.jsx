import React, { useEffect, useState } from "react";

const WeddingGallery = () => {
  const images = [
    "/images/DSC_8336 copy 2.webp",
    "/images/DSC_8374 copy 2.webp",
    "/images/DSC_8414 copy 2.webp",
    "/images/DSC_8419 copy 2.webp",
    "/images/DSC_8456 copy 2.webp",
    "/images/DSC_8463 copy 2.webp",
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % images.length);
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          (current - 1 + images.length) % images.length,
        );
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeIndex, images.length]);

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <button
            key={index}
            className={`gallery-item item-${index + 1}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Open wedding photo ${index + 1}`}
          >
            <img src={image} alt={`Wedding photo ${index + 1}`} />
            <div className="overlay">
              <svg
                className="magnify-icon"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true">
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setActiveIndex(null)}
            aria-label="Close image viewer"
          >
            ×
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={() =>
              setActiveIndex((current) =>
                (current - 1 + images.length) % images.length,
              )
            }
            aria-label="Previous image"
          >
            ‹
          </button>
          <img
            src={images[activeIndex]}
            alt={`Wedding photo ${activeIndex + 1}`}
            className="lightbox-image"
          />
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={() =>
              setActiveIndex((current) => (current + 1) % images.length)
            }
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}

      <style>{`
        .gallery-container {
          padding: 20px;
          background: none;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(3, 200px);
          gap: 15px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
          border: none;
          background: transparent;
          padding: 0;
          width: 100%;
          height: 100%;
        }

        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-item:hover .overlay {
          opacity: 1;
        }

        .magnify-icon {
          transform: scale(0.8);
          transition: transform 0.3s ease;
        }

        .gallery-item:hover .magnify-icon {
          transform: scale(1);
        }

        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.88);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
        }

        .lightbox-image {
          max-width: min(92vw, 1100px);
          max-height: 88vh;
          object-fit: contain;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
        }

        .lightbox-close {
          position: absolute;
          top: 24px;
          right: 28px;
          font-size: 36px;
          color: white;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: 48px;
          color: white;
          background: rgba(0, 0, 0, 0.25);
          border: none;
          width: 56px;
          height: 56px;
          border-radius: 999px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-prev {
          left: 24px;
        }

        .lightbox-next {
          right: 24px;
        }

        /* Grid layout pattern matching the reference image */
        .item-1 {
          grid-column: 1 / 3;
          grid-row: 1 / 2;
        }

        .item-2 {
          grid-column: 3 / 5;
          grid-row: 1 / 2;
        }

        .item-3 {
          grid-column: 1 / 2;
          grid-row: 2 / 3;
        }

        .item-4 {
          grid-column: 2 / 4;
          grid-row: 2 / 3;
        }

        .item-5 {
          grid-column: 4 / 5;
          grid-row: 2 / 3;
        }

        .item-6 {
          grid-column: 1 / 3;
          grid-row: 3 / 4;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            gap: 10px;
          }

          .item-1,
          .item-2,
          .item-3,
          .item-4,
          .item-5,
          .item-6 {
            grid-column: span 1;
            grid-row: auto;
          }

          .item-1,
          .item-6 {
            grid-column: span 2;
          }
        }
      `}</style>
    </div>
  );
};

export default WeddingGallery;
