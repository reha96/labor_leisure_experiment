import React from "react";
import "./Labor.css";
import { useState, useEffect } from "react";
import ButtonM from "@mui/material/Button";
import Container from "react-bootstrap/Container";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const LaborPractice = () => {
  const [imgsLoaded, setImgsLoaded] = useState(false);
  const data = [
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_99.jpeg",
      key: 0,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_98.jpeg",
      key: 1,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_97.jpeg",
      key: 2,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_96.jpeg",
      key: 3,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_95.jpeg",
      key: 4,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_94.jpeg",
      key: 5,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_93.jpeg",
      key: 6,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_92.jpeg",
      key: 7,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_91.jpeg",
      key: 8,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_90.jpeg",
      key: 9,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_89.jpeg",
      key: 10,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_88.jpeg",
      key: 11,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_87.jpeg",
      key: 12,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_86.jpeg",
      key: 13,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_85.jpeg",
      key: 14,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_84.jpeg",
      key: 15,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_83.jpeg",
      key: 16,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_82.jpeg",
      key: 17,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_81.jpeg",
      key: 18,
    },
    {
      src: "https://d26ctpn7twdgoy.cloudfront.net/transc/trcp_80.jpeg",
      key: 19,
    },
  ];

  const [input, setInput] = useState([]);
  const [typedValue, setTypedValue] = useState("");

  // const [sec, setSec] = useState(0);

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
    console.log(input);

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
    console.log(Image + "  Image value after submit");
    window.localStorage.setItem("localcount", Image);
    console.log(
      window.localStorage.getItem("localcount") +
        "  localcount value after submit"
    );
    console.log(
      window.localStorage.getItem("transc") + "  transc value after submit"
    );
  };

  return (
    <Container fluid="sm">
      {data.map(({ src, key }) => {
        return (
          <div>
            {counter === key ? (
              <Container>
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
          CAPTCHA's submitted{" "}
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

export default LaborPractice;
