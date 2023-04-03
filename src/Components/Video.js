import React, { useRef, useState, useMemo, useEffect } from "react";
import "./video.css";

function Video({ src }) {
  const aplay = localStorage.getItem("treatment").includes("On");
  const videoRef = useRef(null);
  const endRef = useRef(null);
  const page = localStorage.getItem("activeTab");
  const [watchSess, setWatchSess] = useState([]);

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
      }
    }
  };

  const stopVideo = () => {
    if (videoRef !== null && videoRef.current !== null) {
      videoRef.current.pause();
      if (page === "Labor") {
        var duration = videoRef.current.duration;
        if (isNaN(duration)) {
          duration = 0;
        }
        var current = videoRef.current.currentTime;
        if (isNaN(current)) {
          current = 0;
        }
        var diff = duration - current;
        var unit = [duration, current, diff];
        setWatchSess(watchSess.concat(unit));
        localStorage.setItem("watchSess", watchSess);
      }
    }
  };

  const handleVideoEnded = () => {
    localStorage.setItem(
      "watchedVideo",
      parseInt(localStorage.getItem("watchedVideo")) + 1
    );
    localStorage.setItem(
      "watchtime",
      parseInt(localStorage.getItem("watchtime")) + videoRef.current.currentTime
    );
    if (localStorage.getItem("treatment").includes("On")) {
      localStorage.setItem("videoPaused", "no");
    } else {
      localStorage.setItem("videoPaused", "yes");
    }
    endRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onClick = (e) => {
    if (videoRef.current.paused) {
      localStorage.setItem("videoPaused", "no");
      videoRef.current.play();
    } else {
      localStorage.setItem("videoPaused", "yes");
      videoRef.current.pause();
    }
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
