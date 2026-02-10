import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GlassBackground from "./GlassBackground/GlassBackground";
import OpentPapper from "./OpenPapper/OpentPapper";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { MainContent } from "./MainContent/MainContent";
import { HeaderContent } from "./Header/HeaderContent";
import { LatterInvite } from "./LatterInvite/LatterInvite";
import { CountDown } from "./CountDown/CountDown";
function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [searchParams] = useSearchParams();
  const [guestName, setGuestName] = useState("");
  const [fontSize, setFontSize] = useState(24);

  useEffect(() => {
    const name = searchParams.get("name");
    const size = searchParams.get("size");

    if (name) setGuestName(name);
    if (size) setFontSize(Number(size));
  }, [searchParams]);

  return (
    <GlassBackground>
      {isOpen && (
        <OpentPapper
          guestName={guestName}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
      {!isOpen && (
        <MainContent>
          <HeaderContent />
          <LatterInvite />
          <CountDown />
        </MainContent>
      )}
    </GlassBackground>
  );
}

export default App;
