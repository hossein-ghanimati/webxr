// @ts-nocheck
import { useEffect, useState } from "react";
import { getOSAndBrowser } from "@/utils/public";

const ARModelViewer = () => {
  const modelDefPath =
    "/model/sofa/wooden_sofa.glb";
  const modelIosPath =
    "/model/chair.usdz";
  const { os, browser } = getOSAndBrowser();

  const viewer = browser === false ? modelIosPath : modelDefPath
  const iosAR = modelIosPath;
  // const openUSDZInQuickLook = () => {
  //   const anchor = document.createElement("a");
  //   anchor.setAttribute("rel", "ar");
  //   anchor.setAttribute("href", modelIosPath);
  //   document.body.appendChild(anchor); // افزودن لینک به DOM
  //   anchor.click(); // کلیک روی لینک
  //   document.body.removeChild(anchor); // حذف لینک پس از کلیک
  //   console.log("asfd");
  // };

  

  useEffect(() => {
    alert(`OS -> ${os}, Browser -> ${browser}`);
    alert(`viewr -> ${viewer}, iosAR -> ${iosAR}`  )
  }, [])

  return (
    <>
    <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
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
            <a rel="ar" href={modelIosPath}>
              <img src="" />
              <div class="ar-glyph-background">
                <div class="ar-icon"></div>
                <div class="ar-text">View in Quick AR viewer</div>
              </div>
            </a>
          </button>
        </div>
    <model-viewer
      src={viewer}
      // ios-src={modelIosPath}
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
      {os === "iOS" ? (
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
            <a rel="ar" href={modelIosPath}>
              <img src="" />
              <div class="ar-glyph-background">
                <div class="ar-icon"></div>
                <div class="ar-text">View in Quick AR viewer</div>
              </div>
            </a>
          </button>
        </div>
      ) : (
        <button slot="ar-button" id="ar-button">
          View in your space
        </button>
      )}
    </model-viewer>
    </>
  );
};

export default ARModelViewer;
