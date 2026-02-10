import React from "react";
import "./HeaderContent.css";
import bgImage from "/images/IMG_4303.webp";

export const HeaderContent = () => {
  return (
    <div
      className="header-bg"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 1%, transparent 20.0%),
            linear-gradient(to top, rgba(0, 0, 0, 0.3) 1%, transparent 20.0%),url(${bgImage})`,
      }}
    >
      <h1 className="text-header header-animate delay-1 text-6xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#d7bb83,#f3e5ab,#fff,#f3e5ab,#d7bb83)] bg-size-[200%_auto] leading-relaxed py-2">
        សិរីមង្គលអាពាហ៍ពិពាហ៍
      </h1>
      <div className="header-both-name header-animate delay-3">
        <p>យិត រ៉ាម៉ាញ</p>
        <div className="stage header-animate delay-4">
          <div className="heart"></div>
        </div>
        <p>នីន ណាវី</p>
      </div>
      <div className="date-content header-animate delay-5">
        <p
          className="text-6xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#d7bb83,#f3e5ab,#fff,#f3e5ab,#d7bb83)] bg-size-[200%_auto] leading-relaxed py-2"
          style={{ fontSize: "15px" }}
        >
          SAVE THE DATE
        </p>
        <p>ថ្ងៃសៅរ៍ ទី២៦ ខែកុម្ភៈ ឆ្នាំ២០២៦</p>
        <p>ម៉ោង ០៥ : ០០ ល្ងាច</p>
        <p>26 . 02 . 2026 | 5:00 PM</p>
        {/* <span className="material-symbols-outlined" style={{ color: "green" }}>
          map_pin_heart
        </span> */}
      </div>
    </div>
  );
};
