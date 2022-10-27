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
        setOpen(true)
        localStorage.setItem('localcount', 0)
        localStorage.setItem('lastmin', 9)
        localStorage.setItem('lastsec', 59)
        localStorage.setItem('transc', JSON.stringify(input))
        window.localStorage.setItem('progress', 0)
    }


    function valuetext(value) {
        localStorage.setItem('division', value);
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
            label: 'No Transcribing',
        },
        // {
        //     value: 50,
        //     label: 'Transcribe half of the time',
        // },
        {
            value: 100,
            label: 'Only Transcribe',
        },
    ];
    return (
        <div className='Page2'>
            <style type="text/css">
                {`
        .container-sm{
            background-color: white ;
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
                <Typography variant='h5' className="HomePage_p">End of Pratice</Typography>
                <p className="HomePage_p">
                    The practice session is over.
                    Decisions you make will now have financial consequences.
                </p>

                <Typography variant='h5' className="HomePage_p">Objective</Typography>
                <p className="HomePage_p">
                    Choose how much of the <strong>10 minutes</strong> time you are given you  <strong>ideally</strong> allocate for <strong>Transcribing</strong> and for <strong>Watching Videos</strong>.
                    You can choose to allocate your time however you like, using the slider on the bottom of this page.
                    <strong> For the first 2 minutes, you are obliged to transcribe.</strong>
                </p>

                <Typography variant='h5' className="HomePage_p">Allocation</Typography>
                <p className="HomePage_p">
                    Please use the slider below to choose what proportion of your time you would <strong>ideally</strong> allocate for <strong>Transcribing</strong> and for <strong>Watching Videos</strong>.
                    The number on the slider shows the percentage of your time allocated to <strong>Transcribing.</strong>
                </p>
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

                <h3 className="HomePage_p">Attention</h3>
                <p className="HomePage_p">
                    We will randomly select 10 percent of the participants and pay their earnings according to their allocation.
                    If you are among the 10 percent of the selected participants your earnings will be paid immediately as if you have worked for the allocated time.
                    All remaining participants will realize their choices themselves.
                </p>
                <div className='center'>
                    <ButtonM color="secondary" variant='contained' type="button" onClick={nextPage}>
                        <strong>Begin Study</strong>
                    </ButtonM>
                </div>

                <Dialog
                    open={open}
                    onClose={null}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Do you confirm your allocation?"}
                    </DialogTitle>
                    <DialogContent>
                        {/* <DialogContentText id="alert-dialog-description"> */}
                        <p><strong>{window.localStorage.getItem('division')}%</strong> of your budget is allocated to <strong>Transcribing</strong> and <strong>{100 - window.localStorage.getItem('division')}%</strong> of your budget is allocated to <strong>Watching Videos</strong>.</p>
                        <p>You earn <strong>{(((window.localStorage.getItem('division') / 100) * 600 * 3) / 100).toPrecision(2)}</strong> Euros.</p>

                        <p>You get <strong>{Math.floor((Math.round(((window.localStorage.getItem('division') / 100)) * 600)) / 60)}</strong> minutes <strong>{((Math.round(((window.localStorage.getItem('division') / 100)) * 600)) % 60)}</strong> seconds to <strong>Transcribe.</strong></p>

                        <p>You get <strong>{Math.floor((Math.round((1 - (window.localStorage.getItem('division') / 100)) * 600)) / 60)}</strong> minutes <strong>{((Math.round((1 - (window.localStorage.getItem('division') / 100)) * 600)) % 60)}</strong> seconds to <strong>Watch Videos.</strong></p>
                        {/* </DialogContentText> */}
                    </DialogContent>
                    <DialogActions>
                        <ButtonM color="error" onClick={handleClose}><strong>Change</strong></ButtonM>
                        <Link underline="none" href={localStorage.getItem('treatment') >= 0.5 ? "tasksalt" : "tasks"}>
                            <ButtonM color="success" onClick={handleClose} autoFocus>
                                <strong>Confirm</strong>
                            </ButtonM>
                        </Link>
                    </DialogActions>
                </Dialog>

            </Container>
        </div >
    )
}

export default Confirm