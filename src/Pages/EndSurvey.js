import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "react-bootstrap/Container";
import axios from "axios";

const EndSurvey = () => {
  useEffect(() => {
    let passvalue = {
      "platform.strategy": localStorage.getItem("strategy"),
      "platform.feedback": localStorage.getItem("feedback"),
    };

    const link = "/api/" + localStorage.getItem("ID");
    axios
      .patch(link, passvalue)
      .then(() => {
        console.log("Recorded strategy and feedback");
      })
      .catch((e) => {
        console.log("Unable to record strategy and feedback: ", e);
      });
  }, []);

  setTimeout(() => {
    localStorage.clear();
  }, "5000")

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
        <Typography variant="h6" className="center">
          Thank you for participating!
        </Typography>
        <p className="Homepage_p" >
          This study is conducted by Reha Tuncer, PhD student at the University
          of Luxembourg. Please contact <strong> reha.tuncer@uni.lu </strong> if you have any
          questions about the study.
        </p>
        <Typography variant="h6" className="center">
          Prolific Completion Link
        </Typography>
        <p className="center">
          <a href="https://app.prolific.co/submissions/complete?cc=C1KSE2Y7">
            {" "}
            https://app.prolific.co/submissions/complete?cc=C1KSE2Y7{" "}
          </a>
        </p>
        <Typography variant="h6" className="center">
          Prolific Completion Code
        </Typography>
        <p className="center">CW2VEF2F</p>
      </Container>
    </div>
  );
};

export default EndSurvey;
