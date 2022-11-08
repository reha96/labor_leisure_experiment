import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Link from '@mui/material/Link';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import ConfirmUpdate from '../Components/ConfirmUpdate';
import ButtonM from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ImportantDevices } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Confirm = () => {

    var input = [];

    const nextPage = (event) => {
        // setOpen(true)
        localStorage.setItem('stop2', false)
        // localStorage.setItem('lastmin', 9)
        // localStorage.setItem('lastsec', 59)
        // localStorage.setItem('transc', JSON.stringify(input))
        // window.localStorage.setItem('progress', 0)
    }


    function valuetext(value) {
        localStorage.setItem('time_choice', value);
        return;
    }


    const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
    };


    const marks = [
        {
            value: 0,
            label: 'No Typing',
        },
        {
            value: 100,
            label: 'Only Typing',
        },
    ];
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
                {/* <Typography variant='h6' className="center">End of Practice</Typography> */}
                <p className="HomePage_p">
                    The practice session is over.
                    We now ask you to decide how you would like to spend the next <strong>10 minutes</strong> based on what you saw in the practice session.
                </p>

                <Typography variant='h6' className="center">Time Choice</Typography>
                <p className="HomePage_p">
                    Please indicate how much of the <strong>10 minutes</strong> you have you want to spend on <strong>Typing</strong> and on <strong>Watching Videos</strong>.
                    {/* Distribute your time however you like using the slider below. */}
                </p>
                <p className="HomePage_p">
                    You can <strong>move the slider</strong> to change your choice.
                </p>

                {/* <Typography variant='h6' className="center">Allocation</Typography>
                <p className="HomePage_p">
                    Please use the slider below to choose what proportion of your time you would <strong>ideally</strong> allocate for <strong>Transcribing</strong> and for <strong>Watching Videos</strong>.
                    The number on the slider shows the percentage of your time allocated to <strong>Transcribing.</strong>
                </p> */}
                <Box sx={{
                    mx: 10,
                    my: 5
                }}>
                    <Slider
                        // className="HomePage_p"
                        aria-label="Small steps"
                        defaultValue={50}
                        getAriaValueText={valuetext}
                        step={1}
                        track="normal"
                        marks={marks}
                        min={0}
                        max={100}
                        valueLabelDisplay="on"
                    />
                </Box>

                <ConfirmUpdate />

                <Typography variant='h6' className="center">Lottery</Typography>
                <p className="HomePage_p">
                    We will now randomly select 1 out of each 20 participants and pay them the above indicated sum.
                    <strong> If you are among the selected participants your bonus is paid immediately as if you have worked for the above chosen time. </strong>
                    All remaining participants get a bonus equal to the amount they will work meeting the quality criteria.
                    {/* All remaining participants realize their choices themselves and get a bonus equal to the amount they work meeting the quality criteria.
                     */}
                </p>

                {/* <Typography variant='h6' className="center">Attention</Typography>
                <p className="HomePage_p">
                    On the next page you will spend 12 minutes.
                    <strong> For the first 2 minutes, you are obliged to type. </strong>
                    In the remaining 10 minutes, you can switch between the tasks as you want.
                    Your bonus is equal to the amount you work meeting the quality criteria.
                </p> */}

                <div className='center'>
                    <Link underline="none" href={localStorage.getItem('lottery') >= 0.95 ? "lotw" : "lotl"}>
                    <ButtonM color="secondary" variant='contained' type="button" onClick={nextPage}>
                        <strong>Participate in Lottery</strong>
                    </ButtonM>
                    </Link>
                </div>

            </Container>
        </div >
    )
}

export default Confirm