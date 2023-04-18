
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const Survey6bis3 = () => {
  const [clicked, setClicked] = useState(
    false
  );

  function valuetext(value) {
    localStorage.setItem("enjoyVideo", value);
    return;
  }

  const onClick = (e) => {
    window.location.assign("s7");
  };

  const onClick2 = async (event) => {
    setClicked(true);
  };


  useEffect(() => {
    let passvalue = {
      "platform.connection": localStorage.getItem("connection"),
      "platform.trueWatch": localStorage.getItem("trueWatch"),
    };

    const link = "/api/" + localStorage.getItem("ID");
    axios
      .patch(link, passvalue)
      .then(() => {
        console.log("Update connection");
      })
      .catch((e) => {
        console.log("Unable to update connection: ", e);
      });
  }, []);

  const marks = [
    {
      value: 0,
      label: "Not at all",
    },
    {
      value: 5,
      label: "Neither like nor dislike",
    },
    {
      value: 10,
      label: "Very much",
    },
  ];

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
          Video Content
        </Typography>
        <p className="HomePage_p">
          Based on the videos you watched, how much did you enjoy the content? Please <strong> click on the slider </strong> and indicate your choice.
        </p>
        <Box
          sx={{
            mx: 10,
            my: 5,
          }}
          onClick={onClick2}
        >
          <Slider
            aria-label="Small steps"
            defaultValue={5}
            getAriaValueText={valuetext}
            step={1}
            track="normal"
            marks={marks}
            min={0}
            max={10}
            valueLabelDisplay="off"
            disabled={!clicked}
          />
        </Box>
        <div className="center">
          {!clicked ? (
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

export default Survey6bis3;
