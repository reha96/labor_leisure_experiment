import React from "react";
import { useState, useEffect } from "react";
import QueryBuilderRoundedIcon from "@mui/icons-material/QueryBuilderRounded";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import axios from "axios";

const TimerPractice = (props) => {
  const { initialMinute = 0, initialSeconds = 0 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("clickedOKtoswitch", "yesPractice");
    let passvalue = {
      clikcedOkToSwitch: localStorage.getItem("clickedOKtoswitch"),
    };
    const link = "/api/" + localStorage.getItem("ID");
    axios
      .patch(link, passvalue)
      .then(() => {
        console.log("Succesfully recorded the click to close practice popup");
      })
      .catch((e) => {
        console.log(
          "Unable to recorded the click to close practice popup: ",
          e
        );
      });
    window.location.reload(true);
  };

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
          setOpen(true);
          // localStorage.setItem('popup', true);
        }
      }
      document.addEventListener("visibilitychange", (event) => {
        if (document.visibilityState === "visible") {
        } else {
          console.log("tab is inactive");
        }
      });
    }, 1000);

    return () => {
      window.localStorage.setItem("lastmin", minutes);
      window.localStorage.setItem("lastsec", seconds);
      window.localStorage.setItem(
        "progress",
        100 -
          Math.round(
            (parseInt(window.localStorage.getItem("lastmin") * 60) +
              parseInt(window.localStorage.getItem("lastsec"))) /
              1.2
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
      {
        minutes <= 0 && seconds <= 0 ? (
          window.location.replace("confirm")
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
        )
        // <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', }}>  {minutes}:{seconds < 10 ? `0${seconds}` : seconds} &nbsp; </p>
      }

      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
        
      </Button> */}
      <Dialog
        open={open}
        onClose={null}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Click to switch to the next task.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={handleClose} autoFocus>
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TimerPractice;
