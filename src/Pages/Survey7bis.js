import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "react-bootstrap/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Survey7bis = () => {
  const [typedValue, setTypedValue] = useState("");

  const onClick = (e) => {
    localStorage.setItem("feedback", typedValue);
    window.location.assign("endsurvey");
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
          This study is about the effects of autoplaying media on planned behavior. We
          are interested in measuring how much you deviate from your
          <strong> Time Choice</strong> when videos played automatically instead
          of by clicking to play.
        </p>
        <Typography variant="h5" className="center">
          Any feedback you would like to give the researchers?
        </Typography>
        <Box className="center" sx={{ m: 5 }} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Feedback (Optional)"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            onChange={(event) => setTypedValue(event.target.value)}
          />
        </Box>
        <div className="center">
          <Button
            onClick={onClick}
            variant="contained"
            color="secondary"
            type="button"
          >
            <strong>Continue</strong>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Survey7bis;
