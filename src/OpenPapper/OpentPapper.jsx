import { Suspense, lazy, useEffect, useState } from "react";
import bgFrameName from "/frame/name_frame.png";
import "./OpentPaper.css";

const FloatingParticles = lazy(
  () => import("../BubbleEffect/FloatingParticles"),
);
const OpentPapper = ({ guestName, isOpen, setIsOpen }) => {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const enableParticles = () => setShowParticles(true);

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(enableParticles, { timeout: 1200 });
      return () => window.cancelIdleCallback(id);
    }

    const timeoutId = window.setTimeout(enableParticles, 600);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="image-background">
      <h1 className="header-text text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-red-200 via-red-300 to-yellow-200 leading-relaxed py-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
        សិរីមង្គលអាពាហ៏ពិពាហ៍
      </h1>
      <div className="both-name">
        <p>យិត រ៉ាម៉ាញ</p>
        <p>&</p>
        <p>នីន ណាវី</p>
      </div>
      <div className="frame-name-container">
        <p className="third-header-text">សូមគោរពអញ្ជើញ</p>
        <div className="frame-name">
          <img src={bgFrameName} alt="frame name image" />
          <p className="guest-name">{guestName}</p>
        </div>
      </div>

      {showParticles && (
        <Suspense fallback={null}>
          <FloatingParticles />
        </Suspense>
      )}
      <button
        type="button"
        className="open-btn text-heading bg-linear-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
        onClick={() => setIsOpen(false)}
      >
        <span className="material-symbols-outlined">mail</span>{" "}
        <span>បើកធៀប</span>
      </button>
    </div>
  );
};

export default OpentPapper;
