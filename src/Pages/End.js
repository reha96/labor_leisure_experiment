import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "react-bootstrap/Container";
import axios from "axios";

const End = () => {
  useEffect(() => {
    if (parseInt(localStorage.getItem("leisureTime")) > 0) {      
      if (parseInt(localStorage.getItem("tabCounter")) === 0) {
        localStorage.setItem("tabCounter", 1);
      }
    }
    let passvalue = {
      "browser.timespentTyping": localStorage.getItem("laborTime"),
      "browser.timespentWatching": localStorage.getItem("leisureTime"),
      "browser.timespentNotTyping": localStorage.getItem("inactiveLabor"),
      "browser.timespentNotWatching": localStorage.getItem("inactiveLeisure"),
      "browser.videoPausedFor": localStorage.getItem("videoPausedFor"),
      "browser.tabCounter": localStorage.getItem("tabCounter"),
      "browser.MPLthatcounts": localStorage.getItem("MPLthatcounts"),
      "browser.MPL1": localStorage.getItem("MPL1"),
      "browser.MPL2": localStorage.getItem("MPL2"),
      "browser.MPL3": localStorage.getItem("MPL3"),
      "browser.MPL4": localStorage.getItem("MPL4"),
      "browser.MPL5": localStorage.getItem("MPL5"),
      "browser.MPL6": localStorage.getItem("MPL6"),
      "browser.MPL7": localStorage.getItem("MPL7"),
      "browser.MPL8": localStorage.getItem("MPL8"),
      "browser.MPL9": localStorage.getItem("MPL9"),
      "clikcedOkToSwitch.secondPopUp":
        localStorage.getItem("clickedOKtoswitch2"),
    };

    const link = "/api/" + localStorage.getItem("ID");

    axios
      .patch(link, passvalue)
      .then(() => {
        console.log("Update time spent and second popup in both tasks");
      })
      .catch((e) => {
        console.log(
          "Unable to update time spent and second popup in both tasks: ",
          e
        );
      });
  }, []);

  window.setTimeout(function () {
    localStorage.clear();
    window.location.href =
      "https://uvafeb.eu.qualtrics.com/jfe/form/SV_baAihrq8YjHVLkq";
  }, 15000);

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
          End Survey
        </Typography>
        <p className="HomePage_p">
          You will be redirected to the end survey page in 15 seconds. Please{" "}
          <a href="https://uvafeb.eu.qualtrics.com/jfe/form/SV_baAihrq8YjHVLkq">
            click here
          </a>{" "}
          to skip directly to the end survey.
        </p>

        {/* <Typography variant="h6" className="center">
          Contact Information
        </Typography>
        <p className="HomePage_p">
          This study is conducted by Reha Tuncer, PhD student at the University
          of Luxembourg, under the supervision of Dr. Kerstin Bongard-Blanchy
          and Dr. Ernesto Reuben. The objective is to better understand
          individual decision-making. Please contact{" "}
          <strong>reha.tuncer@uni.lu</strong> if you have any questions about
          the study.
        </p> */}
      </Container>
    </div>
  );
};

export default End;
