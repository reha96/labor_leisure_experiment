import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QueryBuilderRoundedIcon from '@mui/icons-material/QueryBuilderRounded';
import LinearProgress from '@mui/material/LinearProgress';

const Timer = (props) => {
  const { initialMinute = 0, initialSeconds = 0 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  const navigate = useNavigate();


  useEffect(() => {

    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval)
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000)
    return () => {
      window.localStorage.setItem('lastmin', minutes);
      window.localStorage.setItem('lastsec', seconds);
      window.localStorage.setItem('progress', 100 - Math.round((parseInt(window.localStorage.getItem('lastmin') * 60) + parseInt(window.localStorage.getItem('lastsec'))) / 6));

      clearInterval(myInterval);
    };
  });
  return (
    <div className="timer">
      <LinearProgress variant="determinate" value={parseInt(window.localStorage.getItem('progress'))} />
      {minutes <= 0 && seconds <= 0
        ? navigate('/end')
        : <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', }}> Time Remaining {minutes}:{seconds < 10 ? `0${seconds}` : seconds} &nbsp; <QueryBuilderRoundedIcon fontSize='small' /></p>
      }
      
    </div>
  )
}

export default Timer;