import React from 'react'
import Link from '@mui/material/Link';
import ButtonM from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import '../App.css';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const Home1 = () => {

  const [checked, setChecked] = useState(false);
  const [typedValue, setTypedValue] = useState("");
  // console.log(typedValue)

  const handleChange = async (event) => {
    setChecked(event.target.checked);
    localStorage.setItem('stop', false)
  }

  const onClick = async (event) => {
    let passvalue = {
      ID: typedValue
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

        <Typography variant='h6' className="center">Your Consent</Typography>
        <p className="HomePage_p">
          I have been informed in writing on how the study will be carried out.
          I have also been informed about the anonymity of my personal data and processing of it without revealing my identity, under the conditions detailed in the GDPR.
          I am aware that I may withdraw my consent any time and I do not need to give reasons for my withdrawal and that there will be no negative consequences.
        </p>

        <Box
          className="center"
          sx={{ m: 2.5 }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Prolific ID" variant="outlined" onChange={(event) => setTypedValue(event.target.value)} />
        </Box>

        <FormGroup className="center">
          <FormControlLabel control={<Checkbox checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }} />} label="Yes, I give consent." />
        </FormGroup>



        <div className='center'>
          {typedValue === "" ?
            <ButtonM disabled variant='contained' color='secondary' type="button">
              <strong>Continue</strong>
            </ButtonM>
            : <Link underline="none" href='/next'>
              <ButtonM disabled={!checked} variant='contained' color='secondary' type="button" onClick={onClick}>
                <strong>Continue</strong>
              </ButtonM>
            </Link>}
        </div>
      </Container>
    </div>
  )
}

export default Home1