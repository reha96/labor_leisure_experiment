import React from "react";
import Video from "./Video";
import VideoOff from "./VideoOff";
import "./Leisure.css";
import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

const Leisure = () => {
  const [aplay, setAplay] = useState();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("treatment").includes("On")) {
      setAplay("on");
    } else {
      setAplay("off");
    }
  }, []);
  const handleClick = () => {
    setOpen(false);
    if (aplay === "on") {
      if (localStorage.getItem("videoPaused") === "yes") {
        localStorage.setItem("videoPaused", "no");
      } else {
        localStorage.setItem("videoPaused", "yes");
      }
      // console.log(localStorage.getItem("videoPaused"));
    }

    if (aplay === "off") {
      if (localStorage.getItem("videoPaused") === "yes") {
        localStorage.setItem("videoPaused", "no");
      }
      localStorage.setItem("videoPaused", "yes");
    }
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
            Click on the video to start watching
          </Alert>
        </Collapse>
      )}
      <div className="video__app" onClick={handleClick}>
        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_5.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_5.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid27.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid27.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid30.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid30.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_34.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_34.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_5.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_5.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_6.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_6.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_6.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_6.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid32.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid32.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_41.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_41.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_43.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_43.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_30.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_30.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid17.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid17.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_7.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_7.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_8.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_8.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_8.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_8.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_9.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_9.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_9.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_9.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_12.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_12.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_11.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_11.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_13.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_13.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid46.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid46.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_12.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_12.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_14.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_14.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_13.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_13.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_15.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_15.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_14.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_14.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_16.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_16.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_15.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_15.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_17.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_17.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_28.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_28.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid13.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid13.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_16.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_16.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_22.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_22.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_23.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_23.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_17.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_17.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_18.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_18.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_40.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_40.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_19.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_19.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_21.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_21.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid38.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid38.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_22.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_22.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_24.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_24.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid31.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid31.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_24.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_24.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_25.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_25.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_36.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_36.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_26.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_26.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_27.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_27.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid39.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid39.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_29.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_29.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid22.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid22.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_31.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_31.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid61.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid61.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_32.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_32.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid35.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid35.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_33.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_33.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid6.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid6.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid63.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid63.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid57.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid57.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid60.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid60.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid43.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid43.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_7.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_7.mp4"}
          />
        )}
      </div>
    </div>
  );
};

export default Leisure;
