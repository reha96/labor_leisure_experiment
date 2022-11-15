import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Link from '@mui/material/Link';
import ButtonM from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import '../App.css';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from "react";
import Alert from '@mui/material/Alert';



const Home1 = () => {

  const [checked, setChecked] = useState(false);

  const handleChange = async (event) => {
    setChecked(event.target.checked);
    localStorage.setItem('stop', false)
    localStorage.setItem('attentionFail1', 0)
    localStorage.setItem('attentionFail2', 0)
    localStorage.setItem('treatment', Math.random())
    localStorage.setItem('lottery', Math.random())
    let passvalue = {
      attention1: localStorage.getItem('attentionFail1'),
      attention2: localStorage.getItem('attentionFail2'),
      treatment: localStorage.getItem('treatment')
    }
    let response = await fetch('http://localhost:5001/record/add', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passvalue),
    })
      .catch(error => {
        window.alert(error);
        return;
      });
    console.log(JSON.stringify(passvalue))
  }


  return (
    <div className='Page'>
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
      <Container className="p-1" fluid='sm'>
        <Typography variant='h6' className="center">Your Prolific ID</Typography>
        <p className="HomePage_p">
          Please enter your Prolific ID below:
        </p>

        <FormGroup className="center">
          <FormControlLabel control={<Checkbox checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }} />} label="I understand that this is a research study and no activities of mine as a part of it pose any threat to my Prolific membership." />
        </FormGroup>

        <div className='center'>
          {!checked ?
            <ButtonM disabled variant='contained' color='secondary' type="button">
              <strong>Continue</strong>
            </ButtonM>
            : <Link underline="none" href='/next'>
              <ButtonM disabled={!checked} variant='contained' color='secondary' type="button">
                <strong>Continue</strong>
              </ButtonM>
            </Link>}
        </div>
      </Container>
    </div>
  )
}

export default Home1