import { Suspense, lazy, useEffect, useState } from "react";
import "./App.css";
import GlassBackground from "./GlassBackground/GlassBackground";
import OpentPapper from "./OpenPapper/OpentPapper";
import { MainContent } from "./MainContent/MainContent";
import { HeaderContent } from "./Header/HeaderContent";
import { LatterInvite } from "./LatterInvite/LatterInvite";
import { CountDown } from "./CountDown/CountDown";

const ImagesView = lazy(() => import("./ImagesView/ImagesView"));
const WeddingScrollGallery = lazy(
  () => import("./GallerySwaper/WeddingScrollGallery"),
);
const WeddingApplication = lazy(() =>
  import("./WeddingApplication/WeddingApplication").then((mod) => ({
    default: mod.WeddingApplication,
  })),
);
const ChongdiaQR = lazy(() =>
  import("./Chongdia/ChongdiaQR").then((mod) => ({
    default: mod.ChongdiaQR,
  })),
);
const Footer = lazy(() =>
  import("./Footer/Footer").then((mod) => ({
    default: mod.Footer,
  })),
);
const BackgroundMusic = lazy(() => import("./MusicBackground/BackgroundMusic"));

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [guestName, setGuestName] = useState("");
  const [fontSize, setFontSize] = useState(24);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    const size = params.get("size");

    if (name) setGuestName(name);
    if (size) setFontSize(Number(size));
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const preload = () => {
      import("./ImagesView/ImagesView");
      import("./GallerySwaper/WeddingScrollGallery");
      import("./WeddingApplication/WeddingApplication");
      import("./Chongdia/ChongdiaQR");
      import("./Footer/Footer");
      import("./MusicBackground/BackgroundMusic");
    };

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(preload, { timeout: 1500 });
      return () => window.cancelIdleCallback(id);
    }

    const timeoutId = window.setTimeout(preload, 800);
    return () => window.clearTimeout(timeoutId);
  }, [isOpen]);

  return (
    <>
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
            <Suspense fallback={null}>
              <ImagesView />
            </Suspense>
            <Suspense fallback={null}>
              <WeddingScrollGallery />
            </Suspense>
            <Suspense fallback={null}>
              <WeddingApplication />
            </Suspense>
            <Suspense fallback={null}>
              <ChongdiaQR />
            </Suspense>
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </MainContent>
        )}
      </GlassBackground>
      {!isOpen && (
        <Suspense fallback={null}>
          <BackgroundMusic />
        </Suspense>
      )}
    </>
  );
}

export default App;
