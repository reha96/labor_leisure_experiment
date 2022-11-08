import '../App.css';
import Link from '@mui/material/Link';
import ButtonM from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import { useState } from "react";


const Home2 = () => {

    const [counter, setCounter] = useState(parseInt(window.localStorage.getItem('attentionFail')));

    var Fail = 0;

    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('You have 2 opportunities to get this question right.');

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value);

        if (event.target.value === '1-70') {
            setHelperText('You got it!');
            setError(false);
            localStorage.setItem('stop', 'true');
            console.log(localStorage.getItem('stop'));
        } else if ((event.target.value === '1') || (event.target.value === 'fast')) {
            setHelperText('Sorry, wrong answer!');
            setError(true);
            // Fail = parseInt(counter) + 1;
            // setCounter(Fail);
            // localStorage.setItem('attentionFail', Fail);
            localStorage.setItem('stop', 'false');
        } else {
            setHelperText('Please select an option.');
            setError(true);
            localStorage.setItem('stop', 'false');
        }
        setHelperText(' ');
        setError(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (value === '1-70') {
            setHelperText('You got it!');
        } else if ((value === '1') || (value === 'fast')) {
            setHelperText('Sorry, wrong answer!');
            setError(true);
            Fail = parseInt(counter) + 1;
            setCounter(Fail);
            localStorage.setItem('attentionFail', Fail);
        } else {
            setHelperText('Please select an option.');
            setError(true);
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
                    In this study there are two tasks that you can choose to do for 10 minutes.
                    {/* In this study there are two tasks. */}
                    {/* The amount of your compensation will depend on how long you perform each task. */}
                    {/* Depending on your decisions about how you allocate your time for each of the tasks, you earn money for yourself. */}
                </p>
                <Typography variant='h6' className="center">Task 1: Typing</Typography>
                <p className="HomePage_p">
                    {/* The first task requires you to exert some effort. */}
                    You type sentences taken from Homer’s Iliad in English.</p>
                <p className="HomePage_p">
                    <strong>Each second you work on this task will be paid as a bonus fixed at 0.5 cents per second, if the quality criteria are met:</strong>
                    <ul class="a">
                        <li>Type at least 1 sentence per minute you spend on this task.</li>
                        <li>Each submitted sentence has at least 70 percent accuracy. <br></br>
                            For example, if a sentence contains a total of 10 characters (letters and punctuation marks), you should correctly retype at least 7.</li>
                    </ul>
                    <strong>Typing faster in this task will not earn you a higher bonus.</strong>
                </p>

                {/* <Typography variant='h6' className="center">Requirements</Typography>
                <p className="HomePage_p">
                    To get your typing bonus, you are required to 
                    Each 
                    
                </p> */}
                {/* This task represents your willingness to work for a given wage. */}


                <Typography variant='h6' className="center">Task 2: Watching Videos</Typography>
                <p className="HomePage_p">
                    You watch popular short videos from TikTok and YouTube.
                    You will not able to skip or switch between videos yourself.<br></br>
                </p>
                <p className="HomePage_p">
                    <strong>Each second you spend on this task will earn you 0.25 cents per second.</strong>
                </p>
                {/* You will not earn a wage for this task, but the videos are meant to be fun and enjoyable compared to the first task. */}
                {/* Naturally, the shorter time you allocate for the first task, the longer you can enjoy the videos. */}
                {/* This task represents how much you value leisure, instead of working for a given wage. */}
                {/* You can scroll between different videos and start watching the videos you like.
                    You are not limited to watch the videos from the beginning to end.
                    You can switch between videos as you please. */}
                {/* There is enough content to cover the entire study duration. */}
                {/* For this task you only decide how long you want to watch the available videos. */}
                {/* The study interface will automatically take you to the next videos. */}


                <Box className="center" sx={{ display: 'flex' }}>
                    <form onSubmit={handleSubmit}>
                        <FormControl sx={{ m: 3 }} error={error} variant="standard">
                            <FormLabel id="demo-error-radios">To get the typing bonus ...</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-error-radios"
                                name="quiz"
                                value={value}
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel value="fast" control={<Radio />} label="type as fast as possible." />
                                <FormControlLabel value="1" control={<Radio />} label="type at least 1 sentence per minute." />
                                <FormControlLabel value="1-70" control={<Radio />} label="type at least 1 sentence per minute with 70 percent accuracy." />

                            </RadioGroup>
                            <FormHelperText>{helperText}</FormHelperText>

                        </FormControl>
                    </form>

                    {/* <ButtonM sx={{ mb: 1.5}} type="submit" variant="outlined" onClick={handleSubmit} >
                        Check Answer
                    </ButtonM> */}
                </Box>

                {/* <Typography variant='h6' className="center">Practice</Typography>
                <p className="HomePage_p">
                    Clicking the next button will bring you to a <strong>2 minute practice session</strong> to allow you to familiarize with the tasks and the study interface.
                    Once the practice session is over, you will be taken back to the rest of the study.
                </p> */}
                <div className='center'>
                    {!(localStorage.getItem('stop') === 'true') ?
                        <ButtonM variant='contained' color='secondary' type="button" onClick={handleSubmit} >
                            <strong>Continue</strong>
                        </ButtonM>
                        :
                        <Link underline="none" href='/next2'>
                            <ButtonM variant='contained' color='secondary' type="button" >
                                <strong>Continue</strong>
                            </ButtonM>
                        </Link>}
                </div>

            </Container>
        </div >
    )
}

export default Home2