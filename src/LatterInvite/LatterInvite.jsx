import React, { useEffect, useRef, useState } from "react";
import "./LatterInvite.css";
import invideFrame from "/frame/invite-frame.svg";
export const LatterInvite = () => {
  const [inView, setInView] = useState(false);
  const rootRef = useRef(null);

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
    <div ref={rootRef} className={`latter-invite ${inView ? "in-view" : ""}`}>
      <h1 className="text-1 landing delay-1 text-6xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#eab308,#ca8a04,#fcd34d)] bg-size[200%_auto] leading-relaxed py-2">
        យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ
      </h1>
      <img
        src={invideFrame}
        alt="Invite Frame"
        className="invite-frame landing delay-2"
      />
      <div className="text-container landing delay-3">
        <p>
          ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា
          អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធិពរជ័យសិរីសួស្តី
          ជ័យមង្គល ក្នុងពិធីអាពាហ៍ពិពាហ៍ របស់យើងខ្ញុំទាំងពីរ។
        </p>
      </div>
      <img
        src={invideFrame}
        alt="Invite Frame"
        className="invite-frame-1 landing delay-4"
      />
    </div>
  );
};
