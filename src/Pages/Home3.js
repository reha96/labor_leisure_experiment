import * as React from 'react';
import Link from '@mui/material/Link';
import '../App.css';
import Container from 'react-bootstrap/Container';
import ButtonM from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import DialogContentText from '@mui/material/DialogContentText';


const Home3 = () => {

    var input = [];

    const nextPage = (event) => {
        setOpen(true)
        localStorage.setItem('localcount', 0)
        localStorage.setItem('clickedOKtoswitch', 'no')
        localStorage.setItem('lastmin', 1)
        localStorage.setItem('lastsec', 59)
        localStorage.setItem('transc', JSON.stringify(input))
        window.localStorage.setItem('progress', 0)
    }


    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };


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
                {/* <Typography variant='h6' className="center">Switching Tasks</Typography>
                <p className="HomePage_p">
                    You can <strong>switch between the two tasks at any moment</strong> using the tabs within the study interface.
                    As you switch tabs, your progress is automatically saved.</p>
                <p className="HomePage_p">For example, if you did not finish typing a sentence and decide to watch videos before submitting it, the text you typed will remain when switching back.
                </p> */}

                <Typography variant='h6' className="center">Practice</Typography>
                <p className="HomePage_p">
                    {/* Clicking the next button will bring you to a <strong>2 minute practice session</strong> to allow you to familiarize with the tasks and the study interface.
                    Once the practice session is over, you will be taken back to the rest of the study.
                    <strong> The practice session will not give you a typing bonus.</strong> */}
                    Clicking the next button will bring you to a 2 minute practice session to familiarize you with the tasks.
                    <strong> You have 1 minute for each task and there is no bonus payment in the practice session.</strong> </p>
                    <p className="HomePage_p"> Once the practice session is over, you will start the study.
                </p>

                <div className='center'>
                    <Link underline="none" href={"practice"}>
                        <ButtonM color="secondary" variant='contained' type="button" onClick={nextPage}>
                            <strong>Begin Practice</strong>
                        </ButtonM>
                    </Link>
                </div>
            </Container>
        </div >
    )
}

export default Home3