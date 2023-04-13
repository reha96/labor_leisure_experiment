import React, { useRef, useState, useMemo, useEffect } from "react";
import "./video.css";

function Video({ src }) {
  const aplay = localStorage.getItem("treatment").includes("On");
  const videoRef = useRef(null);
  const endRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries; // const entry = entries[0];
    setIsVisible(entry.isIntersecting);
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      stopVideo();
    } else {
      playVideo();
    }
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = videoRef.current;
    if (currentTarget) observer.observe(currentTarget);
    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [videoRef, options]);

  const playVideo = () => {
    if (aplay) {
      if (videoRef !== null && videoRef.current !== null) {
        videoRef.current.play();
        // GET TIMESTAMP AT EACH VIDEO START
        var time = new Date().getTime() / 1000; // TIME IN SECONDS
        var comb = JSON.stringify([
          time +
            " video " +
            (parseInt(localStorage.getItem("watchedVideo")) + 1) +
            ": playing, duration: " +
            videoRef.current.duration +
            ", remaining: " +
            (videoRef.current.duration - videoRef.current.currentTime),
        ]);
        const items2 = JSON.parse(localStorage.getItem("session"));
        const newItems2 = JSON.stringify([...items2, comb]);
        localStorage.setItem("session", newItems2);
      }
    }
  };

  const stopVideo = () => {
    if (videoRef !== null && videoRef.current !== null) {
      videoRef.current.pause();
    }
  };

  const handleVideoEnded = () => {
    localStorage.setItem(
      "watchedVideo",
      parseInt(localStorage.getItem("watchedVideo")) + 1
    );

    if (localStorage.getItem("treatment").includes("On")) {
      localStorage.setItem("videoPaused", "no");
    } else {
      localStorage.setItem("videoPaused", "yes");
    }
    endRef.current.scrollIntoView({ behavior: "smooth" });
    // GET TIMESTAMP AT EACH VIDEO END
    var time = new Date().getTime() / 1000; // TIME IN SECONDS
    var comb = JSON.stringify([
      time +
        " video " +
        parseInt(localStorage.getItem("watchedVideo")) +
        ": ended",
    ]);
    const items2 = JSON.parse(localStorage.getItem("session"));
    const newItems2 = JSON.stringify([...items2, comb]);
    localStorage.setItem("session", newItems2);
  };

  const onClick = (e) => {
    // GET TIMESTAMP AT EACH CLICK
    var time = new Date().getTime() / 1000; // TIME IN SECONDS
    var comb = JSON.stringify([" "]);
    if (videoRef.current.paused) {
      // WHEN PLAYING
      localStorage.setItem("videoPaused", "no");
      videoRef.current.play();
      comb = JSON.stringify([
        time +
          " video " +
          (parseInt(localStorage.getItem("watchedVideo")) + 1) +
          ": playing",
      ]);
    } else {
      // WHEN PAUSED
      localStorage.setItem("videoPaused", "yes");
      videoRef.current.pause();
      comb = JSON.stringify([
        time +
          " video " +
          (parseInt(localStorage.getItem("watchedVideo")) + 1) +
          ": paused, remaining: " +
          (videoRef.current.duration - videoRef.current.currentTime),
      ]);
    }
    const items2 = JSON.parse(localStorage.getItem("session"));
    const newItems2 = JSON.stringify([...items2, comb]);
    localStorage.setItem("session", newItems2);
  };

  return (
    <div className="video">
      <video
        onContextMenu={(e) => e.preventDefault()}
        className="video__player"
        ref={videoRef}
        onClick={onClick}
        src={src}
        type="video/mp4"
        onEnded={handleVideoEnded}
        style={{ cursor: "pointer" }}
      ></video>
      <div ref={endRef} />
    </div>
  );
}

export default Video;
