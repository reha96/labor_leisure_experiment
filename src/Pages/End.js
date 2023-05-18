import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Button from "@mui/material/Button";

const End = () => {
  localStorage.setItem("activePage", 1)
  localStorage.setItem("activeTab", "");
  localStorage.setItem("birthyear", "");
  localStorage.setItem("gender", "");
  localStorage.setItem("education", "");
  localStorage.setItem("marital", "");
  localStorage.setItem("employment", "");
  localStorage.setItem("income", "");
  localStorage.setItem("connection", "");
  localStorage.setItem("trueWatch", "");
  localStorage.setItem("activeTab", "");
  useEffect(() => {
    // GET TIMESTAMP AT TASK END
    var time = new Date().getTime() / 1000; // TIME IN SECONDS
    var comb = JSON.stringify([time + " end"]);
    const items2 = JSON.parse(localStorage.getItem("session"));
    const newItems2 = JSON.stringify([...items2, comb]);
    localStorage.setItem("session", newItems2);
    // COUNT A TAB SWITCH IF PARTICIPANT SPENT TIME WATCHING VIDEOS
    if (parseInt(localStorage.getItem("leisureTime")) > 0) {
      if (parseInt(localStorage.getItem("tabCounter")) === 0) {
        localStorage.setItem("tabCounter", 1);
      }
    }
    let passvalue = {
        "platform.typing": localStorage.getItem("laborTime"),
        "platform.watching": localStorage.getItem("leisureTime"),
        "platform.notTyping": localStorage.getItem("inactiveLabor"),
        "platform.notWatching": localStorage.getItem("inactiveLeisure"),
        "platform.videoPausedFor": localStorage.getItem("videoPausedFor"),
        "platform.tabCounter": localStorage.getItem("tabCounter"),
        "platform.typeCount": localStorage.getItem("localcount"),
        "platform.watchedVideo": localStorage.getItem("watchedVideo"),
        "platform.session": localStorage.getItem("session"),
    }
    const link = "/api/" + localStorage.getItem("ID");
    axios
      .patch(link, passvalue)
      .then(() => {
        console.log("Update time spent in tasks");
      })
      .catch((e) => {
        console.log("Unable to update time spent in tasks: ", e);
      });
  }, []);
  const onClick = (e) => {
    window.location.assign("s1");
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
        <Typography variant="h5" sx={{ my: 2.5 }} className="center">
          Survey
        </Typography>
        <p className="center">
          Your choices have been recorded. You may now continue with the survey.
        </p>

        <div className="center">
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2.5 }}
            type="button"
            onClick={onClick}
          >
            <strong>Continue</strong>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default End;
