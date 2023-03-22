import React, { useRef, useState, useMemo, useEffect } from "react";
import "./video.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import ButtonM from "@mui/material/Button";

function Video({ src }) {
  const aplay = localStorage.getItem("treatment").includes("On");
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
        // FOR AUTOPLAY POPUP OPEN
        if (parseInt(localStorage.getItem("watchedVideo")) === 4) {
          setTimeout(() => {
            setOpen(true);
          }, "3000");
        }
      }
      console.log(videoRef.current.duration);
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
    console.log(videoRef.current.currentTime);
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
      console.log(videoRef.current.duration);
      localStorage.setItem("videoPaused", "no");
      videoRef.current.play();
      // FOR NO AUTOPLAY POPUP OPEN
      if (parseInt(localStorage.getItem("watchedVideo")) === 4) {
        setTimeout(() => {
          setOpen(true);
        }, "3000");
      }
    } else {
      localStorage.setItem("videoPaused", "yes");
      videoRef.current.pause();
    }
  };

  // ATTENTION TIMEOUT
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        localStorage.setItem("videoAttention", 1);
        stopVideo();
        setOpen(false);
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
      }, "10000");
    }
  }, [open]);

  // NORMAL CLOSING BEHAVIOR
  const handleClose = () => {
    localStorage.setItem("popQuestion", "no");
    localStorage.setItem("videoAttention", 0);
    // SCROLL TO NEXT VIDEO
    stopVideo();
    setOpen(false);
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
  };

  // WRONG CLOSING BEHAVIOR
  const handleKicked = () => {
    localStorage.setItem("popQuestion", "no");
    // SCROLL TO NEXT VIDEO
    localStorage.setItem("videoAttention", 1);
    stopVideo();
    setOpen(false);
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
          {"The current video is about ..."}
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
          <ButtonM onClick={handleKicked} autoFocus>
            <strong>Yes</strong>
          </ButtonM>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Video;
