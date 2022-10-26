import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import '../App.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TimerPractice from '../Components/TimerPractice';
import LaborPractice from '../Components/LaborPractice';
import LeisurePractice from '../Components/LeisurePractice';


const TasksPractice = () => {

  // const [pcounter, setPcounter] = useState(() => {
  //   console.log("page refreshed, localcount is " + localStorage.getItem('localcount'))
  //   return localStorage.getItem('localcount')
  // });

  const savelabor = (event) => {
    // setPcounter(window.localStorage.getItem('localcount'))
    // console.log("clicked labor task")
  };

  const saveleisure = (event) => {
    // setPcounter(window.localStorage.getItem('localcount'))
    // console.log("clicked leisure task")
  };

  return (
    <div className='Pagetasks'>
      <Container className="p-1" fluid='sm'>
        <TimerPractice initialMinute={window.localStorage.getItem('lastmin')} initialSeconds={window.localStorage.getItem('lastsec')} />
        <p style={{ display: 'flex', justifyContent: 'center' }}>Choose a task:</p>
        <style type="text/css">
          {`
        .bg-info {
          background-color: rgba( 192, 223, 237,var(--bs-bg-opacity))!important;
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
      
        .tab-content {
          background-color: white;
          // border-bottom: 5px solid white ;
          // border-radius: 15px;
        }
        .nav-fill{
          color: white;
        }
        .nav {
          --bs-nav-link-color: white;
          --bs-nav-link-hover-color: #e9ecef;
        }
        .nav-tabs {
          color: #294198;
          background-color: #294198;
          --bs-nav-tabs-link-active-color: #294198;
          --bs-nav-tabs-border-radius: 0px;
          --bs-nav-tabs-border-width: 1px;
          --bs-nav-tabs-border-color: white;
          --bs-nav-tabs-link-active-border-color: white white white;
          
        }
        .container-sm {
          padding-bottom:5vh;
          max-width: 720px;
        }

        .Pagetasks{
          background-color: #F3F6FF;
          height: 100vh;
        }


        `}
        </style>
        <Tabs
          defaultActiveKey=""
          id="mytab"
          className="mb-0"
          fill
        // mountOnEnter='true' can be interesting for future
        >
          <Tab eventKey="1" title={<strong>Work</strong>} onClick={savelabor}>
            <LaborPractice />
          </Tab>
          <Tab eventKey="2" title={<strong>Leisure</strong>} onClick={saveleisure}>
            <LeisurePractice />
          </Tab>
        </Tabs>
        <Outlet />
      </Container>
    </div>
  )
}

export default TasksPractice
