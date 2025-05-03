// src/components/VideoPlayer.jsx
import React from 'react';
import './pages.css'; // puedes aprovechar estilos generales

export default function VideoCV() {
  // Asume que tu vídeo está en public/videos/miVideo.mp4
  const videoUrl = `${process.env.PUBLIC_URL}/files/CV_VIDEO_small.mp4`;

  return (
    <section className="cv-wrapper">
      <div className="video-container">
        <video
          src={videoUrl}
          width="800"
          controls
          poster={`${process.env.PUBLIC_URL}/videos/miVideo-poster.jpg`} 
        >
          Tu navegador no soporta el elemento <code>video</code>.
        </video>
      </div>
    </section>
  );
}
