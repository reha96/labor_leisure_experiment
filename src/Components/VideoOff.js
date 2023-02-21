import React, { useRef, useState, useMemo, useEffect } from "react";
import "./video.css";

function VideoOff({ src }) {
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

//   const playVideo = () => {
//     if (videoRef !== null && videoRef.current !== null) {
//     localStorage.setItem("videoPaused", "no");
//     videoRef.current.play();
//     }
//   };

  const stopVideo = () => {
    if (videoRef !== null && videoRef.current !== null) {
      videoRef.current.pause();
      localStorage.setItem("videoPaused", "yes");
      // setPlaying(false);
      //setMute(1);
    }
  };

  const handleVideoEnded = () => {
    localStorage.setItem("watchedVideo", parseInt(localStorage.getItem("watchedVideo"))+1);
    console.log("Video watched " + localStorage.getItem("watchedVideo"));
    endRef.current.scrollIntoView({ behavior: "smooth" });
    localStorage.setItem("videoPaused", "yes");
    // setOpen(true)
  };

  const onPlay = () => {
    localStorage.setItem("videoPaused", "no");
  };

  return (
    <div className="video">
      {!isVisible ? stopVideo() : null}
      <video
        // playsInline
        //autoPlay
        //muted
        //onClick={!playing ? null : stopVideo()}
        controls={true}
        className="video__player"
        ref={videoRef}
        // loop
        src={src}
        playing={playing}
        type="video/mp4"
        onEnded={handleVideoEnded}
        onPlay={onPlay}
      ></video>
      <div ref={endRef} />
    </div>
  );
}

export default VideoOff;
