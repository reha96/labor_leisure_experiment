import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "react-bootstrap/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Survey1 = () => {
  const [typedValue, setTypedValue] = useState(
    localStorage.getItem("birthyear")
  );

  const onClick = (e) => {
    localStorage.setItem("birthyear", typedValue);
    window.location.assign("s2");
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
        <Typography variant="h5" className="center">
          What is your birthyear?
        </Typography>
        <Box className="center" sx={{ m: 5 }} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Birthyear"
            type="number"
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

export default Survey1;
