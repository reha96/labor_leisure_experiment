import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Alert } from "@mui/material";

const Survey6bis = () => {
  const [value, setValue] = useState(localStorage.getItem("connection"));
  const [value2, setValue2] = useState(localStorage.getItem("trueWatch"));
  const disabled = value === "" || value2 === "";

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  const onClick = (e) => {
    localStorage.setItem("connection", value);
    localStorage.setItem("trueWatch", value2);
    window.location.assign("s6b2");
  };

  useEffect(() => {
    let passvalue = {
      "platform.income": localStorage.getItem("income"),
    };

    const link = "/api/" + localStorage.getItem("ID");
    axios
      .patch(link, passvalue)
      .then(() => {
        console.log("Update income");
      })
      .catch((e) => {
        console.log("Unable to update income: ", e);
      });
  }, []);

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
          to-bs-btn-color: #fff;
          to-bs-btn-bg: purple;
          to-bs-btn-border-color: purple;
          to-bs-btn-hover-color: #fff;
          to-bs-btn-hover-bg: #660066;
          to-bs-btn-hover-border-color: #660066;
          to-bs-btn-focus-shadow-rgb: 128, 0,128;
          to-bs-btn-active-color: #660066;
          to-bs-btn-active-bg: #660066;
          to-bs-btn-active-border-color: #800080cf;
          to-bs-btn-active-shadow: inset 0 3px 5pxrgba(0, 0, 0, 0.125);
          to-bs-btn-disabled-color: #fff;
          to-bs-btn-disabled-bg: #800080cf;
          to-bs-btn-disabled-border-color: #800080cf;
          margin-bottom: auto;
        }
        `}
      </style>
      <Container className="p-1" fluid="sm">
        <Typography variant="h5" className="center">
          Debriefing
        </Typography>
        <p className="HomePage_p">
          This study is about the effects of autoplay on planned behavior. We
          are interested in measuring how much you deviate from your
          <strong> Time Choice</strong> when videos played automatically instead
          of by clicking to play.
        </p>
        <p className="HomePage_p">
          <Alert severity="info">
            Please answer the following questions <strong> honestly </strong> as
            they impact our findings.{" "}
            <strong>
              {" "}
              Your answers do not affect your participation or bonus payments.
            </strong>
          </Alert>
        </p>
        <Typography variant="h5" sx={{ mx: 7.5 }} className="center">
          Did you have connection issues while watching the videos?
        </Typography>
        <Box className="center" sx={{ m: 5 }} noValidate autoComplete="off">
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="connectionGood"
                control={<Radio />}
                label="No"
              />
              <FormControlLabel
                value="connectionBad"
                control={<Radio />}
                label="Yes"
              />
            </RadioGroup>
          </FormControl>
        </Box>

        <Typography variant="h5" className="center" sx={{ mx: 7.5 }}>
          Were you occupied with other activities while you were watching
          videos?
        </Typography>
        <Box className="center" sx={{ m: 5 }} noValidate autoComplete="off">
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value2}
              onChange={handleChange2}
            >
              <FormControlLabel
                value="watchTrue"
                control={<Radio />}
                label="No"
              />
              <FormControlLabel
                value="watchFalse"
                control={<Radio />}
                label="Yes"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <div className="center">
          {disabled ? (
            <Button
              disabled
              variant="contained"
              color="secondary"
              type="button"
            >
              <strong>Continue</strong>
            </Button>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              type="button"
              onClick={onClick}
            >
              <strong>Continue</strong>
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Survey6bis;
