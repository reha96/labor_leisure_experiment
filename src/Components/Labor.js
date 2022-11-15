import React from 'react'
import './Labor.css'
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ButtonM from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

const Labor = () => {

  const data = [
    {
      src: require("./transcriptions/trcp_0.jpeg"),
      key: 0
    },
    {
      src: require("./transcriptions/trcp_1.jpeg"),
      key: 1
    },
    {
      src: require("./transcriptions/trcp_2.jpeg"),
      key: 2
    },
    {
      src: require("./transcriptions/trcp_3.jpeg"),
      key: 3
    },
    {
      src: require("./transcriptions/trcp_4.jpeg"),
      key: 4
    },
    {
      src: require("./transcriptions/trcp_5.jpeg"),
      key: 5
    },
    {
      src: require("./transcriptions/trcp_6.jpeg"),
      key: 6
    },
    {
      src: require("./transcriptions/trcp_7.jpeg"),
      key: 7
    },
    {
      src: require("./transcriptions/trcp_8.jpeg"),
      key: 8
    },
    {
      src: require("./transcriptions/trcp_9.jpeg"),
      key: 9
    },
    {
      src: require("./transcriptions/trcp_10.jpeg"),
      key: 10
    },
    {
      src: require("./transcriptions/trcp_11.jpeg"),
      key: 11
    },
    {
      src: require("./transcriptions/trcp_12.jpeg"),
      key: 12
    },
    {
      src: require("./transcriptions/trcp_13.jpeg"),
      key: 13
    },
    {
      src: require("./transcriptions/trcp_14.jpeg"),
      key: 14
    },
    {
      src: require("./transcriptions/trcp_15.jpeg"),
      key: 15
    },
    {
      src: require("./transcriptions/trcp_16.jpeg"),
      key: 16
    },
    {
      src: require("./transcriptions/trcp_17.jpeg"),
      key: 17
    },
    {
      src: require("./transcriptions/trcp_18.jpeg"),
      key: 18
    },
    {
      src: require("./transcriptions/trcp_19.jpeg"),
      key: 19
    },
    {
      src: require("./transcriptions/trcp_20.jpeg"),
      key: 20
    },
    {
      src: require("./transcriptions/trcp_21.jpeg"),
      key: 21
    },
    {
      src: require("./transcriptions/trcp_22.jpeg"),
      key: 22
    },
    {
      src: require("./transcriptions/trcp_23.jpeg"),
      key: 23
    },
    {
      src: require("./transcriptions/trcp_24.jpeg"),
      key: 24
    },
    {
      src: require("./transcriptions/trcp_25.jpeg"),
      key: 25
    },
    {
      src: require("./transcriptions/trcp_26.jpeg"),
      key: 26
    },
    {
      src: require("./transcriptions/trcp_27.jpeg"),
      key: 27
    },
    {
      src: require("./transcriptions/trcp_28.jpeg"),
      key: 28
    },
    {
      src: require("./transcriptions/trcp_29.jpeg"),
      key: 29
    },
    {
      src: require("./transcriptions/trcp_30.jpeg"),
      key: 30
    },
    {
      src: require("./transcriptions/trcp_31.jpeg"),
      key: 31
    },
    {
      src: require("./transcriptions/trcp_32.jpeg"),
      key: 32
    },
    {
      src: require("./transcriptions/trcp_33.jpeg"),
      key: 33
    },
    {
      src: require("./transcriptions/trcp_34.jpeg"),
      key: 34
    },
    {
      src: require("./transcriptions/trcp_35.jpeg"),
      key: 35
    },
    {
      src: require("./transcriptions/trcp_36.jpeg"),
      key: 36
    },
    {
      src: require("./transcriptions/trcp_37.jpeg"),
      key: 37
    },
    {
      src: require("./transcriptions/trcp_38.jpeg"),
      key: 38
    },
    {
      src: require("./transcriptions/trcp_39.jpeg"),
      key: 39
    },
    {
      src: require("./transcriptions/trcp_40.jpeg"),
      key: 40
    },
    {
      src: require("./transcriptions/trcp_41.jpeg"),
      key: 41
    },
    {
      src: require("./transcriptions/trcp_42.jpeg"),
      key: 42
    },
    {
      src: require("./transcriptions/trcp_43.jpeg"),
      key: 43
    },
    {
      src: require("./transcriptions/trcp_44.jpeg"),
      key: 44
    },
    {
      src: require("./transcriptions/trcp_45.jpeg"),
      key: 45
    },
    {
      src: require("./transcriptions/trcp_46.jpeg"),
      key: 46
    },
    {
      src: require("./transcriptions/trcp_47.jpeg"),
      key: 47
    },
    {
      src: require("./transcriptions/trcp_48.jpeg"),
      key: 48
    },
    {
      src: require("./transcriptions/trcp_49.jpeg"),
      key: 49
    },
    {
      src: require("./transcriptions/trcp_50.jpeg"),
      key: 50
    },
    {
      src: require("./transcriptions/trcp_51.jpeg"),
      key: 51
    },
    {
      src: require("./transcriptions/trcp_52.jpeg"),
      key: 52
    },
    {
      src: require("./transcriptions/trcp_53.jpeg"),
      key: 53
    },
    {
      src: require("./transcriptions/trcp_54.jpeg"),
      key: 54
    },
    {
      src: require("./transcriptions/trcp_55.jpeg"),
      key: 55
    },
    {
      src: require("./transcriptions/trcp_56.jpeg"),
      key: 56
    },
    {
      src: require("./transcriptions/trcp_57.jpeg"),
      key: 57
    },
    {
      src: require("./transcriptions/trcp_58.jpeg"),
      key: 58
    },
    {
      src: require("./transcriptions/trcp_59.jpeg"),
      key: 59
    },
    {
      src: require("./transcriptions/trcp_60.jpeg"),
      key: 60
    },
    {
      src: require("./transcriptions/trcp_61.jpeg"),
      key: 61
    },
    {
      src: require("./transcriptions/trcp_62.jpeg"),
      key: 62
    },
    {
      src: require("./transcriptions/trcp_63.jpeg"),
      key: 63
    },
    {
      src: require("./transcriptions/trcp_64.jpeg"),
      key: 64
    },
    {
      src: require("./transcriptions/trcp_65.jpeg"),
      key: 65
    },
    {
      src: require("./transcriptions/trcp_66.jpeg"),
      key: 66
    },
    {
      src: require("./transcriptions/trcp_67.jpeg"),
      key: 67
    },
    {
      src: require("./transcriptions/trcp_68.jpeg"),
      key: 68
    },
    {
      src: require("./transcriptions/trcp_69.jpeg"),
      key: 69
    },
    {
      src: require("./transcriptions/trcp_70.jpeg"),
      key: 70
    },
    {
      src: require("./transcriptions/trcp_71.jpeg"),
      key: 71
    },
    {
      src: require("./transcriptions/trcp_72.jpeg"),
      key: 72
    },
    {
      src: require("./transcriptions/trcp_73.jpeg"),
      key: 73
    },
    {
      src: require("./transcriptions/trcp_74.jpeg"),
      key: 74
    },
    {
      src: require("./transcriptions/trcp_75.jpeg"),
      key: 75
    },
    {
      src: require("./transcriptions/trcp_76.jpeg"),
      key: 76
    },
    {
      src: require("./transcriptions/trcp_77.jpeg"),
      key: 77
    },
    {
      src: require("./transcriptions/trcp_78.jpeg"),
      key: 78
    },
    {
      src: require("./transcriptions/trcp_79.jpeg"),
      key: 79
    },
    {
      src: require("./transcriptions/trcp_80.jpeg"),
      key: 80
    },
    {
      src: require("./transcriptions/trcp_81.jpeg"),
      key: 81
    },
    {
      src: require("./transcriptions/trcp_82.jpeg"),
      key: 82
    },
    {
      src: require("./transcriptions/trcp_83.jpeg"),
      key: 83
    },
    {
      src: require("./transcriptions/trcp_84.jpeg"),
      key: 84
    },
    {
      src: require("./transcriptions/trcp_85.jpeg"),
      key: 85
    },
    {
      src: require("./transcriptions/trcp_86.jpeg"),
      key: 86
    },
    {
      src: require("./transcriptions/trcp_87.jpeg"),
      key: 87
    },
    {
      src: require("./transcriptions/trcp_88.jpeg"),
      key: 88
    },
    {
      src: require("./transcriptions/trcp_89.jpeg"),
      key: 89
    },
    {
      src: require("./transcriptions/trcp_90.jpeg"),
      key: 90
    },
    {
      src: require("./transcriptions/trcp_91.jpeg"),
      key: 91
    },
    {
      src: require("./transcriptions/trcp_92.jpeg"),
      key: 92
    },
    {
      src: require("./transcriptions/trcp_93.jpeg"),
      key: 93
    },
    {
      src: require("./transcriptions/trcp_94.jpeg"),
      key: 94
    },
    {
      src: require("./transcriptions/trcp_95.jpeg"),
      key: 95
    },
    {
      src: require("./transcriptions/trcp_96.jpeg"),
      key: 96
    },
    {
      src: require("./transcriptions/trcp_97.jpeg"),
      key: 97
    },
    {
      src: require("./transcriptions/trcp_98.jpeg"),
      key: 98
    },
    {
      src: require("./transcriptions/trcp_99.jpeg"),
      key: 99
    }
  ];

  let location = useLocation();

  const [input, setInput] = useState([]);
  const [typedValue, setTypedValue] = useState("");
  // console.log(typedValue)

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
      <p style={{ display: 'flex', justifyContent: 'center' }}>Type the sentence:</p>
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
      <ButtonM variant='contained' color='secondary' onClick={handleSubmit}><strong>Submit</strong></ButtonM>
      </div>
     
      {/* <div>&nbsp;</div> */}
    </Container>
  );
}

export default Labor