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

const Timer = (props) => {
  const { initialMinute = 0, initialSeconds = 0 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("clickedOKtoswitch2", "yes12min");
    let passvalue = {
      "clikcedOKtoswitch.secondPopUp": localStorage.getItem("clickedOKtoswitch2"),
    };

    const link = "/api/" + localStorage.getItem("ID");

    axios
      .patch(link, passvalue)
      .then(() => {
        console.log("Update clikcedOKtoswitch.secondPopUp");
      })
      .catch((e) => {
        console.log("Unable to update clikcedOKtoswitch.secondPopUp: ", e);
      });
    // window.location.reload(true);
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
        }
        if (minutes === 10) {
          setOpen(true);
        }
      }
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
              7.2
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
            Now you can switch freely between tasks.
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

export default Timer;
