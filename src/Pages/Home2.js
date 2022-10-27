import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../App.css';
import Link from '@mui/material/Link';
import ButtonM from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import Typography from '@mui/material/Typography';

const Home2 = () => {

    var input = [];

    localStorage.setItem('treatment', Math.random());

    const nextPage = (event) => {
        localStorage.setItem('localcount', 0)
        localStorage.setItem('lastmin', 1)
        localStorage.setItem('lastsec', 59)
        localStorage.setItem('transc', JSON.stringify(input))
        window.localStorage.setItem('progress', 0)
    }

    return (
        <div className='Page2'>
            <style type="text/css">
                {`
        .container-sm{
            background-color: white ;
            padding-bottom:5vh!important;;
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
                <Typography variant='h4' className="center">First Part</Typography>
                <p className="HomePage_p">
                    In this study there are two types of tasks. Depending on your decisions about how you allocate your time for each of the tasks, you earn money for yourself.
                </p>
                <Typography variant='h5' className="HomePage_p">Task 1: Transcribing</Typography>
                <p className="HomePage_p">
                    The first task requires you to exert some effort.
                    You will transcribe sentences taken from the English translation of Homer’s Iliad.
                    Each transcribed sentence should have at least <strong>75 percent accuracy</strong> in order to be valid.
                    For example, if a sentence contains a total of 20 characters (letters and punctuation marks), you should correctly transcribe at least 15.
                    Each second you spend on this task will earn you a wage, fixed at <strong>3 cents per second</strong>.
                    You are required to complete at least<strong> one transcription per minute</strong> to get paid.
                    {/* This task represents your willingness to work for a given wage. */}
                </p>
                <Typography variant='h5' className="HomePage_p">Task 2: Watching Videos</Typography>
                <p className="HomePage_p">
                    The second task is watching some popular short videos found on TikTok and YouTube.
                    On this page you will decide how long you want to watch the avaliable videos.
                    The study interface will automatically take you to the next videos, meaning you are not able to skip or switch between videos yourself.
                    Each second you spend on this task will earn you a wage, fixed at <strong>1 cents per second</strong>.
                    {/* You will not earn a wage for this task, but the videos are meant to be fun and enjoyable compared to the first task. */}
                    {/* Naturally, the shorter time you allocate for the first task, the longer you can enjoy the videos. */}
                    {/* This task represents how much you value leisure, instead of working for a given wage. */}
                    {/* You can scroll between different videos and start watching the videos you like.
                    You are not limited to watch the videos from the beginning to end.
                    You can switch between videos as you please. */}
                    {/* There is enough content to cover the entire study duration. */}
                </p>

                <Typography variant='h5' className="HomePage_p">Task Switching</Typography>
                <p className="HomePage_p">
                    You can switch between the two tasks at any moment using the tabs within the study interface.
                    As you select one tab, your progress in the other will be automatically saved.
                    For example, if you worked on a transcription and decide to watch short videos before submitting it, your text will remain when switching back.
                </p>   
                <Typography variant='h5' className="HomePage_p">Practice</Typography>
                <p className="HomePage_p">
                    Clicking the next button will bring you to a <strong>2 minute practice session</strong> to allow you to familiarize with the tasks and the study interface.
                    Once the practice session is over, you will be taken back to the rest of the study.
                </p>
                <p className="HomePage_p">
                    Please note that practice session is not paid.
                </p>

                <div className='center'>
                    <Link underline="none" href={'/next/tasksp'}>
                        <ButtonM variant='contained' color='secondary' type="button" onClick={nextPage}>
                        <strong>Next Page</strong>
                        </ButtonM>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default Home2