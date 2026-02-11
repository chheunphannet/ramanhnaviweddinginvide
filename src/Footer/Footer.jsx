import React from "react";
export const Footer = () => {
  const logoSize = 30;
  return (
    <div className="footer">
      <h2
        style={{
          textAlign: "center",
          fontFamily: "Metal",
          fontSize: "small",
          fontWeight: "bold",
          lineHeight: "1.8",
          color: "#575ad6",
        }}
      >
        <span
          className="text-2xl md:text-4xl font-bold text-center mb-6 text-yellow-600"
          style={{
            fontFamily: "Moulpali",
            fontSize: "medium",
          }}
        >
          សូមថ្លែងអំណរអរគុណ
        </span>
        <br />
        ត្តមានឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា
        ជាកិត្តិយសដ៏ឧត្តុង្គឧត្តម ចំពោះគ្រួសាររបស់យើងខ្ញុំ។
      </h2>
      <div
        style={{
          marginTop: "100px",
          width: "100%",
          height: "50px",
          marginBottom: "50px",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontFamily: "Metal",
            fontSize: "small",
            fontWeight: "bold",
            lineHeight: "1.8",
            color: "#555",
          }}
        >
          បង្កើតធៀបការឌីជីថលរបស់អ្នកឥឡូវនេះ
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <img
              src="/images/2021_Facebook_icon.svg.png"
              alt="Facebook"
              width={logoSize}
              height={logoSize}
            />
            <a
              href="https://www.facebook.com/share/1GEypBfhGk/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "small", textDecoration: "underline" }}
            >
              Facebook
            </a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <img
              src="/images/Telegram_logo.svg.webp"
              alt="Telegram"
              width={logoSize}
              height={logoSize}
            />
            <a
              href="https://t.me/chheunphanet"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "small", textDecoration: "underline" }}
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
