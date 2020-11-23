import React from 'react';
import linkedin from '../linkedin3.png';
import twitch from '../twitch.png';
import twitter from '../twitter.png';
import instagram from '../instagram2.png';

function Footer() {
    return (
      <div className="d-flex flex-row justify-content-center vh-40 mb10v">
        <div className="titleContainer">
          <h2 className="title">Lets Talk</h2>
        </div>
        <div className="d-flex flex-column justify-content-between pt-4 text-center aboutText">
          <div>
            <p>You can write to me about anything actually.</p>
            <p>If you prefer e-mail, then feel free to use hello@berkintosun.com</p>
          </div>
          <div className='d-flex flex-row justify-content-around'>
            <div><a href="https://www.linkedin.com/in/berkintosun/" target="_blank" rel="noreferrer"><img className='socialImg' src={linkedin}/></a></div>
            <div><a href="https://www.instagram.com/berkin.tosun/" target="_blank" rel="noreferrer"><img className='socialImg' src={instagram}/></a></div>
            <div><a href="https://www.twitch.tv/ShadowSync" target="_blank" rel="noreferrer"><img className='socialImg' src={twitch}/></a></div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;