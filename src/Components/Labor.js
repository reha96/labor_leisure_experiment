import React from "react";
import "./Labor.css";
import { useState, useEffect } from "react";
import ButtonM from "@mui/material/Button";
import Container from "react-bootstrap/Container";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

const Labor = () => {
  const [imgsLoaded, setImgsLoaded] = useState(false);
  const data = [
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_0.jpeg",
      key: 0,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_1.jpeg",
      key: 1,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_2.jpeg",
      key: 2,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_3.jpeg",
      key: 3,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_4.jpeg",
      key: 4,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_5.jpeg",
      key: 5,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_6.jpeg",
      key: 6,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_7.jpeg",
      key: 7,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_8.jpeg",
      key: 8,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_9.jpeg",
      key: 9,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_10.jpeg",
      key: 10,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_11.jpeg",
      key: 11,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_12.jpeg",
      key: 12,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_13.jpeg",
      key: 13,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_14.jpeg",
      key: 14,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_15.jpeg",
      key: 15,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_16.jpeg",
      key: 16,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_17.jpeg",
      key: 17,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_18.jpeg",
      key: 18,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_19.jpeg",
      key: 19,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_20.jpeg",
      key: 20,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_21.jpeg",
      key: 21,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_22.jpeg",
      key: 22,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_23.jpeg",
      key: 23,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_24.jpeg",
      key: 24,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_25.jpeg",
      key: 25,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_26.jpeg",
      key: 26,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_27.jpeg",
      key: 27,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_28.jpeg",
      key: 28,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_29.jpeg",
      key: 29,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_30.jpeg",
      key: 30,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_31.jpeg",
      key: 31,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_32.jpeg",
      key: 32,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_33.jpeg",
      key: 33,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_34.jpeg",
      key: 34,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_35.jpeg",
      key: 35,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_36.jpeg",
      key: 36,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_37.jpeg",
      key: 37,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_38.jpeg",
      key: 38,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_39.jpeg",
      key: 39,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_40.jpeg",
      key: 40,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_41.jpeg",
      key: 41,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_42.jpeg",
      key: 42,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_43.jpeg",
      key: 43,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_44.jpeg",
      key: 44,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_45.jpeg",
      key: 45,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_46.jpeg",
      key: 46,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_47.jpeg",
      key: 47,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_48.jpeg",
      key: 48,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_49.jpeg",
      key: 49,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_50.jpeg",
      key: 50,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_51.jpeg",
      key: 51,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_52.jpeg",
      key: 52,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_53.jpeg",
      key: 53,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_54.jpeg",
      key: 54,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_55.jpeg",
      key: 55,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_56.jpeg",
      key: 56,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_57.jpeg",
      key: 57,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_58.jpeg",
      key: 58,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_59.jpeg",
      key: 59,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_60.jpeg",
      key: 60,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_61.jpeg",
      key: 61,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_62.jpeg",
      key: 62,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_63.jpeg",
      key: 63,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_64.jpeg",
      key: 64,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_65.jpeg",
      key: 65,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_66.jpeg",
      key: 66,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_67.jpeg",
      key: 67,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_68.jpeg",
      key: 68,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_69.jpeg",
      key: 69,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_70.jpeg",
      key: 70,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_71.jpeg",
      key: 71,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_72.jpeg",
      key: 72,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_73.jpeg",
      key: 73,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_74.jpeg",
      key: 74,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_75.jpeg",
      key: 75,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_76.jpeg",
      key: 76,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_77.jpeg",
      key: 77,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_78.jpeg",
      key: 78,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_79.jpeg",
      key: 79,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_80.jpeg",
      key: 80,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_81.jpeg",
      key: 81,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_82.jpeg",
      key: 82,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_83.jpeg",
      key: 83,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_84.jpeg",
      key: 84,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_85.jpeg",
      key: 85,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_86.jpeg",
      key: 86,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_87.jpeg",
      key: 87,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_88.jpeg",
      key: 88,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_89.jpeg",
      key: 89,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_90.jpeg",
      key: 90,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_91.jpeg",
      key: 91,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_92.jpeg",
      key: 92,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_93.jpeg",
      key: 93,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_94.jpeg",
      key: 94,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_95.jpeg",
      key: 95,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_96.jpeg",
      key: 96,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_97.jpeg",
      key: 97,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_98.jpeg",
      key: 98,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_99.jpeg",
      key: 99,
    },
  ];
  const [open, setOpen] = useState(true);
  const [input, setInput] = useState([]);
  const [typedValue, setTypedValue] = useState("");
  const [sess, setSess] = useState([]);
  const [diff, setDiff] = useState([]);

  // DIFFERENCE BETWEEN EACH CHARACTER TYPED (SECONDS) --> LOOKING TO SEE FOR SYSTEMATIC BREAKS WHILE TYPING
  useEffect(() => {
    var input = typedValue;
    var time = new Date().getTime();
    var comb = [input, time];
    setSess(sess.concat(comb));
    var difference =
      (parseInt(sess.slice(-1)) - parseInt(sess.slice(-3))) / 1000;
    if (isNaN(difference)) {
      difference = 0;
    }
    setDiff(diff.concat(difference));
    localStorage.setItem("keyTime", diff);
  }, [typedValue]);

  const [counter, setCounter] = useState(
    parseInt(window.localStorage.getItem("localcount"))
  );

  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        resolve(image.url);
        loadImg.onerror = (err) => reject(err);
      });
    };
    Promise.all(data.map((image) => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  const handleSubmit = (event) => {
    setInput([...input, typedValue]);
    const items = JSON.parse(localStorage.getItem("transc"));
    const newItems = JSON.stringify([...items, typedValue]);
    localStorage.setItem("transc", newItems);
    setTypedValue("");
    if (isNaN(counter)) {
      var Image = 0;
      console.log("counter is NaN");
    } else {
      Image = parseInt(counter) + 1;
      if (Image >= data.length) {
        Image = 0;
      }
    }
    setCounter(Image);
    localStorage.setItem("localcount", Image);
    let passvalue = {
      "platform.userTranscription": localStorage.getItem("transc"),
    };
    const link = "/api/" + localStorage.getItem("ID");
    axios
      .patch(link, passvalue)
      .then(() => {
        console.log("Update platform.userTranscription");
      })
      .catch((e) => {
        console.log("Unable to update platform.userTranscription: ", e);
      });
  };

  return (
    <Container fluid="sm">
      {data.map(({ src, key }) => {
        return (
          <div>
            {counter === key ? (
              <Container>
                {localStorage.getItem("tabCounter") !== "0" ? null : (
                  <Collapse in={open}>
                    <Alert
                      severity="info"
                      action={
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                      }
                      sx={{ mt: 1 }}
                    >
                      You can switch tasks by clicking on a tab
                    </Alert>
                  </Collapse>
                )}
                {imgsLoaded ? (
                  <img src={src} alt={key} className="photo" />
                ) : (
                  <p className="photo">Loading image ...</p>
                )}
              </Container>
            ) : null}
          </div>
        );
      })}
      {/* <p style={{ display: "flex", justifyContent: "center" }}>
      </p> */}
      <Box className="center" sx={{ m: 5 }} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Type the CAPTCHA"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          value={typedValue}
          onChange={(event) => setTypedValue(event.target.value)}
        />
      </Box>
      <div className="container">
        <p style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <CheckCircleOutlineRoundedIcon />{" "}
          <strong>
            &nbsp;{window.localStorage.getItem("localcount")}&nbsp;
          </strong>{" "}
          transcriptions submitted{" "}
        </p>
      </div>
      <div className="container">
        <ButtonM variant="contained" color="secondary" onClick={handleSubmit}>
          <strong>Submit</strong>
        </ButtonM>
      </div>

      {/* <div>&nbsp;</div> */}
    </Container>
  );
};

export default Labor;
