import React from "react";
import Video from "./Video";
import VideoOff from "./VideoOff";
import "./Leisure.css";

const Leisure = () => {
  const handleClick = () => {
    if (localStorage.getItem("treatment") === "autoplayOn") {
      if (localStorage.getItem("videoPaused") === "yes") {
        localStorage.setItem("videoPaused", "no");
      } else {
        localStorage.setItem("videoPaused", "yes");
      }
      console.log(localStorage.getItem("videoPaused"));
    }

    if (localStorage.getItem("treatment") === "autoplayOff") {
      if (localStorage.getItem("videoPaused") === "yes") {
        localStorage.setItem("videoPaused", "no");
      }
      localStorage.setItem("videoPaused", "yes");
    }
  };

  return (
    <div className="Leisure">
      <div className="video__app" onClick={handleClick}>
        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_5.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_5.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid27.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid27.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid30.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid30.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_5.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_5.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_6.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_6.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_6.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_6.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid32.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid32.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid60.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid60.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid17.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid17.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_7.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_7.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_7.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_7.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid43.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid43.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_8.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_8.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_8.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_8.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_9.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_9.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_9.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_9.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_12.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_12.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_11.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_11.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_13.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_13.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid46.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid46.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_12.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_12.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_14.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_14.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_13.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_13.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_15.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_15.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_14.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_14.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_16.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_16.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_15.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_15.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_17.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_17.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid13.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid13.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_16.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_16.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_22.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_22.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_23.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_23.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_17.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_17.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_18.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_18.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid21.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid21.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_19.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_19.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_21.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_21.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid38.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid38.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_22.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_22.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_24.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_24.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid31.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid31.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_24.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_24.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_25.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_25.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_34.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_34.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_36.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_36.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_26.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_26.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_27.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_27.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_28.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_28.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid39.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid39.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_29.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_29.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid22.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid22.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_30.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_30.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_31.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_31.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid61.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid61.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_32.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_32.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid35.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid35.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_33.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_33.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid6.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid6.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid63.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid63.mp4"}
          />
        )}

        {localStorage.getItem("treatment") === "autoplayOn" ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid57.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid57.mp4"}
          />
        )}
      </div>
    </div>
  );
};

export default Leisure;
