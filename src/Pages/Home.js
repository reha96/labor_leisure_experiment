import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Link from '@mui/material/Link';
import ButtonM from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import '../App.css';
import Typography from '@mui/material/Typography';


const Home = () => {
  return (
    <div className='Page'>
      <style type="text/css">
        {`
        .container-sm{
            background-color: white ;
            padding-bottom:5vh!important;;
            max-width: 720px;
            height:100vh;
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
        <Typography variant="h3" className='center'>Hello</Typography>
        <p className="HomePage_p">
          Thank you for participating in this study.  </p>
        <p className="HomePage_p">Please read and follow the instructions carefully as they contain everything you need to know to participate.</p>
        <p className="HomePage_p">
          Participation in this study is voluntary and will take no more than <strong>15 minutes</strong> of your time.
          All responses will be processed anonymously.
          After the details of the study have been explained to you, you may decline to participate if you so wish.
          {/* Please note that if you choose not to fully participate, you will not be eligible to receive payment. */}
        </p>
        <p className="HomePage_p">This study consists of two parts.
          In the first part, you will choose how long you want to perform a task that requires effort and a task that is purely for leisure.
          In the second part, you will be asked to complete a brief questionnaire.
        </p>
        <p className="HomePage_p">
          Your compensation depends your decisions throughout the first part of this study.
          The maximum amount you can earn in this study is <strong>20€</strong>.
          After all the answers are collected, we will pay all participants their earnings.
          {/* , plus a flat participation fee of 2€ */}
        </p>
        <p className="HomePage_p">This study is conducted by Reha Tuncer, PhD student at the University of Luxembourg, under the supervision of Dr. Kerstin Bongard-Blanchy and Dr. Ernesto Reuben.
          The objective is to better understand individual decision-making.
          Please contact reha.tuncer@uni.lu if you have any questions about the study.
        </p>

        <div className='center'>
          <Link underline="none" href='/next'>
            <ButtonM variant='contained' color='secondary' type="button">
              <strong>Next Page</strong>
            </ButtonM>
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default Home