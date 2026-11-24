import { useRef, useEffect, useState } from "react";
import "./index.scss";

const formatTime = (time) => {
  if (!Number.isFinite(time)) return "0:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
};

const LazyVideo = ({
  src,
  type,
  fallback,
  alt,
  ariaLabel,
  controls = true,
  className = "",
}) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Lazy-load the video when it enters the viewport
  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoading(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play().catch((error) => {
        console.error("Video playback failed:", error);
      });
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleSeek = (event) => {
    const video = videoRef.current;

    if (!video || !duration) return;

    const newTime = Number(event.target.value);

    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;

    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitEnterFullscreen) {
      // Safari on iPhone
      video.webkitEnterFullscreen();
    }
  };

  return (
    <div ref={containerRef} className="video-container">
      {isLoading && (
        <>
          <video
            ref={videoRef}
            className={`video ${className}`}
            autoPlay
            muted
            loop
            playsInline
            poster={fallback}
            aria-label={ariaLabel || alt}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onVolumeChange={(event) => setIsMuted(event.currentTarget.muted)}
            onLoadedMetadata={(event) =>
              setDuration(event.currentTarget.duration)
            }
            onDurationChange={(event) =>
              setDuration(event.currentTarget.duration)
            }
            onTimeUpdate={(event) =>
              setCurrentTime(event.currentTarget.currentTime)
            }
          >
            <source src={src} type={type} />
          </video>

          {controls && (
            <div className="video-controls">
              <button
                type="button"
                className="video-controls__button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
              </button>

              <span className="video-controls__time">
                {formatTime(currentTime)}
              </span>

              <input
                className="video-controls__progress"
                type="range"
                min="0"
                max={duration || 0}
                step="0.1"
                value={Math.min(currentTime, duration || 0)}
                onChange={handleSeek}
                aria-label="Seek through video"
              />

              <span className="video-controls__time">
                {formatTime(duration)}
              </span>

              <button
                type="button"
                className="video-controls__button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                <span aria-hidden="true">{isMuted ? "♪×" : "♪"}</span>
              </button>

              <button
                type="button"
                className="video-controls__button"
                onClick={toggleFullscreen}
                aria-label="View video full screen"
              >
                <span aria-hidden="true">⛶</span>
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LazyVideo;
