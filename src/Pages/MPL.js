import * as React from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import ButtonM from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import PriceList from "../Components/PriceList";
import { useState, useEffect } from "react";

const MPL = () => {
  localStorage.setItem("MPLdisable", true);

  const [disabled, setDisabled] = useState(true);

  const nextPage = (event) => {
    const mpl = [
      localStorage.getItem("MPL1"),
      localStorage.getItem("MPL2"),
      localStorage.getItem("MPL3"),
      localStorage.getItem("MPL4"),
      localStorage.getItem("MPL5"),
      localStorage.getItem("MPL6"),
      localStorage.getItem("MPL7"),
      localStorage.getItem("MPL8"),
      localStorage.getItem("MPL9"),
    ];
    const random = Math.floor(Math.random() * mpl.length);
    localStorage.setItem("MPLthatcounts", mpl[random]);
    window.location.replace("confirm");
  };

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (localStorage.getItem("MPLdisable") === "false") {
        setDisabled(false);
      }
    }, 500);
    return () => {
      clearInterval(myInterval);
    };
  });

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
        <div className="center">
          <p className="HomePage_p">
            In the practice session videos played automatically thanks to{" "}
            <strong> Autoplay</strong>. There is another version of the same
            interface where{" "}
            <strong>
              {" "}
              Autoplay is off, meaning you would need to click on the videos to
              play them.{" "}
            </strong>
          </p>
          <p className="HomePage_p">
            In the list below, you are asked to make 9 decisions. For each row,
            you to pick the option you prefer regarding the Autoplay setting and
            the additional bonus payment.
          </p>
          <p className="HomePage_p">
            Once you are done, we will randomly implement one option you picked.{" "}
            <strong>
              You will receive a bonus payment and can watch videos with the chosen
              Autoplay setting for the upcoming 10 minutes.
            </strong>
          </p>
          <p className="HomePage_p">
            <strong>Consider for example the first decision. </strong>
            If this was chosen and you preferred the Autoplay, you would
            have Autoplay and receive £2 additional bonus
            payment.
          </p>

          <PriceList />
          {/* <Link underline="none" href={""}> */}
          {disabled ? (
            <Alert sx={{ mb: 2 }} severity="warning">
              Please pick your favorite option for each row.
            </Alert>
          ) : (
            <Alert sx={{ mb: 2 }} severity="info">
              You will learn which one of your 9 decisions was implemented on
              the next page.
            </Alert>
          )}
          <ButtonM
            color="secondary"
            variant="contained"
            type="button"
            onClick={nextPage}
            disabled={disabled ? true : false}
          >
            <strong>Continue</strong>
          </ButtonM>

          {/* </Link> */}
        </div>
      </Container>
    </div>
  );
};

export default MPL;
