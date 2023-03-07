import React from "react";
import ButtonM from "@mui/material/Button";
import Container from "react-bootstrap/Container";
import "../App.css";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import * as Bowser from "bowser";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    const browser = Bowser.parse(window.navigator.userAgent);
    let passvalue = {
      platform: browser["platform"],
      browser: browser["browser"],
    };
    axios
      .post("/api", passvalue)
      .then(() => {
        console.log("new visitor added");
      })
      .catch((e) => {
        console.log("Unable to add new visitor: ", e);
      });
  }, []);

  const nextPage = (event) => {
    window.location.replace("/id");
  };
  return (
    <div className="Page">
      <style type="text/css">
        {`
        .container-sm{
            background-color: white ;
            padding-top:5vh!important;
            padding-bottom:5vh!important;
            max-width: 720px;
            height:auto;
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
          `}
      </style>
      <Container className="p-1" fluid="sm">
        <Typography variant="h5" sx={{ my: 2.5 }} className="center">
          Study Description
        </Typography>
        <p className="HomePage_p">In this study you will:</p>
        <p className="HomePage_p">
          <ul class="a">
            <li>Watch videos and type text,</li>
            <li>Complete a survey.</li>
          </ul>
        </p>
        <p className="HomePage_p">
          The total duration of the study is about <strong>20 minutes.</strong>{" "}
          <br></br>
          You receive <strong>£2</strong> for your participation and earn a
          bonus payment between <strong>£0.72</strong> and{" "}
          <strong>£1.44</strong> depending on the time you choose to spend on
          each task.
        </p>

        <Typography variant="h5" sx={{ my: 2.5 }} className="center">
          Data Collected
        </Typography>
        <p className="HomePage_p">
          In this study, we collect information about yourself, i.e. birth year,
          gender, marital status, income, employment, educational background,
          and the device you use to participate. All your personal data will be
          anonymized and will be stored in a secured server at the University of
          Luxembourg. Only the researchers working on this study will have the
          access to this data. Data collected during the study will only be used
          for the research project without personally identifying you.
        </p>
        <Alert sx={{ mb: 2 }} className="HomePage_p" severity="warning">
          {" "}
          Using the Back button in this study is disabled.{" "}
          <strong>Doing so will take you back to this page.</strong>
        </Alert>

        <div className="center">
          <ButtonM
            sx={{ mt: 2 }}
            variant="contained"
            color="secondary"
            type="button"
            onClick={nextPage}
          >
            <strong>Continue</strong>
          </ButtonM>
        </div>
      </Container>
    </div>
  );
};

export default Home;
