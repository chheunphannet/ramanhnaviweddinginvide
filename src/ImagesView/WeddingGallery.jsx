import React, { useEffect } from "react";
import lightGallery from "lightgallery";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const WeddingGallery = () => {
  const images = [
    "/images/DSC_8336 copy 2.webp",
    "/images/DSC_8374 copy 2.webp",
    "/images/DSC_8414 copy 2.webp",
    "/images/DSC_8419 copy 2.webp",
    "/images/DSC_8456 copy 2.webp",
    "/images/DSC_8463 copy 2.webp",
  ];

  useEffect(() => {
    const gallery = lightGallery(document.getElementById("wedding-gallery"), {
      plugins: [lgZoom, lgThumbnail],
      speed: 500,
      selector: ".gallery-item",
    });

    return () => {
      gallery.destroy();
    };
  }, []);

  return (
    <div className="gallery-container">
      <div id="wedding-gallery" className="gallery-grid">
        {images.map((image, index) => (
          <a
            key={index}
            className={`gallery-item item-${index + 1}`}
            href={image}
            data-src={image}
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
          </a>
        ))}
      </div>

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
