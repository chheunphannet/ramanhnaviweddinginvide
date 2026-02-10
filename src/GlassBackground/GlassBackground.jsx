import React from "react";

const GlassBackground = ({ children }) => {
  return (
    <div style={styles.pageWrapper}>
      <div style={styles.orbTopLeft}></div>
      <div style={styles.orbBottomRight}></div>
      <div style={styles.orbCenter}></div>

      <div style={styles.mobileGlassContainer}>{children}</div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    minHeight: "100vh",
    width: "100%",
    background: "#f0f2f5",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  orbTopLeft: {
    position: "absolute",
    top: "-10%",
    left: "-10%",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(255,200,180,1) 0%, rgba(255,160,140,0) 70%)",
    filter: "blur(60px)",
    zIndex: 0,
  },
  orbBottomRight: {
    position: "absolute",
    bottom: "-10%",
    right: "-10%",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(160,180,255,1) 0%, rgba(160,180,255,0) 70%)",
    filter: "blur(60px)",
    zIndex: 0,
  },
  orbCenter: {
    position: "absolute",
    top: "40%",
    left: "20%",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(255,220,220,0.8) 0%, rgba(255,255,255,0) 70%)",
    filter: "blur(80px)",
    zIndex: 0,
  },

  mobileGlassContainer: {
    alignItems: "center",
    justifyContent: "start",
    maxWidth: "430px",
    width: "100%",
    minHeight: "100vh",
    // padding: "20px",
    // background: "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24px)",
    border: "1px solid rgba(255, 255, 255, 0.6)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",

    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
  },
};

export default GlassBackground;
