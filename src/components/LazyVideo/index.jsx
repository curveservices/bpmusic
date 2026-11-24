import React, { useRef, useEffect, useState } from "react";
import "./index.scss";

const LazyVideo = ({ src, type, fallback, ariaLabel, controls, ...props }) => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoading(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={videoRef} className="video-container">
      {isLoading ? (
        <video
          {...props}
          autoPlay
          muted
          playsInline
          loop
          controls
          aria-label={ariaLabel}
          className="video"
        >
          <source src={src} type={type} />
          <img loading="lazy" src={fallback} alt="Fallback image" />
          <track
            src={src}
            kind="captions"
            srclang="en"
            label="english_captions"
          />
        </video>
      ) : (
        <div />
      )}
    </div>
  );
};

export default LazyVideo;
