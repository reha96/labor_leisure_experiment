import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Survey7 = () => {
  const [typedValue, setTypedValue] = useState("");
  const [typedValue2, setTypedValue2] = useState("");

  const onClick = (e) => {
    localStorage.setItem("strategy", typedValue);
    localStorage.setItem("feedback", typedValue2);
    window.location.assign("endsurvey");
  };

  useEffect(() => {
    let passvalue = {
      "browser.income": localStorage.getItem("income"),
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
        <Typography sx={{ mx: 5, justifyContent: 'center'}} variant="h5">
          With a few words, how would you describe your reasoning when switching between the two tasks?   
        </Typography>
        <Box className="center" sx={{ m: 5 }} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Reasoning"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            onChange={(event) => setTypedValue(event.target.value)}
          />
        </Box>
        <Typography variant="h5" className="center">
          Any other feedback you would like to give to researchers?   
        </Typography>
        <Box className="center" sx={{ m: 5 }} noValidate autoComplete="off">
          <TextField 
            id="outlined-basic"
            label="Feedback (Optional)"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            onChange={(event) => setTypedValue2(event.target.value)}
          />
        </Box>
        <div className="center">
          {typedValue === "" ? (
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

export default Survey7;
