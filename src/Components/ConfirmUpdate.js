import React from 'react'
import { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';

const ConfirmUpdate = (props) => {

  const [divi, setDivi] = useState(window.localStorage.getItem('time_choice'));
  useEffect(() => {

    let myInterval = setInterval(() => {
      setDivi(window.localStorage.getItem('time_choice'));
    }, 500)
    return () => {
      clearInterval(myInterval);
    };
  });
  return (
    <div className="timer">
      <Alert sx={{mb:3}} severity="info" variant="outlined" className="HomePage_p">

        You spend <strong>{divi}%</strong> of your time on <strong>Typing</strong> and <strong>{100 - divi}%</strong> of your time on <strong>Watching Videos</strong>: <br></br>

        You earn 	<strong>£{((((divi / 100) * 720 * 0.6) / 100) + ((((100 - divi) / 100) * 600 * 0.2) / 100) + 1).toPrecision(2)}</strong>. <br></br>

        You get <strong>{Math.floor((Math.round(((divi / 100)) * 600)) / 60)+2}</strong> minutes <strong>{((Math.round(((divi / 100)) * 600)) % 60)}</strong> seconds to <strong>Type.</strong> <br></br>

        You get <strong>{Math.floor((Math.round((1 - (divi / 100)) * 600)) / 60)}</strong> minutes <strong>{((Math.round((1 - (divi / 100)) * 600)) % 60)}</strong> seconds to <strong>Watch Videos.</strong> <br></br>
      </Alert>

    </div>
  )
}

export default ConfirmUpdate;