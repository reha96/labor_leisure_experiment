import React from 'react'
import './Labor.css'
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonM from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

const LaborPractice = () => {

  const data = [
    {
      src: require("./transcriptions/trcp_99.jpeg"),
      key: 0
    },
    {
      src: require("./transcriptions/trcp_98.jpeg"),
      key: 1
    },
    {
      src: require("./transcriptions/trcp_97.jpeg"),
      key: 2
    },
    {
      src: require("./transcriptions/trcp_96.jpeg"),
      key: 3
    },
    {
      src: require("./transcriptions/trcp_95.jpeg"),
      key: 4
    },
    {
      src: require("./transcriptions/trcp_94.jpeg"),
      key: 5
    },
    {
      src: require("./transcriptions/trcp_93.jpeg"),
      key: 6
    },
    {
      src: require("./transcriptions/trcp_92.jpeg"),
      key: 7
    },
    {
      src: require("./transcriptions/trcp_91.jpeg"),
      key: 8
    },
    {
      src: require("./transcriptions/trcp_90.jpeg"),
      key: 9
    },
    {
      src: require("./transcriptions/trcp_89.jpeg"),
      key: 10
    },
    {
      src: require("./transcriptions/trcp_88.jpeg"),
      key: 11
    },
    {
      src: require("./transcriptions/trcp_87.jpeg"),
      key: 12
    },
    {
      src: require("./transcriptions/trcp_86.jpeg"),
      key: 13
    },
    {
      src: require("./transcriptions/trcp_85.jpeg"),
      key: 14
    },
    {
      src: require("./transcriptions/trcp_84.jpeg"),
      key: 15
    },
    {
      src: require("./transcriptions/trcp_83.jpeg"),
      key: 16
    },
    {
      src: require("./transcriptions/trcp_82.jpeg"),
      key: 17
    },
    {
      src: require("./transcriptions/trcp_81.jpeg"),
      key: 18
    },
    {
      src: require("./transcriptions/trcp_80.jpeg"),
      key: 19
    }
  ];

  let location = useLocation();

  const [input, setInput] = useState([]);
  const [typedValue, setTypedValue] = useState("");

  const [counter, setCounter] = useState(parseInt(window.localStorage.getItem('localcount')));

  const handleSubmit = (event) => {
    setInput([...input, typedValue]);
    const items = JSON.parse(localStorage.getItem("transc"));
    const newItems = JSON.stringify([...items, typedValue])
    localStorage.setItem("transc", newItems);
    console.log(input);

    setTypedValue("");
    if (isNaN(counter)) {
      var Image = 0;
      console.log('counter is NaN')
    } else {
      Image = parseInt(counter) + 1;
      if (Image >= data.length) {
        Image = 0;
      }
    }
    setCounter(Image);
    console.log(Image + "  Image value after submit");
    window.localStorage.setItem('localcount', Image);
    console.log(window.localStorage.getItem('localcount') + "  localcount value after submit");
    console.log(window.localStorage.getItem('transc') + "  transc value after submit")
  };

  return (
    <Container fluid='sm'>
      {data.map(({ src, key }) => {
        return (
          <div>
            {counter === key ? (
              <Container>
                <img src={src} alt={key} className='photo'/>
              </Container>
            ) : null}
          </div>
        );
      })}
      <p style={{ display: 'flex', justifyContent: 'center' }}>Please transcribe the text above:</p>
      <textarea className='textarea'
        type="text"
        value={typedValue}
        onChange={(event) => setTypedValue(event.target.value)}
        placeholder=""
      />
      <div className='container'>
        <p style={{ display: 'flex', justifyContent: 'center'}}> <CheckCircleOutlineRoundedIcon/>  <strong>&nbsp;{window.localStorage.getItem('localcount')}&nbsp;</strong> transcriptions submitted </p> 
      </div>
      <div className='container'> 
      <ButtonM variant='contained' color='secondary' onClick={handleSubmit}><strong>Submit Transcription</strong></ButtonM>
      </div>
     
      {/* <div>&nbsp;</div> */}
    </Container>
  );
}

export default LaborPractice