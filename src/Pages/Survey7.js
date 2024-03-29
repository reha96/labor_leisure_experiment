import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Survey7 = () => {
  const [typedValue, setTypedValue] = useState("");
  const onClick = (e) => {
    localStorage.setItem("strategy", typedValue);
    window.location.assign("s7b");
  };

  useEffect(() => {
    let passvalue = {
      "platform.content": localStorage.getItem("enjoyVideo"),
    };

    const link = "/api/" + localStorage.getItem("ID");
    axios
      .patch(link, passvalue)
      .then(() => {
        console.log("Update content");
      })
      .catch((e) => {
        console.log("Unable to update content: ", e);
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
        <Typography sx={{ mx: 5, justifyContent: "center" }} variant="h5">
          With a few words, how would you describe your reasoning when switching
          between the two tasks?
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
