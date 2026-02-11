import React from "react";
import bgImage from "/images/IMG_4313.webp";
import "./ChongdiaQR.css";
export const ChongdiaQR = () => {
  const qrSrc = "/images/qrcode-1770802655450.png";
  const acledaLogo = "/images/logo1.png";
  return (
    <div className="qr-box">
      <h2
        className="text-2xl md:text-4xl font-bold text-center mb-6 text-yellow-600"
        style={{
          fontFamily: "Kdam Thmor Pro",
          fontSize: "large",
          fontWeight: "bold",
        }}
      >
        ចងដៃតាមរយៈ QRCODE
      </h2>
      <div className="img-wrapper">
        <div
          className="qr-bg"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <div className="qr-ac-box">
            <img
              src={acledaLogo}
              alt="acleda bank"
              style={{
                width: "150px",
              }}
            />
            <img
              src={qrSrc}
              alt="qrcode acleda"
              className="qrcode-ac"
              style={{
                width: "200px",
              }}
            />
            <h2 style={{
              fontSize: "15px",
              fontWeight:"bolder"
            }}>NIN NAVY</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
