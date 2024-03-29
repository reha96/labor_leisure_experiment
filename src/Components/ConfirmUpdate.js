import React from "react";
import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";

const ConfirmUpdate = (props) => {
  const [divi, setDivi] = useState(localStorage.getItem("time_choice"));
  useEffect(() => {
    let myInterval = setInterval(() => {
      setDivi(localStorage.getItem("time_choice"));
    }, 500);
    return () => {
      clearInterval(myInterval);
    };
  });
  const min = Math.round(Math.floor(divi / 60));
  const sec = Math.round(divi % 60);
  const min2 = Math.round(Math.floor((1200 - divi) / 60));
  const sec2 = Math.round((1200 - divi) % 60);

  // can remove minutes and seconds in STR var by IF checks
  return (
    <div className="timer">
      <Alert
        sx={{ mb: 3 }}
        severity="info"
        variant="outlined"
        // className="HomePage_p"
      >
        {/* You decide to spend <strong>{divi}%</strong> of your time on <strong>Typing</strong> and <strong>{100 - divi}%</strong> of your time on <strong>Watching Videos</strong>. <br></br> */}
        You choose to spend <strong>{min}</strong> minutes{" "}
        <strong>{sec}</strong> seconds to <strong>Type.</strong> <br></br>
        You choose to spend <strong>{min2}</strong> minutes{" "}
        <strong>{sec2}</strong> seconds to <strong>Watch Videos.</strong>{" "}
        <br></br>
        You would earn{" "}
        <strong>
          £
          {(2.75 + (divi * 0.15) / 100 + ((1200 - divi) * 0.1) / 100).toPrecision(
            3
          )}
        </strong>
        . <br></br>
      </Alert>
    </div>
  );
};

export default ConfirmUpdate;
