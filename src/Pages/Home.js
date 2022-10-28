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



const Home = () => {

  const [checked, setChecked] = useState(false);
  const [btnStatus, setBtnStatus] = useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);

  };
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
        {/* <Typography variant="h4" className='center'>Welcome</Typography>
        <p className="HomePage_p">
          Thank you for participating in this study.
          Please read and follow the instructions carefully as they contain everything you need to know to participate.</p> */}
          
          <Alert className="HomePage_p" severity="warning"> Please use Firefox or a Chromium (Chrome, Brave, Edge) based browser for the study. <strong>Safari is not allowed. </strong></Alert>
        {/* <p className="HomePage_p">
          Participation in this study is voluntary and will take no more than <strong>25 minutes</strong> of your time.
          After the details of the study have been explained to you, you may decline to participate if you so wish.
        </p> */}

        <Typography variant='h5' className="HomePage_p">Study Description</Typography>
        <p className="HomePage_p">
          You are about to choose how long you want to perform two tasks: Watching videos or typing.
          Your compensation in this study depends on your decisions.
          The maximum amount of <strong>bonus</strong> you can earn is <strong>8€</strong>.
          After the decision-making part, you will be asked to complete a brief questionnaire.
          The total duration of the study is no more than <strong>22 minutes.</strong>
        </p>

        <Typography variant='h5' className="HomePage_p">Data Collected</Typography>
        <p className="HomePage_p">
          In the survey, we will ask you to share some information about yourself, i.e. birth year, gender, income, employment, educational background and the browser used for the study.
          <strong> All your personal data will be anonymized.</strong> Your choices (from the decision-making tasks and survey) will be stored in a secured server in University of Luxembourg.
          Only the researchers working on this study will have the access to these data.
          The data collected during the study will only be used for the research project.
          <strong> The data will be used for publications without personally identifying you.</strong>
          {/* Please note that if you choose not to fully participate, you will not be eligible to receive payment. */}
        </p>

        {/* <p className="HomePage_p">
          Your compensation depends your decisions throughout the first part of this study.
          The maximum amount you can earn in this study is <strong>20€</strong>.
          After all the answers are collected, we will pay all participants their earnings.
          
        </p> */}

        <Typography variant='h5' className="HomePage_p">Contact Information</Typography>
        <p className="HomePage_p">This study is conducted by Reha Tuncer, PhD student at the University of Luxembourg, under the supervision of Dr. Kerstin Bongard-Blanchy and Dr. Ernesto Reuben.
          The objective is to better understand individual decision-making.
          Please contact reha.tuncer@uni.lu if you have any questions about the study.
        </p>

        <Typography variant='h5' className="HomePage_p">Your Consent</Typography>
        <p className="HomePage_p">
          I have been informed in writing on how the study will be carried out.
          I have also been informed about the anonymity of my personal data and processing of it without revealing my identity, under the conditions detailed in the GDPR.
          I am aware that I may withdraw my consent any time and I do not need to give reasons for my withdrawal and that there will be no negative consequences.
        </p>

        <FormGroup className="center">
          <FormControlLabel control={<Checkbox checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }} />} label="Yes, I give my consent." />
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

export default Home