import React from "react";
import Video from "./Video";
import VideoOff from "./VideoOff";
import "./Leisure.css";
import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

const LeisurePractice = () => {
  const [aplay, setAplay] = useState();
  const [open, setOpen] = useState(true);
  
  useEffect(() => {
    if (localStorage.getItem("treatment") === "autoplayOff") {
      setAplay("off");
    }
    if (localStorage.getItem("treatment") === "MPL") {
      setAplay("on");
    }
    if (localStorage.getItem("treatment") === "autoplayOn") {
      setAplay("on");
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
            Click on videos to start watching.
          </Alert>
        </Collapse>
      )}
      <div className="video__app" onClick={handleClick}>
        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_1.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_1.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_2.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_2.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid37.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid37.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_3.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_3.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_3.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_3.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_4.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_4.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_4.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_4.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_1.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_1.mp4"}
          />
        )}

        {aplay === "on" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_2.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_2.mp4"}
          />
        )}
      </div>
    </div>
  );
};

export default LeisurePractice;
