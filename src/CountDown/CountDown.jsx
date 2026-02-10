import React from "react";
import "./CountDown.css";
export const CountDown = () => {
  return (
    <div className="countdown-container">
      <h1 className="text-header-countdown header-animate delay-1 text-6xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#eab308,#ca8a04,#fcd34d)] bg-size[200%_auto] leading-relaxed py-2">
        យើងខ្ញុំកំពុងរងចាំថ្ងៃពិសេស
      </h1>
      <div className="countdown-wrap">
        <div className="time-text">
          <div className="time-box">
            <p></p>
          </div>
          <span className="text-6xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#eab308,#ca8a04,#fcd34d)] bg-size[200%_auto] leading-relaxed py-2">
            ថ្ងៃ
          </span>
        </div>
        <div className="time-text">
          <div className="time-box">
            <p></p>
          </div>
          <span className="text-6xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#eab308,#ca8a04,#fcd34d)] bg-size[200%_auto] leading-relaxed py-2">
            ម៉ោង
          </span>
        </div>
        <div className="time-text">
          <div className="time-box">
            <p>01</p>
          </div>
          <span className="text-6xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#eab308,#ca8a04,#fcd34d)] bg-size[200%_auto] leading-relaxed py-2">
            នាទី
          </span>
        </div>
        <div className="time-text">
          <div className="time-box">
            <p></p>
          </div>
          <span className="text-6xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#eab308,#ca8a04,#fcd34d)] bg-size[200%_auto] leading-relaxed py-2">
            វិនាទី
          </span>
        </div>
      </div>
    </div>
  );
};
