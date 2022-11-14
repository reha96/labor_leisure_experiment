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

  const handleChange = async (event) => {
    setChecked(event.target.checked);
    localStorage.setItem('stop', false)
    localStorage.setItem('attentionFail1', 0)
    localStorage.setItem('attentionFail2', 0)
    localStorage.setItem('treatment', Math.random())
    localStorage.setItem('lottery', Math.random())
    let passvalue = {
      Attention_Check_1: localStorage.getItem('attentionFail1'),
      Attention_Check_2: localStorage.getItem('attentionFail2'),
      Treatment: localStorage.getItem('treatment')
    }
    let response = await fetch('http://localhost:5001/record/add', {
      method: 'POST',
      body: 'fucku',
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
        {/* <Typography variant="h4" className='center'>Welcome</Typography>
        <p className="HomePage_p">
          Thank you for participating in this study.
          Please read and follow the instructions carefully as they contain everything you need to know to participate.</p> */}

        <Alert sx={{ mb: 2 }} className="HomePage_p" severity="warning"> Please use a Chromium (Chrome, Brave, Edge) based browser. <strong>Safari and Firefox are not allowed for this study. </strong></Alert>
        {/* <p className="HomePage_p">
          Participation in this study is voluntary and will take no more than <strong>25 minutes</strong> of your time.
          After the details of the study have been explained to you, you may decline to participate if you so wish.
        </p> */}

        <Typography variant='h6' className="center">Study Description</Typography>
        <p className="HomePage_p">
          {/* You are about to choose how long you want to perform two tasks: <strong>Watching Videos</strong> or <strong>Typing</strong>. <br></br>

          {/* The amount of your compensation in this study depends on your decisions.
          The base amount you earn for participation is <strong>4.5€</strong>.
          You can earn <strong>up to 3€</strong> in addition to the show-up fee as your <strong>bonus</strong>.
          After the decision-making part, you will be asked to complete a brief questionnaire.
          The total duration of the study is no more than <strong>22 minutes.</strong> */}

          In this study you will:</p>
        <p className="HomePage_p">
          <ul class="a">
            <li>Watch videos and retype text (decision-making tasks)</li>
            <li>Complete a questionnaire.</li>
          </ul>
        </p>
        <p className="HomePage_p">
          The total duration of the study is about <strong>22 minutes.</strong>  <br></br>
          You will receive <strong>4.5€</strong> for your participation plus an additional bonus payment that could go up to <strong>3€</strong> depending on the time you choose to spend on each decision-making task.
        </p>

        <Typography variant='h6' className="center">Data Collected</Typography>
        <p className="HomePage_p">
          In the survey, we collect information about yourself, i.e. birth year, gender, income, employment, educational background and the browser used for the study.
          <strong> All your personal data will be anonymized.</strong> Your choices (from the decision-making tasks and survey) will be stored in a secured server at the University of Luxembourg.
          Only the researchers working on this study will have the access to this data.
          Data collected during the study will only be used for the research project.
          <strong> This data will be used for publications without personally identifying you.</strong>
          {/* Please note that if you choose not to fully participate, you will not be eligible to receive payment. */}
        </p>

        {/* <p className="HomePage_p">
          Your compensation depends your decisions throughout the first part of this study.
          The maximum amount you can earn in this study is <strong>20€</strong>.
          After all the answers are collected, we will pay all participants their earnings.
          
        </p> */}

        <Typography variant='h6' className="center">Your Consent</Typography>
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