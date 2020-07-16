import React from 'react';

function About() {
    return (
      <div className="d-flex flex-row justify-content-center vh-40 about mb10v" id="about">
        <div className="titleContainer">
          <h2 className="title">A Piece of My Mind</h2>
        </div>
        <div className="pt-4 text-center aboutText">
        <p>I wanted to create a personal space that I share my ideas and the progress that I made in my career life.</p>
        <p>In here, you can find the path I choose to follow and the things I do with a <i>passion</i></p>
        </div>
      </div>
    );
  }
  
  export default About;