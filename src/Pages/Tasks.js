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

const Tasks = () => {
  const [refresh, setRefresh] = useState(
    localStorage.getItem("clickedOKtoswitch") // NEED TO CREATE CLICKED 2 
  );
  useEffect(() => {
    let myInterval = setInterval(() => {
      setRefresh(localStorage.getItem("clickedOKtoswitch"));
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="Pagetasks">
      <Container className="p-1" fluid="sm">
        <Timer
          initialMinute={window.localStorage.getItem("lastmin")}
          initialSeconds={window.localStorage.getItem("lastsec")}
        />
        <Typography variant="h6" color="secondary" className="center">
          Choose Task
        </Typography>
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
          defaultActiveKey="1"
          id="mytab"
          className="mb-0"
          fill
          // mountOnEnter='true' can be interesting for future
        >
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
          {localStorage.getItem("lastmin") >= 10 ? (
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
      </Container>
    </div>
  );
};

export default Tasks;
