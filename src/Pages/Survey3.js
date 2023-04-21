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

const Survey3 = () => {
  const [value, setValue] = useState(localStorage.getItem("education"));

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    let passvalue = {
      "platform.gender": localStorage.getItem("gender")
    };

    const link = "/api/" + localStorage.getItem("ID");
    axios
      .patch(link, passvalue)
      .then(() => {
        console.log("Update gender");
      })
      .catch((e) => {
        console.log("Unable to update gender: ", e);
      });
  }, []);
  const onClick = (e) => {
    localStorage.setItem("education", value)
    window.location.assign("s4");
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
        <Typography sx={{ mx: 5, justifyContent: 'center'}} variant="h5" className="center">
          What is the highest level of education you have completed?
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
                value="less than highschool"
                control={<Radio />}
                label="Less than highschool"
              />
              <FormControlLabel
                value="highschool"
                control={<Radio />}
                label="Highschool or equivalent"
              />
              <FormControlLabel
                value="less than bachelor"
                control={<Radio />}
                label="Some college, no degree"
              />
              <FormControlLabel
                value="bachelor"
                control={<Radio />}
                label="Bachelor's degree or equivalent"
              />

              <FormControlLabel
                value="master"
                control={<Radio />}
                label="Master's degree or equivalent"
              />

              <FormControlLabel
                value="phd"
                control={<Radio />}
                label="Doctorate degree or equivalent"
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

export default Survey3;
