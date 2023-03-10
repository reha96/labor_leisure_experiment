import React, { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Timer from "../Components/Timer";
import Container from "react-bootstrap/Container";
import "../App.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Labor from "../Components/Labor";
import Leisure from "../Components/Leisure";
import Typography from "@mui/material/Typography";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import SlowMotionVideoOutlinedIcon from "@mui/icons-material/SlowMotionVideoOutlined";
import ButtonM from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";

const Tasks = () => {
  const [key, setKey] = useState(localStorage.getItem("activePage"));
  const [refresh, setRefresh] = useState(false);
  const [counter, setCounter] = useState(
    parseInt(localStorage.getItem("tabCounter"))
  );
  const [open, setOpen] = useState(false);

  const handleSelect = (key) => {
    if (key === "1") {
      localStorage.setItem("activeTab", "Labor");
      setKey("1");
      setRefresh(true);
      localStorage.setItem("activePage", 1);
      setCounter(counter + 1);
      localStorage.setItem("tabCounter", counter);
    }
    if (key === "2") {
      localStorage.setItem("activeTab", "Leisure");
      setKey("2");
      setCounter(counter + 1);
      localStorage.setItem("tabCounter", counter);
      // setRefresh(true)
      localStorage.setItem("activePage", 2);
      if (localStorage.getItem("treatment") === "autoplayOn") {
        localStorage.setItem("videoPaused", "no");
      }
      if (localStorage.getItem("treatment") === "autoplayOff") {
        // localStorage.setItem("videoPaused", "yes");
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
    if (localStorage.getItem("activeTab") === "Labor") {
      setKey("1");
      localStorage.setItem("activePage", 1);
    }
    if (localStorage.getItem("activeTab") === "Leisure") {
      setKey("2");
      localStorage.setItem("activePage", 2);
    }
  };

  // const handleClose2 = () => {
  //   setOpen2(false);
  //   localStorage.setItem("clickedOKtoswitch2", "yes");
  //   localStorage.setItem("activePage", 1);
  //   setKey("1"); // if state changes it works, if state remains it does not rerender
  // };

  useEffect(() => {
    let myInterval = setInterval(() => {
      // if (
      //   parseInt(localStorage.getItem("lastmin")) === 10 &&
      //   parseInt(localStorage.getItem("lastsec")) === 0
      // ) {
      //   setOpen2(true);
      // }

      if (localStorage.getItem("lottery") === "lotteryWin") {
        if (
          parseInt(localStorage.getItem("inactiveLabor")) +
            parseInt(localStorage.getItem("laborTime")) ===
          parseInt(localStorage.getItem("time_choice"))
        ) {
          if (localStorage.getItem("activeTab") === "Labor") {
            localStorage.setItem("timesUp", "timesUpLabor");
            setOpen(true);
            localStorage.setItem("activeTab", "Leisure");
          }
        }
        if (
          parseInt(localStorage.getItem("inactiveLeisure")) +
            parseInt(localStorage.getItem("leisureTime")) ===
          parseInt(720 - localStorage.getItem("time_choice"))
        ) {
          if (localStorage.getItem("activeTab") === "Leisure") {
            localStorage.setItem("timesUp", "timesUpLeisure");
            setOpen(true);
            localStorage.setItem("activeTab", "Labor");
          }
        }
      }
    }, 500);

    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="Pagetasks">
      <Container className="p-1" fluid="sm">
        <Timer
          initialMinute={localStorage.getItem("lastmin")}
          initialSeconds={localStorage.getItem("lastsec")}
          initialLabor={localStorage.getItem("laborTime")}
          initialLeisure={localStorage.getItem("leisureTime")}
          initialLaborNot={localStorage.getItem("inactiveLabor")}
          initialLeisureNot={localStorage.getItem("inactiveLeisure")}
          initialVideoPausedFor={localStorage.getItem("videoPausedFor")}
        />
        {/* <Typography variant="h6" color="secondary" className="center">
          Choose Task
        </Typography> */}
        <style type="text/css">
          {`
        .bg-info {
          background-color: rgba( 192, 223, 237,var(--bs-bg-opacity))!important;
        }
        .button {
          background-color: purple;
        }

        .btn-primary {
          --bs-btn-color: #fff;
          --bs-btn-bg: purple;
          --bs-btn-border-color: purple;
          --bs-btn-hover-color: #fff;
          --bs-btn-hover-bg: #660066;
          --bs-btn-hover-border-color: #660066;
          --bs-btn-focus-shadow-rgb: 128, 0,128;
          --bs-btn-active-color: #660066;
          --bs-btn-active-bg: #660066;
          --bs-btn-active-border-color: #800080cf;
          --bs-btn-active-shadow: inset 0 3px 5pxrgba(0, 0, 0, 0.125);
          --bs-btn-disabled-color: #fff;
          --bs-btn-disabled-bg: #800080cf;
          --bs-btn-disabled-border-color: #800080cf;
          margin-bottom: auto;
        }
      
        .tab-content {
          background-color: white;
          // border-bottom: 5px solid white ;
          // border-radius: 15px;
        }
        .nav-fill{
          color: white;
        }
        .nav {
          --bs-nav-link-color: white;
          --bs-nav-link-hover-color: #e9ecef;
        }
        .nav-tabs {
          color: #294198;
          background-color: #294198;
          --bs-nav-tabs-link-active-color: #294198;
          --bs-nav-tabs-border-radius: 0px;
          --bs-nav-tabs-border-width: 1px;
          --bs-nav-tabs-border-color: white;
          --bs-nav-tabs-link-active-border-color: white white white;
          
        }
        .container-sm {
          padding-bottom:5vh;
          max-width: 720px;
        }

        .Pagetasks{
          background-color: #F3F6FF;
          height: 100vh;
        }


        `}
        </style>
        <Tabs
          activeKey={key}
          defaultActiveKey={
            localStorage.getItem("lottery") === "lotteryWin"
              ? localStorage.getItem("timesUp") === "timesUpLabor"
                ? "2"
                : "1"
              : localStorage.getItem("activePage")
            // (k) => setKey(k)
            //   ? "2"
            //   : "1"
          }
          id="mytab"
          className="mb-0"
          fill
          onSelect={handleSelect}
          // key={refresh}
        >
          {localStorage.getItem("timesUp") === "timesUpLabor" ? (
            <Tab
              eventKey="1"
              title={
                <Typography variant="h6">
                  {" "}
                  <KeyboardOutlinedIcon /> Type
                </Typography>
              }
              disabled
            >
              <Labor />
            </Tab>
          ) : (
            <Tab
              eventKey="1"
              title={
                <Typography variant="h6">
                  {" "}
                  <KeyboardOutlinedIcon /> Type
                </Typography>
              }
            >
              <Labor />
            </Tab>
          )}
          {localStorage.getItem("timesUp") === "timesUpLeisure" ? (
            <Tab
              eventKey="2"
              title={
                <Typography variant="h6">
                  {" "}
                  <SlowMotionVideoOutlinedIcon /> Watch{" "}
                </Typography>
              }
              disabled
            >
              <Leisure />
            </Tab>
          ) : (
            <Tab
              eventKey="2"
              title={
                <Typography variant="h6">
                  {" "}
                  <SlowMotionVideoOutlinedIcon /> Watch{" "}
                </Typography>
              }
            >
              <Leisure />
            </Tab>
          )}
        </Tabs>
        <Outlet />

        <Dialog
          open={open}
          onClose={null}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Time is up!"}</DialogTitle>
          <DialogContent>
            {" "}
            <DialogContentText id="alert-dialog-description">
              Now you need to spend time on the other task.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <ButtonM onClick={handleClose} autoFocus>
              <strong>Continue</strong>
            </ButtonM>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
};

export default Tasks;
