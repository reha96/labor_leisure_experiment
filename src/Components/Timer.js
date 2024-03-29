import React from "react";
import { useState, useEffect } from "react";
import QueryBuilderRoundedIcon from "@mui/icons-material/QueryBuilderRounded";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

const Timer = (props) => {
  const {
    initialMinute = 0,
    initialSeconds = 0,
    initialLabor = 0,
    initialLeisure = 0,
    initialLaborNot = 0,
    initialLeisureNot = 0,
    initialVideoPausedFor = 0,
  } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [laborcount, setLaborcount] = useState(initialLabor);
  const [leisurecount, setLeisurecount] = useState(initialLeisure);
  const [inactivelabor, setInactivelabor] = useState(initialLaborNot);
  const [inactiveleisure, setInactiveleisure] = useState(initialLeisureNot);
  const [videoPausedFor, setVideoPausedFor] = useState(initialVideoPausedFor);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
      if (
        // CHECK PARTICIPANT ACTIVITY
        document.visibilityState === "visible" ||
        localStorage.getItem("mouseout") === "false"
      ) {
        if (localStorage.getItem("activeTab") === "Labor") {
          setLaborcount(parseInt(laborcount) + 1);
        }
        if (localStorage.getItem("activeTab") === "Leisure") {
          setLeisurecount(parseInt(leisurecount) + 1);
        }
        if (localStorage.getItem("activeTab") === "Leisure") {
          if (localStorage.getItem("videoPaused") === "yes") {
            setVideoPausedFor(parseInt(videoPausedFor) + 1);
          }
        }
      }
      if (
        document.visibilityState !== "visible" ||
        localStorage.getItem("mouseout") === "true"
      ) {
        if (localStorage.getItem("activeTab") === "Labor") {
          setInactivelabor(parseInt(inactivelabor) + 1);
        }
        if (localStorage.getItem("activeTab") === "Leisure")
          setInactiveleisure(parseInt(inactiveleisure) + 1);
      }
      if (localStorage.getItem("mouseout") === "true") {
        // GET TIMESTAMP AT EACH MOUSEOUT (SUM EACH ENTRY FOR TOTAL IN SECONDS)
        var t = new Date().getTime() / 1000; // TIME IN SECONDS
        var c = JSON.stringify([t + " mouseout:true"]);
        const items2 = JSON.parse(localStorage.getItem("session"));
        const newItems2 = JSON.stringify([...items2, c]);
        localStorage.setItem("session", newItems2);
      }
    }, 1000);
    return () => {
      localStorage.setItem("laborTime", laborcount);
      localStorage.setItem("leisureTime", leisurecount);
      localStorage.setItem("inactiveLabor", inactivelabor);
      localStorage.setItem("inactiveLeisure", inactiveleisure);
      localStorage.setItem("videoPausedFor", videoPausedFor);
      window.localStorage.setItem("lastmin", minutes);
      window.localStorage.setItem("lastsec", seconds);
      window.localStorage.setItem(
        "progress",
        100 -
        Math.round(
          (parseInt(window.localStorage.getItem("lastmin") * 60) +
            parseInt(window.localStorage.getItem("lastsec"))) /
          12
        )
      );

      clearInterval(myInterval);
    };
  });
  return (
    <div className="timer">
      <LinearProgress
        variant="determinate"
        value={parseInt(window.localStorage.getItem("progress"))}
      />
      {minutes <= 0 && seconds <= 0 ? (
        window.location.replace("end")
      ) : (
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <QueryBuilderRoundedIcon /> {minutes}:
          {seconds < 10 ? `0${seconds}` : seconds} &nbsp;
        </Typography>
      )}
    </div>
  );
};

export default Timer;
