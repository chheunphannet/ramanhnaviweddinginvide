import React, { useEffect, useRef, useState } from "react";
import "./CountDown.css";
import CalendarHeart from "./CalendarHeart";

export const CountDown = () => {
  const targetDate = new Date("Feb 26, 2026 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [inView, setInView] = useState(false);
  const rootRef = useRef(null);

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeRemaining = {};

    if (difference > 0) {
      timeRemaining = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeRemaining = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeRemaining;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className={`countdown-container ${inView ? "in-view" : ""}`}
    >
      <h1 className="text-header-countdown landing delay-1 text-6xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#eab308,#ca8a04,#fcd34d)] bg-size[200%_auto] leading-relaxed py-2">
        យើងខ្ញុំកំពុងរងចាំថ្ងៃពិសេស
      </h1>
      <div className="landing delay-2">
        <CalendarHeart />
      </div>
      <div className="countdown-wrap">
        <div className="time-text landing delay-3">
          <div className="time-box">
            <p>{timeLeft.days}</p>
          </div>
          <span className="text-6xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#eab308,#ca8a04,#fcd34d)] bg-size[200%_auto] leading-relaxed py-2">
            ថ្ងៃ
          </span>
        </div>
        <div className="time-text landing delay-4">
          <div className="time-box">
            <p>{timeLeft.hours}</p>
          </div>
          <span className="text-6xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#eab308,#ca8a04,#fcd34d)] bg-size[200%_auto] leading-relaxed py-2">
            ម៉ោង
          </span>
        </div>
        <div className="time-text landing delay-5">
          <div className="time-box">
            <p>{timeLeft.minutes}</p>
          </div>
          <span className="text-6xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#eab308,#ca8a04,#fcd34d)] bg-size[200%_auto] leading-relaxed py-2">
            នាទី
          </span>
        </div>
        <div className="time-text landing delay-6">
          <div className="time-box">
            <p>{timeLeft.seconds}</p>
          </div>
          <span className="text-6xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#eab308,#ca8a04,#fcd34d)] bg-size[200%_auto] leading-relaxed py-2">
            វិនាទី
          </span>
        </div>
      </div>
      {timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0 && (
          <>
            <p className="time-end landing delay-7 text-6xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#eab308,#ca8a04,#fcd34d)] bg-size[200%_auto] leading-relaxed py-2">
              ពិធីមង្គលអាពាហ៍ពិពាហ៍បានចាប់ផ្ដើម!
            </p>
          </>
        )}
    </div>
  );
};
