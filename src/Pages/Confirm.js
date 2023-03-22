import React, { useState, useEffect } from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import Slider from "@mui/material/Slider";
import ConfirmUpdate from "../Components/ConfirmUpdate";
import ButtonM from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";
import Alert from "@mui/material/Alert";

const Confirm = () => {
  localStorage.setItem("tabCounter", 0);
  localStorage.setItem("videoAttention", 0);
  const [clicked, setClicked] = useState(
    localStorage.getItem("clickTimeChoice")
  );
  const nextPage = (event) => {
    setOpen(true);
    localStorage.setItem("stop2", false);
  };

  function valuetext(value) {
    localStorage.setItem("time_choice", value);
    return;
  }

  const onClick = async (event) => {
    setClicked(event.target.checked);
    localStorage.setItem("clickTimeChoice", true);
  };

  useEffect(() => {
    let passvalue = {
      "clikcedOkToSwitch.Practice": localStorage.getItem("clickedOKtoswitch"),
    };
    const link = "/api/" + localStorage.getItem("ID");
    axios
      .patch(link, passvalue)
      .then(() => {
        console.log("Succesfully recorded the click to close practice popup");
      })
      .catch((e) => {
        console.log("Unable to record the click to close practice popup: ", e);
      });
    if (localStorage.getItem("treatment") === "MPL") {
      if (localStorage.getItem("MPLthatcounts").includes("No")) {
        localStorage.setItem("treatment", "autoplayOffMPL");
      } else {
        localStorage.setItem("treatment", "autoplayOnMPL");
      }
    }
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    if (localStorage.getItem("lottery") === "lotteryWin") {
      window.location.replace("lotw");
    } else {
      window.location.replace("lotl");
    }
  };

  const handleChange = () => {
    setOpen(false);
  };

  const marks = [
    {
      value: 0,
      label: "No Typing",
    },
    {
      value: 720,
      label: "Only Typing",
    },
  ];
  return (
    <div className="Page2">
      <style type="text/css">
        {`
        .container-sm{
            background-color: white ;
            padding-bottom:5vh!important;
            padding-top:2vh!important;
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
        {localStorage.getItem("treatment").includes("MPL") ? (
          <p className="HomePage_p">
            <Alert sx={{ mb: 2 }} severity="success">
              The implemented choice is:{" "}
              <strong>{localStorage.getItem("MPLthatcounts")}</strong>. The
              bonus payment indicated here will be added to your total earnings.
            </Alert>
          </p>
        ) : null}

        <Typography variant="h5" sx={{ my: 2.5 }} className="center">
          Time Choice
        </Typography>
        {/* <Typography variant='h6' className="center">End of Practice</Typography> */}
        {/* <p className="HomePage_p">The practice session is over.</p> */}
        <p className="HomePage_p">
          {" "}
          We now ask how long you would like to spend on <strong>
            Typing
          </strong>{" "}
          and on <strong>Watching Videos</strong>.
        </p>
        <p className="HomePage_p">
          In this part you will have <strong> 12 minutes</strong>.
        </p>

        {/* <p className="HomePage_p">
          Please decide how much time you want to spend on{" "}
          <strong>Typing</strong> and on <strong>Watching Videos</strong>.
        </p> */}
        <p className="HomePage_p">
          1 out of every 20 participant will be <strong>binded</strong> by
          the choice they made here.
        </p>

        <p className="HomePage_p">
          Please <strong>click on the slider</strong> and indicate your{" "}
          <strong>Time Choice</strong>:
        </p>
        <Box
          sx={{
            mx: 10,
            my: 5,
          }}
          onClick={onClick}
        >
          <Slider
            aria-label="Small steps"
            defaultValue={360}
            getAriaValueText={valuetext}
            step={5}
            track="normal"
            marks={marks}
            min={0}
            max={720}
            valueLabelDisplay="off"
            disabled={clicked}
          />
        </Box>
        <p className="HomePage_p">{clicked ? null : <ConfirmUpdate />}</p>
        <p className="HomePage_p">
          On the next page you will learn whether your{" "}
          <strong>Time Choice</strong> is binding.
        </p>

        <div className="center">
          {clicked ? (
            <ButtonM
              sx={{ mt: 2.5 }}
              color="secondary"
              variant="contained"
              type="button"
              onClick={nextPage}
              disabled
            >
              <strong>Continue</strong>
            </ButtonM>
          ) : (
            <ButtonM
              sx={{ mt: 2.5 }}
              color="secondary"
              variant="contained"
              type="button"
              onClick={nextPage}
            >
              <strong>Continue</strong>
            </ButtonM>
          )}
        </div>

        <Dialog
          open={open}
          onClose={null}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle className="center" id="alert-dialog-title">
            {"Confirm Time Choice?"}
          </DialogTitle>
          <DialogContent>
            <ConfirmUpdate />
          </DialogContent>
          <DialogActions>
            <ButtonM color="error" onClick={handleChange}>
              <strong>Change</strong>
            </ButtonM>
            <ButtonM color="success" onClick={handleClose} autoFocus>
              <strong>Confirm</strong>
            </ButtonM>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
};

export default Confirm;
