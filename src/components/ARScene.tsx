// @ts-nocheck
import React from "react";

// مدل‌ویور و ای‌فریم
import '@google/model-viewer';
import 'aframe';
import 'ar.js'; // فقط برای A-Frame AR استفاده می‌شود

const ARModelViewer = () => {
  const path = "/webxr/model/sofa/wooden_sofa.glb"
  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", position: "relative"}}>
      {/* A-Frame Scene for AR */}
      <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: false;">
        {/* Marker for AR tracking */}
        <a-marker preset="hiro">
          {/* 3D Model */}
          <a-entity
            gltf-model={`url(${path})`}
            scale="0.5 0.5 0.5"
            position="0 0 0"
          ></a-entity>
        </a-marker>

        {/* Camera */}
        <a-entity camera></a-entity>
      </a-scene>

      {/* model-viewer element for displaying the 3D model */}
      <model-viewer
        src={path}
        alt="3D model"
        auto-rotate
        camera-controls
        ar
        ar-modes="webxr scene-viewer quick-look"
        style={{ width: "100%", height: "500px", position: absolute }}
        
      />
    </div>
  );
};

export default ARModelViewer;
