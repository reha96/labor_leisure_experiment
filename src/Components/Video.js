import React, { useRef, useState, useMemo, useEffect } from "react";
import "./video.css";

function Video({ src }) {
  const [aplay, setAplay] = useState(
    localStorage.getItem("treatment").includes("On")
  );

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

  const handleKeyDown = (event) => {
    if (localStorage.getItem("activeTab") === "Leisure") {
      event.preventDefault();
    }
    if (event.metaKey) {
      event.preventDefault();
      console.log("CMD key press")
    }
    if (event.ctrlKey) {
      event.preventDefault();
      console.log("CTRL key press")
    }
    if (event.altKey) {
      event.preventDefault();
      console.log("ALT key press")
    }


  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    !isVisible ? stopVideo() : playVideo();
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
        //setMute(0);
      }
    }
  };

  const stopVideo = () => {
    if (videoRef !== null && videoRef.current !== null) {
      videoRef.current.pause();
      //setMute(1);
    }
  };

  const handleVideoEnded = () => {
    localStorage.setItem(
      "watchedVideo",
      parseInt(localStorage.getItem("watchedVideo")) + 1
    );
    // console.log("Video watched " + localStorage.getItem("watchedVideo"));
    if (localStorage.getItem("treatment").includes("On")) {
      localStorage.setItem("videoPaused", "no");
    } else {
      localStorage.setItem("videoPaused", "yes");
    }
    endRef.current.scrollIntoView({ behavior: "smooth" });
    // videoRef.current.scrollIntoView(false);
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
      ></video>
      <div ref={endRef} />
    </div>
  );
}

export default Video;
