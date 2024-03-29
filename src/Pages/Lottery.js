import * as React from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import ButtonM from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import { useState, useEffect } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import * as Bowser from "bowser";

const Lottery = () => {
  // IGNORE COOKIE: TO CALL THINGS ONCE
  localStorage.setItem('ignore', false)
  const divi = localStorage.getItem("time_choice");
  const min = Math.round(Math.floor(divi / 60));
  const sec = Math.round(divi % 60);
  // const min2 = Math.round(Math.floor((1200 - divi) / 60));
  // const sec2 = Math.round((1200 - divi) % 60);

  const [dbfail, setDbfail] = useState(false);
  const browser = Bowser.parse(window.navigator.userAgent);
  const lotlose = localStorage.getItem("lottery") === "lotteryLose";
  var input = [];
  localStorage.setItem("laborTime", 0);
  localStorage.setItem("leisureTime", 0);
  localStorage.setItem("inactiveLabor", 0);
  localStorage.setItem("watchedVideo", 0);
  localStorage.setItem("inactiveLeisure", 0);
  localStorage.setItem("activeTab", "Labor");
  localStorage.setItem("videoPaused", "yes");
  localStorage.setItem("videoPausedFor", 0);
  localStorage.setItem("activePage", 1);
  localStorage.setItem("localcount", 0);
  localStorage.setItem("lastmin", 19); // change time TESTT
  localStorage.setItem("lastsec", 59); // change time TESTT
  localStorage.setItem("transc", JSON.stringify(input));
  localStorage.setItem("session", JSON.stringify(input));
  localStorage.setItem("tabCounter", 0);
  localStorage.setItem("vidCounter", 1);
  window.localStorage.setItem("progress", 0);
  const [counter, setCounter] = useState(
    parseInt(window.localStorage.getItem("attentionFail2"))
  );

  var Fail = 0;

  // SEND BROWSER INFO ONCE AGAIN TO DB (2ND SESSION)
  useEffect(() => {
    if (localStorage.getItem('ignore') === 'false') {
      // GET TIMESTAMP TO AVOID NETWORK CACHE
      let passvalue = {
        platform: {
          browser: browser["browser"]["name"],
          platform: browser["platform"]["type"],
          os: browser["os"]["name"],
          "platform.MPLthatcounts": localStorage.getItem("MPLthatcounts"),
          "platform.MPL1": localStorage.getItem("MPL1"),
          "platform.MPL2": localStorage.getItem("MPL2"),
          "platform.MPL3": localStorage.getItem("MPL3"),
          "platform.MPL4": localStorage.getItem("MPL4"),
          "platform.MPL5": localStorage.getItem("MPL5"),
          "platform.MPL6": localStorage.getItem("MPL6"),
          "platform.MPL7": localStorage.getItem("MPL7"),
          "platform.MPL8": localStorage.getItem("MPL8"),
          "platform.MPL9": localStorage.getItem("MPL9"),
        },
        browser: { speed: localStorage.getItem("speed") },
      };
      const link = "/api/" + localStorage.getItem("ID");
      axios
        .patch(link, passvalue)
        .then(() => {
          console.log("Succesfully recorded browser info");
        })
        .catch((e) => {
          console.log("Unable to record browser info: ", e);
          setDbfail(true);
        });
      localStorage.setItem('ignore', true)
    }
  }, []);



  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState(
    "You have 2 opportunities to get this question right."
  );

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === "true") {
      setHelperText("You got it!");
      setError(false);
      localStorage.setItem("stop2", "true");
    } else if (event.target.value === "1" || event.target.value === "fast") {
      setHelperText("Sorry, wrong answer!");
      setError(true);
      localStorage.setItem("stop2", "false");
    } else {
      setHelperText("Please select an option.");
      setError(true);
      localStorage.setItem("stop2", "false");
    }
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "true") {
      setHelperText("You got it!");
    } else if (value === "1" || value === "0") {
      setHelperText("Sorry, wrong answer!");
      setError(true);
      Fail = parseInt(counter) + 1;
      setCounter(Fail);
      localStorage.setItem("attentionFail2", Fail);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }

    let passvalue = {
      attention2: localStorage.getItem("attentionFail2"),
    };

    const link = "/api/" + localStorage.getItem("ID");

    axios
      .patch(link, passvalue)
      .then(() => {
        console.log("Update AttentionFail2");
      })
      .catch((e) => {
        console.log("Unable to update AttentionFail2: ", e);
      });
  };
  const nextPage = (event) => {
    window.location.replace("tasks");
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
        <Typography variant="h5" sx={{ my: 2.5 }} className="center">
          Time Choice Recap
        </Typography>
        <p className="HomePage_p">
          On the next page you will spend 20 minutes.
        </p>

        <p className="HomePage_p">
          Yesterday you chose to spend {min} minutes {sec} seconds to Type.{" "}
          {lotlose ? (
            <>
              However, your Time Choice is not binding.{" "}
              <strong>
                {" "}
                You can spend your time freely across both tasks.
              </strong>
            </>
          ) : (
            <>
              Your Time Choice is binding.{" "}
              <strong> You have to Type for your chosen duration.</strong>
            </>
          )}
        </p>

        {lotlose ? (
          <p className="HomePage_p">
            Your bonus payment depends on how you actually spend your time
            between the tasks and whether you type at least 1 CAPTCHA per minute
            with overall 70 percent accuracy.
          </p>
        ) : (
          <p className="HomePage_p">
            You can switch between tasks as you please but cannot spend more
            than {min} minutes {sec} seconds to Type. Your bonus payment is
            equal to your Time Choice if you type at least 1 CAPTCHA per minute
            with overall 70 percent accuracy.
          </p>
        )}

        <Box className="center" sx={{ display: "flex" }}>
          <form onSubmit={handleSubmit}>
            <FormControl sx={{ m: 3 }} error={error} variant="standard">
              <FormLabel id="demo-error-radios">My bonus payment ...</FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz2"
                value={value}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="0"
                  control={<Radio />}
                  label="is equal to my Time Choice in the past session."
                />
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="depends on the time I spend on each task."
                />
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="does not depend on how much time I spend on each task."
                />
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
          </form>
        </Box>

        <div className="center">
          {dbfail ?
            <Alert sx={{ mb: 2 }} className="HomePage_p" severity="error">
              {" "}
              There is a problem with the database connection. Please contact the researchers.
            </Alert> : null
          }
          {!(localStorage.getItem("stop2") === "true") ? (
            <ButtonM
              disabled={dbfail}
              sx={{ mt: 2.5 }}
              variant="contained"
              color="secondary"
              type="button"
              onClick={handleSubmit}
            >
              <strong>begin</strong>
            </ButtonM>
          ) : (
            <ButtonM
              disabled={dbfail}
              sx={{ mt: 2.5 }}
              variant="contained"
              color="secondary"
              type="button"
              onClick={nextPage}
            >
              <strong>begin</strong>
            </ButtonM>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Lottery;
