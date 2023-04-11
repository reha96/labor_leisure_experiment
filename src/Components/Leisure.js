import React from "react";
import Video from "./Video";
import "./Leisure.css";
import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

const Leisure = () => {
  const [aplay, setAplay] = useState();
  const [open, setOpen] = useState(true);
  const [count, setCount] = useState(
    parseInt(localStorage.getItem("watchedVideo"))
  );
  useEffect(() => {
    let myInterval = setInterval(() => {
      setCount(localStorage.getItem("watchedVideo"));
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  useEffect(() => {
    if (localStorage.getItem("treatment").includes("On")) {
      setAplay("on");
      localStorage.setItem("aplay", aplay);
    } else {
      setAplay("off");
      localStorage.setItem("aplay", aplay);
    }
  }, []);
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <div className="Leisure">
      {aplay === "on" ? null : (
        <Collapse in={open}>
          <Alert
            severity="info"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 0, mt: 1 }}
          >
            Click on a video to start watching
          </Alert>
        </Collapse>
      )}
      {/* load vids 2 by 2 */}
      <div className="video__app" onClick={handleClick}>
        {count <= 1 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid27.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid30.mp4"}
            />
          </>
        ) : null}

        {count <= 2 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_34.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_9.mp4"}
            />
          </>
        ) : null}

        {count <= 3 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_6.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_6.mp4"}
            />
          </>
        ) : null}

        {count <= 5 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid32.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_41.mp4"}
            />
          </>
        ) : null}

        {count <= 7 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_43.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_30.mp4"}
            />
          </>
        ) : null}

        {count <= 9 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid17.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_7.mp4"}
            />
          </>
        ) : null}

        {count <= 11 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_8.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_5.mp4"}
            />
          </>
        ) : null}

        {count <= 13 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_9.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_12.mp4"}
            />
          </>
        ) : null}

        {count <= 15 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_11.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_13.mp4"}
            />
          </>
        ) : null}

        {count <= 17 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid46.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_12.mp4"}
            />
          </>
        ) : null}

        {count <= 19 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_14.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_13.mp4"}
            />
          </>
        ) : null}

        {count <= 21 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_15.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_14.mp4"}
            />
          </>
        ) : null}

        {count <= 23 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_16.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_15.mp4"}
            />
          </>
        ) : null}

        {count <= 25 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_17.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_28.mp4"}
            />
          </>
        ) : null}

        {count <= 27 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid13.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_16.mp4"}
            />
          </>
        ) : null}

        {count <= 29 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_22.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_23.mp4"}
            />
          </>
        ) : null}

        {count <= 31 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_17.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_18.mp4"}
            />
          </>
        ) : null}

        {count <= 33 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_40.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_19.mp4"}
            />
          </>
        ) : null}

        {count <= 35 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_21.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid38.mp4"}
            />
          </>
        ) : null}

        {count <= 37 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_22.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_24.mp4"}
            />
          </>
        ) : null}

        {count <= 39 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid31.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_24.mp4"}
            />
          </>
        ) : null}

        {count <= 41 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_25.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_36.mp4"}
            />
          </>
        ) : null}

        {count <= 43 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_26.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_27.mp4"}
            />
          </>
        ) : null}

        {count <= 45 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid39.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_29.mp4"}
            />
          </>
        ) : null}

        {count <= 47 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid22.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_31.mp4"}
            />
          </>
        ) : null}

        {count <= 49 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid61.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_32.mp4"}
            />
          </>
        ) : null}

        {count <= 49 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid35.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_33.mp4"}
            />
          </>
        ) : null}

        {count <= 51 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid6.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid63.mp4"}
            />
          </>
        ) : null}

        {count <= 53 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid57.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid60.mp4"}
            />
          </>
        ) : null}

        {count <= 55 ? (
          <>
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid43.mp4"}
            />
            <Video
              src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_7.mp4"}
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Leisure;
