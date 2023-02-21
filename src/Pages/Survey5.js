import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";

const Survey5 = () => {
  const [value, setValue] = useState(localStorage.getItem("employment"));

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    let passvalue = {
      "browser.marital": localStorage.getItem("marital")
    };

    const link = "/api/" + localStorage.getItem("ID");
    axios
      .patch(link, passvalue)
      .then(() => {
        console.log("Update marital");
      })
      .catch((e) => {
        console.log("Unable to update marital: ", e);
      });
  }, []);
  const onClick = (e) => {
    localStorage.setItem("employment", value)
    window.location.assign("s6");
  };
  // window.setTimeout(function () {
  //   localStorage.clear();
  //   window.location.href =
  //     "https://uvafeb.eu.qualtrics.com/jfe/form/SV_baAihrq8YjHVLkq";
  // }, 15000);

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
        <Typography variant="h5" className="center">
          What is your current employment status?
        </Typography>
        <Box className="center" sx={{ m: 5 }} noValidate autoComplete="off">
          <FormControl>
            {/* <FormLabel id="demo-controlled-radio-buttons-group">
              Choose gender
            </FormLabel> */}
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="employed full time"
                control={<Radio />}
                label="Employed full time"
              />
              <FormControlLabel
                value="employed part time"
                control={<Radio />}
                label="Employed part time"
              />
              <FormControlLabel
                value="unemployed looking for work"
                control={<Radio />}
                label="Unemployed looking for work"
              />
              <FormControlLabel
                value="unemployed not looking for work"
                control={<Radio />}
                label="Unemployed not looking for work"
              />
              <FormControlLabel
                value="student"
                control={<Radio />}
                label="Student"
              />
              <FormControlLabel
                value="retired"
                control={<Radio />}
                label="Retired"
              />
              <FormControlLabel
                value="homemaker"
                control={<Radio />}
                label="Homemaker"
              />
              <FormControlLabel
                value="self employed"
                control={<Radio />}
                label="Self employed"
              />{" "}
              <FormControlLabel
                value="unable to work"
                control={<Radio />}
                label="Unable to work"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <div className="center">
          {value === "" ? (
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

export default Survey5;
