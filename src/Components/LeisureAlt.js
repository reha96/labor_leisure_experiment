import React from 'react';
import VideoOff from './VideoOff';
import './Leisure.css';
import ImportVid from './vids/ImportVid.js';

const LeisureAlt = () => {
  return (
    <div className="Leisure">
      <div className="video__app">
        <VideoOff
          src={
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
          }
        />
        <VideoOff
          src={
            'https://media.githubusercontent.com/media/svdpmukherjee/test_reha/master/src/Components/vids/vid1.mp4'
          }
        />
        <VideoOff
          src={
            'https://media.githubusercontent.com/media/svdpmukherjee/test_reha/master/src/Components/vids/vid3.mp4'
          }
        />
        {/* <VideoOff src={ImportVid[50]} />
      <VideoOff src={ImportVid[30]} />
      <VideoOff src={ImportVid[12]} />
      <VideoOff src={ImportVid[7]} />
      <VideoOff src={ImportVid[33]} />
      <VideoOff src={ImportVid[32]} />
      <VideoOff src={ImportVid[60]} />
      <VideoOff src={ImportVid[17]} />
      <VideoOff src={ImportVid[54]} />
      <VideoOff src={ImportVid[4]} />
      <VideoOff src={ImportVid[52]} />
      <VideoOff src={ImportVid[25]} />
      <VideoOff src={ImportVid[24]} />
      <VideoOff src={ImportVid[53]} />
      <VideoOff src={ImportVid[27]} />
      <VideoOff src={ImportVid[46]} />
      <VideoOff src={ImportVid[55]} />
      <VideoOff src={ImportVid[26]} />
      <VideoOff src={ImportVid[28]} />
      <VideoOff src={ImportVid[36]} />
      <VideoOff src={ImportVid[42]} />
      <VideoOff src={ImportVid[0]} />
      <VideoOff src={ImportVid[29]} />
      <VideoOff src={ImportVid[18]} />
      <VideoOff src={ImportVid[13]} />
      <VideoOff src={ImportVid[56]} />
      <VideoOff src={ImportVid[40]} />
      <VideoOff src={ImportVid[23]} />
      <VideoOff src={ImportVid[3]} />
      <VideoOff src={ImportVid[2]} />
      <VideoOff src={ImportVid[48]} />
      <VideoOff src={ImportVid[1]} />
      <VideoOff src={ImportVid[38]} />
      <VideoOff src={ImportVid[44]} />
      <VideoOff src={ImportVid[59]} />
      <VideoOff src={ImportVid[31]} />
      <VideoOff src={ImportVid[37]} />
      <VideoOff src={ImportVid[9]} />
      <VideoOff src={ImportVid[20]} />
      <VideoOff src={ImportVid[10]} />
      <VideoOff src={ImportVid[14]} />
      <VideoOff src={ImportVid[49]} />
      <VideoOff src={ImportVid[39]} />
      <VideoOff src={ImportVid[47]} />
      <VideoOff src={ImportVid[19]} />
      <VideoOff src={ImportVid[22]} />
      <VideoOff src={ImportVid[64]} />
      <VideoOff src={ImportVid[41]} />
      <VideoOff src={ImportVid[21]} />
      <VideoOff src={ImportVid[57]} />
      <VideoOff src={ImportVid[15]} />
      <VideoOff src={ImportVid[43]} />
      <VideoOff src={ImportVid[45]} />
      <VideoOff src={ImportVid[61]} />
      <VideoOff src={ImportVid[58]} />
      <VideoOff src={ImportVid[65]} />
      <VideoOff src={ImportVid[35]} />
      <VideoOff src={ImportVid[16]} />
      <VideoOff src={ImportVid[6]} />
      <VideoOff src={ImportVid[63]} />
      <VideoOff src={ImportVid[34]} />
      <VideoOff src={ImportVid[5]} />
      <VideoOff src={ImportVid[51]} />
      <VideoOff src={ImportVid[8]} />
      <VideoOff src={ImportVid[62]} />
      <VideoOff src={ImportVid[11]} /> */}
      </div>
    </div>
  );
};

export default LeisureAlt;
