import React from 'react'; 
import Typography from '@mui/material/Typography';
import ButtonM from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
  
const End = () => {
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
        <Typography variant='h6' className="center">End Survey</Typography>
        <p className="HomePage_p">
          Please <a href="https://uvafeb.eu.qualtrics.com/jfe/form/SV_baAihrq8YjHVLkq">click</a> on the link to complete the end survey.
          
        </p>

        <Typography variant='h6' className="center">Contact Information</Typography>
        <p className="HomePage_p">This study is conducted by Reha Tuncer, PhD student at the University of Luxembourg, under the supervision of Dr. Kerstin Bongard-Blanchy and Dr. Ernesto Reuben.
          The objective is to better understand individual decision-making.
          Please contact <strong>reha.tuncer@uni.lu</strong> if you have any questions about the study.
        </p>
        
    </Container>
    </div>

  )
}
  
export default End