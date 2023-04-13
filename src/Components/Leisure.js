import React from "react";
import Video from "./Video";
import "./Leisure.css";
import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

const Leisure = () => {
  const vids = [
    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/vid27.mp4", key: 0 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/vid30.mp4", key: 1 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a1_34.mp4", key: 2 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a1_9.mp4", key: 3 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a1_6.mp4", key: 4 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_6.mp4", key: 5 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/vid32.mp4", key: 6 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_41.mp4", key: 7 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_43.mp4", key: 8 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_30.mp4", key: 9 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/vid17.mp4", key: 10 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_7.mp4", key: 11 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a1_8.mp4", key: 12 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a1_5.mp4", key: 13 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_9.mp4", key: 14 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a1_12.mp4", key: 15 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_11.mp4", key: 16 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a1_13.mp4", key: 17 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/vid46.mp4", key: 18 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_12.mp4", key: 19 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a1_14.mp4", key: 20 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_13.mp4", key: 21 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a1_15.mp4", key: 22 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_14.mp4", key: 23 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a1_16.mp4", key: 24 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_15.mp4", key: 25 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a1_17.mp4", key: 26 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_28.mp4", key: 27 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/vid13.mp4", key: 28 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_16.mp4", key: 29 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a1_22.mp4", key: 30 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a1_23.mp4", key: 31 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_17.mp4", key: 32 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_18.mp4", key: 33 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_40.mp4", key: 34 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_19.mp4", key: 35 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_21.mp4", key: 36 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/vid38.mp4", key: 37 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_22.mp4", key: 38 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_24.mp4", key: 39 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/vid31.mp4", key: 40 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a1_24.mp4", key: 41 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_25.mp4", key: 42 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a1_36.mp4", key: 43 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_26.mp4", key: 44 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_27.mp4", key: 45 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/vid39.mp4", key: 46 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_29.mp4", key: 47 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/vid22.mp4", key: 48 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_31.mp4", key: 49 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/vid61.mp4", key: 50 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_32.mp4", key: 51 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/vid35.mp4", key: 52 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a2_33.mp4", key: 53 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/vid6.mp4", key: 54 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/vid63.mp4", key: 55 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/vid57.mp4", key: 56 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/vid60.mp4", key: 57 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/vid43.mp4", key: 58 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/a1_7.mp4", key: 59 },

    { src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download.mp4", key: 60 },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(1).mp4",
      key: 61,
    },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(2).mp4",
      key: 62,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(3).mp4",
      key: 63,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(4).mp4",
      key: 64,
    },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(5).mp4",
      key: 65,
    },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(6).mp4",
      key: 66,
    },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(7).mp4",
      key: 67,
    },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(8).mp4",
      key: 68,
    },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(9).mp4",
      key: 69,
    },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(10).mp4",
      key: 70,
    },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(11).mp4",
      key: 71,
    },

    // {
    //   src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(12).mp4",
    //   key: 73,
    // },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(13).mp4",
      key: 72,
    },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(14).mp4",
      key: 73,
    },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(15).mp4",
      key: 74,
    },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(16).mp4",
      key: 75,
    },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(17).mp4",
      key: 76,
    },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(18).mp4",
      key: 77,
    },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(19).mp4",
      key: 78,
    },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(20).mp4",
      key: 79,
    },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(29).mp4",
      key: 80,
    },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(30).mp4",
      key: 81,
    },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(21).mp4",
      key: 82,
    },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(22).mp4",
      key: 83,
    },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(23).mp4",
      key: 84,
    },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(24).mp4",
      key: 85,
    },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(25).mp4",
      key: 86,
    },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(26).mp4",
      key: 87,
    },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(27).mp4",
      key: 88,
    },

    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/vids/Download+(28).mp4",
      key: 89,
    },

  ];
  const [aplay, setAplay] = useState();
  const [open, setOpen] = useState(true);
  // do i need this?
  const [count, setCount] = useState(
    parseInt(localStorage.getItem("watchedVideo"))
  );
  useEffect(() => {
    let myInterval = setInterval(() => {
      setCount(parseInt(localStorage.getItem("watchedVideo")));
    }, 500);
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
        {(parseInt(localStorage.getItem("watchedVideo")) >= 0) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 1) ? (
          <>
            <Video src={vids[0]["src"]} />
            <Video src={vids[1]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 1) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 3) ? (
          <>
            <Video src={vids[2]["src"]} />
            <Video src={vids[3]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 3) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 5) ? (
          <>
            <Video src={vids[4]["src"]} />
            <Video src={vids[5]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 5) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 7) ? (
          <>
            <Video src={vids[6]["src"]} />
            <Video src={vids[7]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 7) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 9) ? (
          <>
            <Video src={vids[8]["src"]} />
            <Video src={vids[9]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 9) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 11) ? (
          <>
            <Video src={vids[10]["src"]} />
            <Video src={vids[11]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 11) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 13) ? (
          <>
            <Video src={vids[12]["src"]} />
            <Video src={vids[13]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 13) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 15) ? (
          <>
            <Video src={vids[14]["src"]} />
            <Video src={vids[15]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 15) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 17) ? (
          <>
            <Video src={vids[16]["src"]} />
            <Video src={vids[17]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 17) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 19) ? (
          <>
            <Video src={vids[18]["src"]} />
            <Video src={vids[19]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 19) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 21) ? (
          <>
            <Video src={vids[20]["src"]} />
            <Video src={vids[21]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 21) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 23) ? (
          <>
            <Video src={vids[22]["src"]} />
            <Video src={vids[23]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 23) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 25) ? (
          <>
            <Video src={vids[24]["src"]} />
            <Video src={vids[25]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 25) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 27) ? (
          <>
            <Video src={vids[26]["src"]} />
            <Video src={vids[27]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 27) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 29) ? (
          <>
            <Video src={vids[28]["src"]} />
            <Video src={vids[29]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 29) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 31) ? (
          <>
            <Video src={vids[30]["src"]} />
            <Video src={vids[31]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 31) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 33) ? (
          <>
            <Video src={vids[32]["src"]} />
            <Video src={vids[33]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 33) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 35) ? (
          <>
            <Video src={vids[34]["src"]} />
            <Video src={vids[35]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 35) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 37) ? (
          <>
            <Video src={vids[36]["src"]} />
            <Video src={vids[37]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 37) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 39) ? (
          <>
            <Video src={vids[38]["src"]} />
            <Video src={vids[39]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 39) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 41) ? (
          <>
            <Video src={vids[40]["src"]} />
            <Video src={vids[41]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 41) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 43) ? (
          <>
            <Video src={vids[42]["src"]} />
            <Video src={vids[43]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 43) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 45) ? (
          <>
            <Video src={vids[44]["src"]} />
            <Video src={vids[45]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 45) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 47) ? (
          <>
            <Video src={vids[46]["src"]} />
            <Video src={vids[47]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 47) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 49) ? (
          <>
            <Video src={vids[48]["src"]} />
            <Video src={vids[49]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 49) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 51) ? (
          <>
            <Video src={vids[50]["src"]} />
            <Video src={vids[51]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 51) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 53) ? (
          <>
            <Video src={vids[52]["src"]} />
            <Video src={vids[53]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 53) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 55) ? (
          <>
            <Video src={vids[54]["src"]} />
            <Video src={vids[55]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 55) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 57) ? (
          <>
            <Video src={vids[56]["src"]} />
            <Video src={vids[57]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 57) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 59) ? (
          <>
            <Video src={vids[58]["src"]} />
            <Video src={vids[59]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 59) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 61) ? (
          <>
            <Video src={vids[60]["src"]} />
            <Video src={vids[61]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 61) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 63) ? (
          <>
            <Video src={vids[62]["src"]} />
            <Video src={vids[63]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 63) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 65) ? (
          <>
            <Video src={vids[64]["src"]} />
            <Video src={vids[65]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 65) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 67) ? (
          <>
            <Video src={vids[66]["src"]} />
            <Video src={vids[67]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 67) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 69) ? (
          <>
            <Video src={vids[68]["src"]} />
            <Video src={vids[69]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 69) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 71) ? (
          <>
            <Video src={vids[70]["src"]} />
            <Video src={vids[71]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 71) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 73) ? (
          <>
            <Video src={vids[72]["src"]} />
            <Video src={vids[73]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 73) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 75) ? (
          <>
            <Video src={vids[74]["src"]} />
            <Video src={vids[75]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 75) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 77) ? (
          <>
            <Video src={vids[76]["src"]} />
            <Video src={vids[77]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 77) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 79) ? (
          <>
            <Video src={vids[78]["src"]} />
            <Video src={vids[79]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 79) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 81) ? (
          <>
            <Video src={vids[80]["src"]} />
            <Video src={vids[81]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 81) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 83) ? (
          <>
            <Video src={vids[82]["src"]} />
            <Video src={vids[83]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 83) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 85) ? (
          <>
            <Video src={vids[84]["src"]} />
            <Video src={vids[85]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 85) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 87) ? (
          <>
            <Video src={vids[86]["src"]} />
            <Video src={vids[87]["src"]} />
          </>
        ) : //
          null}
        {(parseInt(localStorage.getItem("watchedVideo")) >= 87) &&
          (parseInt(localStorage.getItem("watchedVideo")) <= 89) ? (
          <>
            <Video src={vids[88]["src"]} />
            <Video src={vids[89]["src"]} />
          </>
        ) : //
          null}
      </div>
    </div>
  );
};

export default Leisure;
