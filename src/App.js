import React from 'react';
import Yoga2 from '../src/Assets/Yoga2.jpg';
import Background from '../src/Assets/Background.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import './App.css';

const goTo = (text) =>{
  window.location.href = text;
}

const App = ()=> {
  return (
    <>
    
    <div style={container}>
      <div>
      <div style={textStyle}>
        <div style={topLeftContainer} onClick={() => goTo('https://www.instagram.com/yoga.satya.mures/')}>
          <FontAwesomeIcon icon={faInstagram} size={'2x'} />
          <span style={zIndex}> Yoga.Satya.Mures</span>
        </div>
      <div style={topLeftContainer} onClick={() => goTo('https://www.facebook.com/yoga.satya.mures/')}>
          <FontAwesomeIcon icon={faFacebook} size={'2x'} />
          <span style={zIndex}> Yoga.Satya.Mures</span>
      </div>
        <div style={topLeftContainer}>
          <FontAwesomeIcon icon={faMobile} size={'2x'}/>
          <span style={zIndex}> 0720092369</span>
        </div>
      </div>
      </div>
      <img style={sectionStyle} src={Yoga2} />
  </div>
  </>
  );
}

export default App;

const container = {
  width: '100%',
  display:'flex',
  height: '100%',
  position: 'absolute',
  margin: 'auto',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundImage: `url(${Background})`,
};

const sectionStyle = {
  maxWidth: '80%',
  maxHeight: '80%',
  position: 'absolute',
  margin: 'auto',
  top: '90px',
  bottom: '0',
  left: '0',
  right: '0',
  borderRadius: '40%',
};

const topLeftContainer = {
  cursor: 'pointer',
  zIndex: '1',
  padding: '0.5em',
  maxWidth: '280px'
}

const zIndex = {
  padding: '2px',
};

const textStyle = {
  fontWeight: 'bold',
  fontSize: 18,
  color: 'white',
  whiteSpace: 'no-wrap',
  display: 'flex',
  flexDirection: 'column',
  padding: '5px',
};