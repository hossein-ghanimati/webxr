// @ts-nocheck
import { useEffect, useState } from "react";
import { getOSAndBrowser } from "@/utils/public";

const ARModelViewer = () => {
  const modelDefPath =
    "https://hossein-ghanimati.github.io/webxr/model/sofa/wooden_sofa.glb";
  const modelIosPath =
    "https://hossein-ghanimati.github.io/webxr/model/sofa/Office_Chair.usdz";
  const { os, browser } = getOSAndBrowser();

  // const openUSDZInQuickLook = () => {
  //   const anchor = document.createElement("a");
  //   anchor.setAttribute("rel", "ar");
  //   anchor.setAttribute("href", modelIosPath);
  //   document.body.appendChild(anchor); // افزودن لینک به DOM
  //   anchor.click(); // کلیک روی لینک
  //   document.body.removeChild(anchor); // حذف لینک پس از کلیک
  //   console.log("asfd");
  // };

  alert(`OS -> ${os}, Browser -> ${browser}`);

  return os === "iOS" && browser === "Safari" ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button
        // onClick={openUSDZInQuickLook}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        <a
          rel="ar"
          href={modelIosPath}
        >
          <img src="" />
          <div class="ar-glyph-background">
            <div class="ar-icon"></div>
            <div class="ar-text">View in Quick AR viewer</div>
          </div>
        </a>
      </button>
    </div>
  ) : (
    <model-viewer
      src={modelDefPath}
      ios-src={modelIosPath}
      alt="A 3D model"
      shadow-intensity="1"
      camera-controls
      interaction-prompt="auto"
      auto-rotate
      ar
      magic-leap
    >
      <div className="progress-bar hide" slot="progress-bar">
        <div className="update-bar"></div>
      </div>
      <button slot="ar-button" id="ar-button">
        View in your space
      </button>
    </model-viewer>
  );
};

export default ARModelViewer;
