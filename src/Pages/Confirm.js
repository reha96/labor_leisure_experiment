import React, { useEffect } from "react";
import Link from "@mui/material/Link";
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
import PriceList from "../Components/PriceList";

const Confirm = () => {
  const nextPage = (event) => {
    setOpen(true);
    localStorage.setItem("stop2", false);
  };

  function valuetext(value) {
    localStorage.setItem("time_choice", value);
    return;
  }

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
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const marks = [
    {
      value: 0,
      label: "No Typing",
    },
    {
      value: 100,
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
        {/* <Typography variant='h6' className="center">End of Practice</Typography> */}
        {/* <p className="HomePage_p">The practice session is over.</p> */}
        <p className="HomePage_p">
          {" "}
          Based on your experience in the practice session, we now ask you to
          decide how long you would like to spend on each task.
        </p>
        <p className="HomePage_p">
          On the next page, you will have{" "}
          <strong>2 minutes of Typing before </strong> you can switch
          between tasks for <strong>10 minutes</strong>.
        </p>

        {/* <Typography variant="h6" className="center"> */}
        {/* List */}
        {/* </Typography> */}
        {/* <PriceList /> */}

        <Typography variant="h6" className="center">
          Time Choice
        </Typography>
        <p className="HomePage_p">
          Please decide how much of your <strong>10 minutes </strong>
          you want to spend on <strong>Typing</strong> and on{" "}
          <strong>Watching Videos</strong>.
        </p>
        <p className="HomePage_p">
          For 1 out of every 20 participant the <strong>Time Choice</strong>{" "}
          decision will be binding:{" "}
        </p>
        <p className="HomePage_p">
          <ul class="a">
            <li>
              {" "}
              If you are among the selected participants you will have to{" "}
              <strong>Type</strong> for your chosen duration.
            </li>
            <li>
              {" "}
              If you are not selected, you spend your time freely across both
              tasks.{" "}
            </li>

            <li>
              <strong>
                In both cases, switching between tasks will only be available
                after 2 minutes of Typing.
              </strong>
            </li>
          </ul>{" "}
        </p>
        <p className="HomePage_p"></p>
        <p className="HomePage_p">
          Please <strong>move the slider</strong> to indicate your{" "}
          <strong>Time Choice</strong>:
        </p>
        <Box
          sx={{
            mx: 10,
            my: 5,
          }}
        >
          <Slider
            aria-label="Small steps"
            defaultValue={50}
            getAriaValueText={valuetext}
            step={1}
            track="normal"
            marks={marks}
            min={0}
            max={100}
            valueLabelDisplay="on"
          />
        </Box>

        <ConfirmUpdate />

        <p className="HomePage_p">
          On the next page you will learn whether your Time Choice is binding.
        </p>

        <div className="center">
          <ButtonM
            color="secondary"
            variant="contained"
            type="button"
            onClick={nextPage}
          >
            <strong>Continue</strong>
          </ButtonM>
        </div>

        <Dialog
          open={open}
          onClose={null}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Confirm choice?"}</DialogTitle>
          <DialogContent>
            <ConfirmUpdate />
          </DialogContent>
          <DialogActions>
            <ButtonM color="error" onClick={handleClose}>
              <strong>Change</strong>
            </ButtonM>
            <Link
              underline="none"
              href={
                localStorage.getItem("lottery") === "lotteryWin"
                  ? "lotw"
                  : "lotl"
              }
            >
              <ButtonM color="success" onClick={handleClose} autoFocus>
                <strong>Confirm</strong>
              </ButtonM>
            </Link>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
};

export default Confirm;
