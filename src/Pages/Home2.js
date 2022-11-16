import '../App.css';
import Link from '@mui/material/Link';
import ButtonM from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';


const Home2 = () => {

    const [counter, setCounter] = useState(parseInt(window.localStorage.getItem('attentionFail1')));

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
            localStorage.setItem('attentionFail1', Fail);
        } else {
            setHelperText('Please select an option.');
            setError(true);
        }
    };

    var input = [];


    const [form, setForm] = useState({
        name: "",
        position: "",
        level: "",
        records: [],
      });
      const params = useParams();
      const navigate = useNavigate();
      
      useEffect(() => {
        async function fetchData() {
          const id = params.id.toString();
          const response = await fetch(`http://localhost:5001/record/${params.id.toString()}`);
      
          if (!response.ok) {
            const message = `An error has occurred: ${response.statusText}`;
            window.alert(message);
            return;
          }
      
          const record = await response.json();
          if (!record) {
            window.alert(`Record with id ${id} not found`);
            navigate("/");
            return;
          }
      
          setForm(record);
        }
      
        fetchData();
        return;
    }, [params.id, navigate]);

   console.log(form)

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
                <p className="HomePage_p">
                    In this study there are two tasks that you can choose to do for 10 minutes.
                </p>
                <Typography variant='h6' className="center">Task 1: Typing</Typography>
                <p className="HomePage_p">
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

                <Typography variant='h6' className="center">Task 2: Watching Videos</Typography>
                <p className="HomePage_p">
                    You watch popular short videos from TikTok and YouTube.
                    You will not able to skip or switch between videos yourself.<br></br>
                </p>
                <p className="HomePage_p">
                    <strong>Each second you spend on this task will earn you 0.25 cents per second.</strong>
                </p>
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

                </Box>
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