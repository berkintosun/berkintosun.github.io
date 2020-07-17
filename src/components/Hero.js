import React, { useState, useEffect } from "react";
import HeroPhoto from '../profile2.jpg';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

function Hero() {
    const [loop, setLoop] = useState(0);
    const [start,setStart] =useState(0);
    const commandments = [
      'A Software Engineer',
      'A Java Developer',
      'A Full-Stack Developer',
      'A Backend Developer',
      'A Frontend Developer',
      'A Javascript Lover',
      'A ML Enthusiast',
      'A Streamer',
      'A Gamer',
    ];

    useEffect(() => {
      console.log(loop);
      setLoop(1);
    }, [loop]);
    return (
      <div className="d-flex justify-content-center vh-92" id="hero" >
          <div className='d-flex flex-column justify-content-center'>
            <div className='profilePhoto'>
              <img src={HeroPhoto} alt="Avatar"/>
            </div>
          </div>
          <div>
            
          </div>
          <div className='d-flex flex-column justify-content-center heroArea'>
            <Typist className="typer" avgTypingDelay={100} startDelay={2000} onTypingDone={() => setStart(1)}>
              <span>I'm</span>
              <br/>
            </Typist>
            {loop && start ? (
              <Typist className="typer" id="titleText" avgTypingDelay={50} onTypingDone={() => setLoop(0)}>
                {commandments.map(word => ([
                <span>{word}</span>,
                <Typist.Backspace count={word.length} delay={1000} />,
              ]))}
              </Typist>
            ) : (
              ""
            )}
          </div>
      </div>
    );
  }
  
  export default Hero;