import React, { useState, useEffect, useRef } from "react";
import { Music, PauseCircle, PlayCircle } from "lucide-react";
import "./BackgroundMusic.css"
const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // URL to your music file (Replace with your actual file)
  const musicUrl = "/musics/pka-song.mp3";

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.log("Playback prevented:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Try to autoplay on load (will likely fail on Chrome until interaction)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set low volume (30%) for background

      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Autoplay started!
            setIsPlaying(true);
          })
          .catch((error) => {
            // Autoplay was prevented.
            // We stay paused and wait for user to click the button.
            console.log("Autoplay prevented by browser.");
            setIsPlaying(false);
          });
      }
    }
  }, []);

  return (
    <div className="music-control bottom-5 right-5 z-50">
      <audio ref={audioRef} src={musicUrl} loop />

      <button
        onClick={togglePlay}
        className={`
          flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105
          ${isPlaying ? "bg-white/80 backdrop-blur-sm border border-yellow-500" : "bg-[linear-gradient(90deg,#eab308,#ca8a04,#fcd34d)] text-white animate-bounce"}
        `}
      >
        {isPlaying ? (
          <div className="play-box">
            <PauseCircle size={20} className="text-yellow-600" />
            <span className="text-sm font-semibold text-yellow-800 hidden md:block">
              បិតចម្រៀង
            </span>
          </div>
        ) : (
          <div className="play-box">
            <PlayCircle size={20} className="text-white" />
            <span className="text-sm font-bold text-white">បើកចម្រៀង</span>
          </div>
        )}
      </button>
    </div>
  );
};

export default BackgroundMusic;
