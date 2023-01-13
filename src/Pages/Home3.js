import * as React from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import ButtonM from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";

const Home3 = () => {
  var input = [];

  const nextPage = (event) => {
    localStorage.setItem("localcount", 0);
    localStorage.setItem("clickedOKtoswitch2", "no");
    localStorage.setItem("clickedOKtoswitch", "no");
    localStorage.setItem("lastmin", 1);
    localStorage.setItem("lastsec", 59); // testtt timer change
    localStorage.setItem("activePage", 1);
    localStorage.setItem("transc", JSON.stringify(input));
    window.localStorage.setItem("progress", 0);
    window.location.replace("practice");
  };

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
        <Typography variant="h6" className="center">
          Practice
        </Typography>
        <p className="HomePage_p">
          Next page will bring you to a 2 minute practice session to familiarize
          you with the tasks:
          <strong>
            <ul class="a">
              <li>You will have 1 minute for each task.</li>
              <li>There is no bonus payment in the practice session. </li>
            </ul>
          </strong>
        </p>

        <Alert sx={{ mb: 2 }} className="HomePage_p" severity="warning">
          {" "}
          Please ensure you are in an environment where you can comfortably
          watch the videos.{" "}
          <strong>Remember to turn on the sound of your device. </strong>
        </Alert>

        <div className="center">
          <ButtonM
            color="secondary"
            variant="contained"
            type="button"
            onClick={nextPage}
          >
            <strong>Begin Practice</strong>
          </ButtonM>
        </div>
      </Container>
    </div>
  );
};

export default Home3;
