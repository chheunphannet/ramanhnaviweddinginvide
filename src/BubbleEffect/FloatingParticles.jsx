import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const FloatingParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    // This loads the "slim" version (lighter file size)
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent", // Keep background transparent so your image shows
          },
        },
        fpsLimit: 120, // Smooth animation
        particles: {
          color: {
            value: "#ffffff", // Bubble color (white)
          },
          move: {
            direction: "top", // Move UP
            enable: true,
            outModes: {
              default: "out", // When they go off screen, remove them
            },
            random: false,
            speed: 2, // How fast they float up
            straight: false, // Add a little wiggle
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 30, // Number of bubbles on screen
          },
          opacity: {
            value: 0.5,
            random: true, // Some bubbles transparent, some solid
          },
          shape: {
            type: "circle", // "circle" for bubbles
          },
          size: {
            value: { min: 8, max: 18 }, // Random size
          },
        },
        detectRetina: true,
      }}
      style={{
        // position: "absolute",
        // top: 0,
        // left: 0,
        // width: "100%",
        // height: "100%",
        // zIndex: -1, // Behind your text/content
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default FloatingParticles;
