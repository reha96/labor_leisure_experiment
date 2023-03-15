import React, { useRef, useState, useMemo, useEffect } from "react";
import "./video.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import ButtonM from "@mui/material/Button";

function Video({ src }) {
  const [aplay, setAplay] = useState(
    localStorage.getItem("treatment").includes("On")
  );
  const [open, setOpen] = useState(false);
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
        if (parseInt(localStorage.getItem("watchedVideo")) === 1) {
          setOpen(true);
        }
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
    if (!open) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onClick = (e) => {
    if (videoRef.current.paused) {
      localStorage.setItem("videoPaused", "no");
      videoRef.current.play();
    } else {
      localStorage.setItem("videoPaused", "yes");
      videoRef.current.pause();
    }
    if (parseInt(localStorage.getItem("watchedVideo")) === 1) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    localStorage.setItem("popQuestion", "no");
    setOpen(false);
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
        loop={open}
      ></video>
      <div ref={endRef} />

      <Dialog
        open={open}
        onClose={null}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"This video is about ..."}
        </DialogTitle>
        <DialogContent>
          {" "}
          <DialogContentText id="alert-dialog-description">
            ... a dog barking at the neighbors.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonM onClick={handleClose} autoFocus>
            <strong>No</strong>
          </ButtonM>
          <ButtonM onClick={handleClose} autoFocus>
            <strong>Yes</strong>
          </ButtonM>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Video;
