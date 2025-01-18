// @ts-nocheck
import React, { useEffect } from 'react';
import 'aframe';
import 'ar.js';

type Props = {
  modelPath?: string; // مسیر مدل GLB یا OBJ
};

const ARScene = ({ modelPath = '/public/model/sofa/wooden_sofa.glb' }: Props) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AFRAME) {
      // اینجا می‌تونید از A-Frame و AR.js برای پیکربندی بیشتر استفاده کنید
      console.log('A-Frame and AR.js loaded');
    }
  }, []);

  return (
    <div className="sketchfab-embed-wrapper size-full">
    <a-scene embedded arjs="sourceType: webcam;">
      <a-marker preset="hiro">
        <a-entity
          gltf-model="https://hossein-ghanimati.github.io/webxr/model/sofa/wooden_sofa.glb"  // اطمینان حاصل کنید که این مسیر درست است
          scale="0.5 0.5 0.5"
          rotation="-90 0 0"
          onLoad={() => console.log('Model loaded successfully!')}
          onError={() => console.error('Error loading model')}
        ></a-entity>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  </div>
  );
};

export default ARScene;
