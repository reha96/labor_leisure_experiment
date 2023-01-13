import React from "react";
import Video from "./Video";
import VideoOff from "./VideoOff";
import "./Leisure.css";

const LeisurePractice = () => {
  return (
    <div className="Leisure">
      <div className="video__app">
        {(localStorage.getItem("treatment") === "autoplayOn" || "MPL") ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_1.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_1.mp4"}
          />
        )}

        {(localStorage.getItem("treatment") === "autoplayOn" || "MPL") ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_1.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_1.mp4"}
          />
        )}

        {(localStorage.getItem("treatment") === "autoplayOn" || "MPL") ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_2.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_2.mp4"}
          />
        )}

        {(localStorage.getItem("treatment") === "autoplayOn" || "MPL") ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_2.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_2.mp4"}
          />
        )}

        {(localStorage.getItem("treatment") === "autoplayOn" || "MPL") ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid37.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/vid37.mp4"}
          />
        )}

        {(localStorage.getItem("treatment") === "autoplayOn" || "MPL") ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_3.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_3.mp4"}
          />
        )}

        {(localStorage.getItem("treatment") === "autoplayOn" || "MPL") ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_3.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_3.mp4"}
          />
        )}

        {(localStorage.getItem("treatment") === "autoplayOn" || "MPL") ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_4.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a1_4.mp4"}
          />
        )}

        {(localStorage.getItem("treatment") === "autoplayOn" || "MPL") ? (
          <Video src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_4.mp4"} />
        ) : (
          <VideoOff
            src={"https://d26ctpn7twdgoy.cloudfront.net/vids/a2_4.mp4"}
          />
        )}
      </div>
    </div>
  );
};

export default LeisurePractice;
