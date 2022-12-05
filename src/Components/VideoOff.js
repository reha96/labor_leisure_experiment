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

  const playVideo = () => {
    if (videoRef !== null && videoRef.current !== null) {
      //   localStorage.setItem("activeTab", "Leisure");
      // videoRef.current.play();
      // setPlaying(true);
      //setMute(0);
    }
  };

  const stopVideo = () => {
    if (videoRef !== null && videoRef.current !== null) {
      videoRef.current.pause();
      //   localStorage.setItem("activeTab", "Labor");
      // setPlaying(false);
      //setMute(1);
    }
  };

  // const onVideoPress = () => {
  //     if (playing){
  //         setPlaying(false);
  //         console.log("play status: " + playing)
  //         videoRef.current.pause();

  //     } else {
  //         setPlaying(true);
  //         console.log("play status: " + playing)
  //         videoRef.current.play();
  //     }
  // };

  const handleVideoEnded = () => {
    console.log("Video ended!");
    endRef.current.scrollIntoView({ behavior: "smooth" });
    // setOpen(true)
  };

  // const handleClose = () => {
  //     setOpen(false)
  // };

  // const handleCloseReplay = () => {
  //     setOpen(false);
  //     videoRef.current.play();
  // };

  // const handleCloseNext = () => {
  //     setOpen(false);
  //     endRef.current.scrollIntoView({ behavior: "smooth" });
  // };

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
        type="video/mp4"
        onEnded={handleVideoEnded}
      ></video>

      {/* <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                disableRestoreFocus
                disableScrollLock 
            >
                {/* <DialogTitle id="responsive-dialog-title">
                    {"Keep watching?"}
                </DialogTitle> */}
      {/* <DialogContent>
                    <DialogContentText>
                        Keep watching?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <ButtonM autoFocus onClick={handleCloseReplay}>
                        Play again
                    </ButtonM>
                    <ButtonM onClick={handleCloseNext} autoFocus>
                        Next
                    </ButtonM>
                </DialogActions>
            </Dialog> */}
      <div ref={endRef} />
    </div>
  );
}

export default VideoOff;
