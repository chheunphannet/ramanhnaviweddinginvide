import React from "react";
import Reveal from "../components/Reveal";
import "./ImagesView.css";
import WeddingGallery from "./WeddingGallery";
const ImagesView = () => {
  return (
    <Reveal className="gallery-container">
      <h1 className="view-images-text text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#eab308,#ca8a04,#fcd34d)] bg-size[200%_auto] leading-relaxed py-4 mb-8 text-center">
        កំរងរូបភាពអាពាហ៍ពិពាហ៍របស់យើង
      </h1>
      <WeddingGallery/>
    </Reveal>
  );
};

export default ImagesView;
