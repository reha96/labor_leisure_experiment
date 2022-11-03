import '../App.css';
import Link from '@mui/material/Link';
import ButtonM from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import { useState } from "react";


const Home2 = () => {

    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose your answer');

    const [counter, setCounter] = useState(parseInt(window.localStorage.getItem('attentionFail')));
    var Fail = 0;





    const handleRadioChange = (event) => {
        event.preventDefault();
        setValue(event.target.value);   
        if (value === '1') {
            // setHelperText('You got it!');
            setError(false);

        }
        else if (value === '2' || value === 'no') {
            // setHelperText('Sorry, wrong answer!');
            Fail = parseInt(counter) + 1;
            setError(true);
            setCounter(Fail);
            localStorage.setItem('attentionFail', Fail);
        }
        else {
            // setHelperText('Please select an option.');
            setError(true);
            setCounter(Fail);
            localStorage.setItem('attentionFail', Fail);
        }
        
        
        // setHelperText(' ');
        // setError(false);
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        if (value === '1') {
            setHelperText('You got it!');
            setError(false);

        }
        else if (value === '2' || value === 'no') {
            setHelperText('Sorry, wrong answer!');
            Fail = parseInt(counter) + 1;
            setError(true);
            setCounter(Fail);
            localStorage.setItem('attentionFail', Fail);
        }
        else {
            setHelperText('Please select an option.');
            setError(true);
            setCounter(Fail);
            localStorage.setItem('attentionFail', Fail);
        }

    };
    var input = [];


    return (
        <div className='Page2'>
            <style type="text/css">
                {`
        .container-sm{
            background-color: white ;
            padding-top:5vh!important;
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
                {/* <Typography variant='h4' className="center">First Part</Typography> */}
                <p className="HomePage_p">
                    In this study there are two tasks.
                    The amount of your compensation will depend on how long you perform each task.
                    {/* Depending on your decisions about how you allocate your time for each of the tasks, you earn money for yourself. */}
                </p>
                <Typography variant='h6' className="center">Task 1: Typing</Typography>
                <p className="HomePage_p">
                    {/* The first task requires you to exert some effort. */}
                    For this task you type sentences taken from Homer’s Iliad in English.
                    Each second you work on this task will be paid as a bonus, fixed at <strong>0.5 cents per second</strong>.
                    Typing faster in this task will not earn you a higher bonus.
                    However, there are minimum quality requirements to get the typing bonus.
                </p>

                <Typography variant='h6' className="center">Requirements</Typography>
                <p className="HomePage_p">
                    To get your typing bonus, you are required to type <strong>at least 1 sentence per minute</strong>.
                    Each sentence you type should also have <strong>at least 70 percent accuracy</strong>.
                    For example, if a sentence contains a total of 10 characters (letters and punctuation marks), you should correctly retype at least 7.
                </p>
                {/* This task represents your willingness to work for a given wage. */}

                <form onSubmit={handleSubmit} className="HomePage_p">
                    <FormControl error={error} variant="standard">
                        <p>To get the typing bonus, you need to type ... </p>
                        <RadioGroup
                            aria-labelledby="demo-error-radios"
                            name="quiz"
                            value={value}
                            onChange={handleRadioChange}
                        >
                            <FormControlLabel value="no" control={<Radio />} label="no sentences." />
                            <FormControlLabel value="1" control={<Radio />} label="at least 1 sentence per minute." />
                            <FormControlLabel value="2" control={<Radio />} label="at least 2 sentences per minute." />

                        </RadioGroup>
                        <FormHelperText>{helperText}</FormHelperText>
                    </FormControl>
                </form>
                <Typography variant='h6' className="center">Task 2: Watching Videos</Typography>
                <p className="HomePage_p">
                    The second task is watching popular short videos from TikTok and YouTube.
                    For this task you only decide how long you want to watch the available videos.
                    The study interface will automatically take you to the next videos.
                    You will not able to skip or switch between videos yourself.
                    Each second you spend on this task will earn you <strong>0.25 cents per second</strong>.
                    {/* You will not earn a wage for this task, but the videos are meant to be fun and enjoyable compared to the first task. */}
                    {/* Naturally, the shorter time you allocate for the first task, the longer you can enjoy the videos. */}
                    {/* This task represents how much you value leisure, instead of working for a given wage. */}
                    {/* You can scroll between different videos and start watching the videos you like.
                    You are not limited to watch the videos from the beginning to end.
                    You can switch between videos as you please. */}
                    {/* There is enough content to cover the entire study duration. */}
                </p>

                <Typography variant='h6' className="center">Switching Tasks</Typography>
                <p className="HomePage_p">
                    You can <strong>switch between the two tasks at any moment</strong> using the tabs within the study interface.
                    As you switch tabs, your progress is automatically saved.
                    For example, if you did not finish typing a sentence and decide to watch videos before submitting it, the text you typed will remain when switching back.
                </p>
                {/* <Typography variant='h6' className="center">Practice</Typography>
                <p className="HomePage_p">
                    Clicking the next button will bring you to a <strong>2 minute practice session</strong> to allow you to familiarize with the tasks and the study interface.
                    Once the practice session is over, you will be taken back to the rest of the study.
                </p> */}
                <div className='center'>
                    {!error ? 
                    
                    <ButtonM variant='contained' color='secondary' type="button">
                        <strong>Continue</strong>
                    </ButtonM>
                        : <Link underline="none" href='/next2'>
                            <ButtonM variant='contained' color='secondary' type="button">
                                <strong>Continue</strong>
                            </ButtonM>
                        </Link>}
                    {/* <ButtonM variant='contained' color='secondary' type="button" onClick={handleSubmit}>
                            <strong>Continue</strong>
                        </ButtonM> */}
                </div>

            </Container>
        </div>
    )
}

export default Home2