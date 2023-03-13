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

const Survey6 = () => {
  const [value, setValue] = useState(localStorage.getItem("income"));

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    let passvalue = {
      "platform.employment": localStorage.getItem("employment"),
    };

    const link = "/api/" + localStorage.getItem("ID");
    axios
      .patch(link, passvalue)
      .then(() => {
        console.log("Update employment");
      })
      .catch((e) => {
        console.log("Unable to update employment: ", e);
      });
  }, []);
  const onClick = (e) => {
    localStorage.setItem("income", value);
    window.location.assign("s6b");
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
          What is your annual personal income?
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
                value="0-10"
                control={<Radio />}
                label="£10,000 or less"
              />
              <FormControlLabel
                value="10-12"
                control={<Radio />}
                label="£10,000 to £12,000"
              />
              <FormControlLabel
                value="12-15"
                control={<Radio />}
                label="£12,000 to £15,000"
              />
              <FormControlLabel
                value="15-20"
                control={<Radio />}
                label="£15,000 to £20,000"
              />
              <FormControlLabel
                value="20-30"
                control={<Radio />}
                label="£20,000 to £30,000"
              />
              <FormControlLabel
                value="30-50"
                control={<Radio />}
                label="£30,000 to £50,000"
              />
              <FormControlLabel
                value="50-70"
                control={<Radio />}
                label="£50,000 to £70,000"
              />
              <FormControlLabel
                value="70+"
                control={<Radio />}
                label="£70,000 or more"
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

export default Survey6;
