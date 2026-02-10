import React from "react";
import "./HeaderContent.css";
import bgImage from "/images/DSC_8419 copy 2.webp";

export const HeaderContent = () => {
  return (
    <div
      className="header-bg"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <h1 className="text-header text-6xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#d7bb83,#f3e5ab,#fff,#f3e5ab,#d7bb83)] bg-size-[200%_auto] leading-relaxed py-2">
        សិរីមង្គលអាពាហ៍ពិពាហ៍
      </h1>
      <div className="header-both-name">
        <p>យិត រ៉ាម៉ាញ</p>
        <div className="stage">
          <div className="heart"></div>
        </div>
        <p>នីន ណាវី</p>
      </div>
    </div>
  );
};
