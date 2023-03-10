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

  const onClick = () => {
    if (videoRef.current.paused) {
      localStorage.setItem("videoPaused", "no");
    } else {
      localStorage.setItem("videoPaused", "yes");
    }
  };

  return (
    <div className="video">
      {!isVisible ? stopVideo() : playVideo()}
      <video
        controls={true}
        // controlsList="nofullscreen nodownload"
        // disablePictureInPicture
        className="video__player"
        ref={videoRef}
        onClick={onClick}
        // loop
        src={src}
        type="video/mp4"
        onEnded={handleVideoEnded}
      ></video>
      <div ref={endRef} />
    </div>
  );
}

export default Video;
