import React from "react";
import "./WeddingApplication.css";
import bgImage from "/images/IMG_4344.webp";

export const WeddingApplication = () => {
  return (
    <div className="wedding-application-container">
      <h2
        className="text-2xl md:text-4xl font-bold text-center mb-6 text-yellow-600"
        style={{
          fontFamily: "Kdam Thmor Pro",
          fontSize: "large",
          fontWeight: "bold",
        }}
      >
        កម្មវិធីមង្គលអាពាហ៍ពិពាហ៍
      </h2>
      <div
        className="wedding-application"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.30)",
            color: "white",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div className="icon-txt">
            <div className="icon-box">
              <span class="material-symbols-outlined">calendar_today</span>
            </div>
            <p>
              <span className="font-bold text-center mb-6 text-yellow-600">
                កាលបរិច្ឆេទ
              </span>
              <br />
              ថ្ងៃព្រហស្បតិ៍ ១០កើត ខែផល្គុន ឆ្នាំម្សាញ់ <br />
              សប្តស័ក ពុទ្ធសករាជ ២៥៦៩ ត្រូវនឹងថ្ងៃទី២៦ ខែកុម្ភៈ ឆ្នាំ២០២៦
            </p>
          </div>
          <div className="icon-txt">
            <div className="icon-box">
              <span class="material-symbols-outlined">map</span>
            </div>
            <p>
              <span className="font-bold text-center mb-6 text-yellow-600">
                ទីតាំងកម្មវិធី
              </span>
              <br />
              នៅគេហដ្ឋានខាងស្រី​ ភូមិតាម៉ូត ឃុំគរ ស្រុកព្រៃឈរ ខេត្តកំពង់ចាម
            </p>
          </div>
          <div className="map-frame">
            <iframe
              title="Wedding Location"
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1950.5170078783317!2d105.22054849685082!3d12.109823892605506!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDA2JzM2LjIiTiAxMDXCsDEzJzE1LjkiRQ!5e0!3m2!1skm!2skh!4v1770801112583!5m2!1skm!2skh"
              height="auto"
              style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <button className="to-google-map ">
            <span class="material-symbols-outlined">map_search</span>
            <a
              href="https://www.google.com/maps/place/12%C2%B006'36.2%22N+105%C2%B013'15.9%22E/@12.110049,105.221083,1715m/data=!3m1!1e3!4m4!3m3!8m2!3d12.110049!4d105.221083?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              ចុចទៅកាន់ទីតាំងកម្មវិធី
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
