import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QueryBuilderRoundedIcon from '@mui/icons-material/QueryBuilderRounded';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

const TimerPractice = (props) => {
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
      window.localStorage.setItem('progress', 100 - Math.round((parseInt(window.localStorage.getItem('lastmin') * 60) + parseInt(window.localStorage.getItem('lastsec'))) / 1.2));

      clearInterval(myInterval);
    };
  });
  return (
    <div className="timer">
      <LinearProgress variant="determinate" value={parseInt(window.localStorage.getItem('progress'))} />
      {minutes <= 0 && seconds <= 0
        ? navigate('/confirm')
        : <Typography variant='h6' sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}><QueryBuilderRoundedIcon/> {minutes}:{seconds < 10 ? `0${seconds}` : seconds} &nbsp;</Typography>
        // <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', }}>  {minutes}:{seconds < 10 ? `0${seconds}` : seconds} &nbsp; </p>
      }
      
    </div>
  )
}

export default TimerPractice;