import Link from "@mui/material/Link";
import ButtonM from "@mui/material/Button";
import Container from "react-bootstrap/Container";
import "../App.css";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Home1 = () => {
  const [checked, setChecked] = useState(false);
  const [typedValue, setTypedValue] = useState("");

  const handleChange = async (event) => {
    setChecked(event.target.checked);
    localStorage.setItem("stop", false);
  };

  const onClick = (e) => {
    // use only when need to stop page from loading next page
    localStorage.setItem("participantCreated", "no");
    localStorage.setItem("attentionFail1", 0);
    localStorage.setItem("attentionFail2", 0);
    localStorage.setItem("treatment", Math.random());
    localStorage.setItem("lottery", Math.random());
    localStorage.setItem("ID", typedValue);
    if (localStorage.getItem("treatment") >= 0.5) {
      localStorage.setItem("treatment", "autoplayOn");
    } else {
      localStorage.setItem("treatment", "autoplayOff");
    }
    if (localStorage.getItem("lottery") >= 0.95) {
      localStorage.setItem("lottery", "lotteryWin");
    } else {
      localStorage.setItem("lottery", "lotteryLose");
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
        <Typography variant="h6" className="center">
          Your Consent
        </Typography>
        <p className="HomePage_p">I have been informed about:</p>
        <p className="HomePage_p">
          <ul class="a">
            <li>how the study will be carried out,</li>
            <li>the anonymity of my personal data,</li>
            <li>
              processing of my personal data without revealing my identity
            </li>
          </ul>
          according to the conditions detailed in the GDPR.
        </p>
        <p className="HomePage_p">
          <br></br>I am aware that:
          <ul class="a">
            <li>I may withdraw my consent any time,</li>
            <li>I do not need to give reasons for my withdrawal,</li>
            <li>there will be no negative consequences for my withdrawal.</li>
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
