import React, { useRef, useState, useMemo, useEffect } from "react";
import "./video.css";

function Video({ src }) {
  // const [mute, setMute] = useState(0);
  // const [count, setCount] = useState(0);

  const [playing, setPlaying] = useState(false);
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
    if (videoRef !== null && videoRef.current !== null) {
      videoRef.current.play();
      //setMute(0);
    }
  };

  const stopVideo = () => {
    if (videoRef !== null && videoRef.current !== null) {
      videoRef.current.pause();
      //setMute(1);
    }
  };

  const handleVideoEnded = () => {
    console.log("Video ended!");
    endRef.current.scrollIntoView({ behavior: "smooth" });
    // videoRef.current.scrollIntoView(false);
  };

  return (
    <div className="video">
      {!isVisible ? stopVideo() : playVideo()}
      {/* {videoRef.current.paused ? localStorage.setItem("videoPaused", "yes") : localStorage.setItem("videoPaused", "no")} */}
      <video
        controls={true}
        // controlsList="nofullscreen nodownload"
        // disablePictureInPicture
        className="video__player"
        ref={videoRef}
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
