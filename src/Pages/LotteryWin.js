import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Link from '@mui/material/Link';
import '../App.css';
import Container from 'react-bootstrap/Container';
import ConfirmUpdate from '../Components/ConfirmUpdate';
import ButtonM from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';


const LotteryWin = () => {

    const [divi, setDivi] = useState(window.localStorage.getItem('time_choice'));
    return (
        <div className='Page2'>
            <style type="text/css">
                {`
        .container-sm{
            background-color: white ;
            padding-bottom:5vh!important;
            padding-top:2vh!important;
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

                <Typography variant='h6' className="center">You have won the lottery!</Typography>
                <p className="HomePage_p">
                    The study ends here for you. Thank you for your participation.
                </p>
                <p className="HomePage_p">
                    <strong>Your total earning is {((((divi / 100) * 600 * 0.75) / 100) + ((((100 - divi) / 100) * 600 * 0.25) / 100) + 3).toPrecision(2)} €.</strong>
                </p>

                <Typography variant='h6' className="center">Contact Information</Typography>
                <p className="HomePage_p">This study is conducted by Reha Tuncer, PhD student at the University of Luxembourg, under the supervision of Dr. Kerstin Bongard-Blanchy and Dr. Ernesto Reuben.
                    The objective is to better understand individual decision-making.
                    Please contact <strong>reha.tuncer@uni.lu</strong> if you have any questions about the study.
                </p>

                {/* <div className='center'>
                    <ButtonM color="secondary" variant='contained' type="button" onClick={nextPage}>
                        <strong>Begin Study</strong>
                    </ButtonM>
                </div> */}

            </Container>
        </div >
    )
}

export default LotteryWin