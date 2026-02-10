import React from "react";
import "./LatterInvite.css";
import invideFrame from "/frame/invite-frame.svg";
export const LatterInvite = () => {
  return (
    <div className="latter-invite">
      <h1 className="text-1 header-animate delay-1 text-6xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#eab308,#ca8a04,#fcd34d)] bg-size[200%_auto] leading-relaxed py-2">
        យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ
      </h1>
      <img src={invideFrame} alt="Invite Frame" className="invite-frame" />
      <div className="text-container">
        <p>
          ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា
          អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធិពរជ័យសិរីសួស្តី
          ជ័យមង្គល ក្នុងពិធីអាពាហ៍ពិពាហ៍ របស់យើងខ្ញុំទាំងពីរ។
        </p>
      </div>
      <img src={invideFrame} alt="Invite Frame" className="invite-frame-1" />
    </div>
  );
};
