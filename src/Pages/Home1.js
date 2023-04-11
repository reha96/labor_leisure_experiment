import ButtonM from "@mui/material/Button";
import Container from "react-bootstrap/Container";
import "../App.css";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import * as Bowser from "bowser";
import axios from "axios";

const Home1 = () => {
  const first = localStorage.getItem("version") === "first";
  const second = localStorage.getItem("version") === "second";
  const mpl = localStorage.getItem("version") === "mpl";
  const [checked, setChecked] = useState(false);
  const badcon = parseFloat(localStorage.getItem("speed")) < 20; // NEED TO CHECK THIS WITH ACTUAL PARTICIPATNS
  const [typedValue, setTypedValue] = useState("");
  const browser = Bowser.parse(window.navigator.userAgent);
  const chromium =
    browser["browser"]["name"] === "Chrome" ||
    browser["browser"]["name"] === "Microsoft Edge";
  const desktop = browser["platform"]["type"] === "desktop";
  const handleChange = async (event) => {
    setChecked(event.target.checked);
    localStorage.setItem("stop", false);
  };
  localStorage.setItem("updateOnce", "no");

  if (second) {
    // ASYNC GET COMMAND TO ACCESS FIRST VERSION TREATMENT, LOTTERY
    const link = "/api/" + typedValue;
    axios
      .get(link)
      .then(function (response) {
        localStorage.setItem("ID", response.data[0]["ID"]);
        localStorage.setItem("time_choice", response.data[0]["timeChoice"]);
        localStorage.setItem("treatment", response.data[0]["treatment"]);
        localStorage.setItem("lottery", response.data[0]["lottery"]);
        localStorage.setItem("attentionFail1", response.data[0]["attention1"]);
        localStorage.setItem("attentionFail2", response.data[0]["attention2"]);
        localStorage.setItem(
          "clickedOKtoswitch",
          response.data[0]["clikcedOkToSwitch"]["Practice"]
        );
      })
      .catch((e) => {
        console.log("Unable to GET participant: ", e);
      });
  }

  useEffect(() => {
    // POST ONLY IN FIRST/MPL VERSION
    if (first || mpl) {
      // CREATION OF PARTICIPANT IN DB BEFORE PROLIFIC ID
      let passvalue = {
        attention1: localStorage.getItem("attentionFail1"),
        attention2: localStorage.getItem("attentionFail2"),
        treatment: localStorage.getItem("treatment"),
        lottery: localStorage.getItem("lottery"),
        platform: {
          browser: browser["browser"]["name"],
          platform: browser["platform"]["type"],
          os: browser["os"]["name"],
        },
        browser: { speed: localStorage.getItem("speed") },
        ID: localStorage.getItem("ID"),
        clikcedOkToSwitch: {},
        timeChoice: 0,
        leisureTime: 0,
        laborTime: 0,
        transcription: {},
      };
      if (localStorage.getItem("participantCreated") === "no") {
        localStorage.setItem("participantCreated", "yes");
        axios
          .post("/api", passvalue)
          .then(() => {
            console.log("New participant added");
          })
          .catch((e) => {
            console.log("Unable to add new participant: ", e);
          });
      }
    }
  }, []);
  const onClick = async (e) => {
    localStorage.setItem("prolificID", typedValue);
    // SETTING RANDOMIZED VALUES ONLY IN FIRST/MPL VERSION
    if (first) {
      // TREATMENT
      const treatment = ["autoplayOn", "autoplayOff"];
      const random = Math.floor(Math.random() * treatment.length);
      localStorage.setItem("treatment", treatment[random]);
      // 1 OUT 20 BINDING CHOICE
      if (localStorage.getItem("lottery") >= 0.95) {
        localStorage.setItem("lottery", "lotteryWin");
      } else {
        localStorage.setItem("lottery", "lotteryLose");
      }
      // PROCEED WITH INSTRUCTIONS OR TASK ACCORDING TO VERSION
      window.location.replace(typedValue.toString() + "/next");
    }

    if (mpl) {
      localStorage.setItem("treatment", "MPL");
      // 1 OUT 20 BINDING CHOICE
      if (localStorage.getItem("lottery") >= 0.95) {
        localStorage.setItem("lottery", "lotteryWin");
      } else {
        localStorage.setItem("lottery", "lotteryLose");
      }
      // PROCEED TO PAGE ACCORDING TO VERSION
      window.location.replace(typedValue.toString() + "/next");
    }

    if (second) {
      // SKIP TO LOTTERY OUTCOME AND START TASK
      window.location.replace(typedValue.toString() + "/lot");
    }
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
        {first || mpl ? (
          <>
            <Typography variant="h5" sx={{ my: 2.5 }} className="center">
              Your Consent
            </Typography>
            <p className="HomePage_p">I have been informed about:</p>
            <p className="HomePage_p">
              <ul class="a">
                <li>how the study will be carried out,</li>
                <li>the anonymity of my personal data,</li>
                <li>
                  processing of my personal data without revealing my identity,
                </li>
              </ul>
              according to the conditions detailed in the GDPR.
            </p>
            <p className="HomePage_p">
              <br></br>I am aware that:
              <ul class="a">
                <li>I may withdraw my consent any time,</li>
                <li>I do not need to give reasons for my withdrawal,</li>
                <li>
                  there will be no negative consequences for my withdrawal.
                </li>
              </ul>
            </p>

            <FormGroup className="center">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label="Yes, I give consent."
              />
            </FormGroup>
          </>
        ) : (
          <>
            <Typography variant="h5" sx={{ my: 2.5 }} className="center">
              Please enter your Prolific ID:
            </Typography>
          </>
        )}
        <Box className="center" sx={{ m: 3.5 }} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Prolific ID"
            variant="outlined"
            onChange={(event) => setTypedValue(event.target.value)}
          />
        </Box>

        {badcon ? (
          <Alert sx={{ mb: 2 }} className="HomePage_p" severity="error">
            {" "}
            Your connection speed is too slow for participation in this study.{" "}
          </Alert>
        ) : null}

        {!chromium ? (
          <Alert sx={{ mb: 2 }} className="HomePage_p" severity="error">
            {" "}
            <strong>
              Please switch to a Chromium (Chrome, Brave, Edge) based browser.
            </strong>{" "}
            Other browsers are not allowed for this study.
          </Alert>
        ) : null}

        {!desktop ? (
          <Alert sx={{ mb: 2 }} className="HomePage_p" severity="error">
            {" "}
            <strong>Please switch to a desktop device.</strong> Mobile devices
            are not allowed for this study.
          </Alert>
        ) : null}

        {first || mpl ? (
          <div className="center">
            {typedValue === "" ? (
              <ButtonM
                disabled
                variant="contained"
                color="secondary"
                type="button"
              >
                <strong>Continue</strong>
              </ButtonM>
            ) : (
              <ButtonM
                disabled={!checked || !chromium || !desktop || badcon}
                variant="contained"
                color="secondary"
                type="button"
                onClick={onClick}
              >
                <strong>Continue</strong>
              </ButtonM>
            )}
          </div>
        ) : (
          <div className="center">
            {typedValue === "" ? (
              <ButtonM
                disabled
                variant="contained"
                color="secondary"
                type="button"
              >
                <strong>Continue</strong>
              </ButtonM>
            ) : (
              <ButtonM
                disabled={!chromium || !desktop || badcon}
                variant="contained"
                color="secondary"
                type="button"
                onClick={onClick}
              >
                <strong>Continue</strong>
              </ButtonM>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Home1;
