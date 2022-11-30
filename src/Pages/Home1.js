import Link from "@mui/material/Link";
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
import * as Bowser from "bowser";
import axios from "axios";

// import { useParams} from "react-router";

const Home1 = () => {
  // const { userId } = useParams()
  // console.log(userId)

  const [checked, setChecked] = useState(false);
  const [typedValue, setTypedValue] = useState("");
  const browser = Bowser.parse(window.navigator.userAgent);
  // const [error, setError] = useState(null);
  // console.log(typedValue)

  const handleChange = async (event) => {
    setChecked(event.target.checked);
    localStorage.setItem("stop", false);
  };

  // useEffect(() => {
  //   axios
  //     .get("/api")
  //     .then((res) => {
  //       console.log("Succesful test: GET participants");
  //     })
  //     .catch((e) => {
  //       console.log("Test not succesful: Unable to GET: ", e);
  //     });
  // }, []);

  const onClick = async (e) => {
    // use only when need to stop page from loading next page
    // e.preventDefault();
    localStorage.setItem("attentionFail1", 0);
    localStorage.setItem("attentionFail2", 0);
    localStorage.setItem("treatment", Math.random());
    localStorage.setItem("lottery", Math.random());
    localStorage.setItem("ID", typedValue);
    let treatment = "";
    if (localStorage.getItem("treatment") >= 0.5) {
      treatment = "autoplayOn";
    } else {
      treatment = "autoplayOff";
    }
    let lottery = "";
    if (localStorage.getItem("lottery") >= 0.95) {
      lottery = "lotteryWin";
    } else {
      lottery = "lotteryLose";
    }
    let passvalue = {
      attention1: localStorage.getItem("attentionFail1"),
      attention2: localStorage.getItem("attentionFail2"),
      treatment: treatment,
      lottery: lottery,
      platform: browser["platform"],
      browser: browser["browser"],
      ID: typedValue,
      clikcedOkToSwitch: {},
      timeChoice: 0,
      leisureTime: {},
      laborTime: {},
      transcription: {},
    };

    axios
      .post("/api", passvalue)
      .then(() => {
        console.log("new participant added");
      })
      .catch((e) => {
        console.log("Unable to add new participant: ", e);
      });
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
        <Typography variant="h6" className="center">
          Your Consent
        </Typography>
        <p className="HomePage_p">
          I have been informed in writing on how the study will be carried out.
          I have also been informed about the anonymity of my personal data and
          processing of it without revealing my identity, under the conditions
          detailed in the GDPR. I am aware that I may withdraw my consent any
          time and I do not need to give reasons for my withdrawal and that
          there will be no negative consequences.
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

        <Box className="center" sx={{ m: 2.5 }} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Prolific ID"
            variant="outlined"
            onChange={(event) => setTypedValue(event.target.value)}
          />
        </Box>

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
            <Link underline="none" href={typedValue.toString() + "/next"}>
              <ButtonM
                disabled={!checked}
                variant="contained"
                color="secondary"
                type="button"
                onClick={onClick}
              >
                <strong>Continue</strong>
              </ButtonM>
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Home1;
