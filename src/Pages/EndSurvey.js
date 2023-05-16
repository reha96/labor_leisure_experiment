import React from "react";
import Typography from "@mui/material/Typography";
import Container from "react-bootstrap/Container";
import axios from "axios";

const EndSurvey = () => {
  const first = localStorage.getItem("version") === "first";
  const second = localStorage.getItem("version") === "second";
  const mpl = localStorage.getItem("mpl") === 'true';

  window.setTimeout(function () {
    localStorage.removeItem('activePage');
    localStorage.removeItem('speed');
    localStorage.removeItem('updateOnce');
    localStorage.removeItem('transc');
    localStorage.removeItem('localcount');
    localStorage.removeItem('stop2');
    localStorage.removeItem('stop');
    localStorage.removeItem('progress');
  }, 2000);

  // FIRST WEEK / MPL ENDS HERE AND SAVES TO DB
  if (first || mpl) {
    let passvalue = {
      attention1: localStorage.getItem("attentionFail1"),
      attention2: localStorage.getItem("attentionFail2"),
      treatment: localStorage.getItem("treatment"),
      timeChoice: localStorage.getItem("time_choice"),
      lottery: localStorage.getItem("lottery"),
      ID: localStorage.getItem("prolificID"),
      "platform.MPLthatcounts": localStorage.getItem("MPLthatcounts"),
      "platform.MPL1": localStorage.getItem("MPL1"),
      "platform.MPL2": localStorage.getItem("MPL2"),
      "platform.MPL3": localStorage.getItem("MPL3"),
      "platform.MPL4": localStorage.getItem("MPL4"),
      "platform.MPL5": localStorage.getItem("MPL5"),
      "platform.MPL6": localStorage.getItem("MPL6"),
      "platform.MPL7": localStorage.getItem("MPL7"),
      "platform.MPL8": localStorage.getItem("MPL8"),
      "platform.MPL9": localStorage.getItem("MPL9"),
      "clikcedOkToSwitch.Practice": localStorage.getItem("clickedOKtoswitch"),
    };

    const link = "/api/" + localStorage.getItem("ID");
    axios
      .patch(link, passvalue)
      .then(() => {
        console.log("Recorded first week decisions");
      })
      .catch((e) => {
        console.log("Unable to record first week decisions: ", e);
      });
  }

  // SECOND WEEK ENDS HERE AFTER TASK EXECUTION
  if (second) {
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
  }

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
        {first || mpl ? (
          <>
            <Typography variant="h6" className="center">
              Thank you for participating in the first session!
            </Typography>
            <p className="HomePage_p">
              The next session takes place tomorrow. We will send a reminder
              message to you on Prolific before the next sesion.
            </p>
            <Typography variant="h6" className="center">
              Prolific Completion Link (Session 1 of 2)
            </Typography>
            <p className="center">

              <a href="https://app.prolific.co/submissions/complete?cc=CGERZV8L">
                {" "}
                https://app.prolific.co/submissions/complete?cc=CGERZV8L{" "}
              </a>
            </p>
            <Typography variant="h6" className="center">
              Prolific Completion Code
            </Typography>
            <p className="center">CGERZV8L</p>
          </>
        ) : null}
        {second ? (
          <>
            <Typography variant="h6" className="center">
              Thank you for participating in the second session!
            </Typography>
            <p className="HomePage_p">
              This study is conducted by Reha Tuncer, PhD student at the
              University of Luxembourg. Please contact{" "}
              <strong> reha.tuncer@uni.lu </strong> if you have any questions
              about the study.
            </p>
            <Typography variant="h6" className="center">
              Prolific Completion Link (Session 2 of 2)
            </Typography>
            <p className="center">

              <a href="https://app.prolific.co/submissions/complete?cc=COSOX11Y">
                {" "}
                https://app.prolific.co/submissions/complete?cc=COSOX11Y{" "}
              </a>
            </p>
            <Typography variant="h6" className="center">
              Prolific Completion Code
            </Typography>
            <p className="center">COSOX11Y</p>
          </>
        ) : null}
      </Container>
    </div>
  );
};

export default EndSurvey;
