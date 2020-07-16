import React from 'react';

function Treasures() {
    return (
      <div className="d-flex flex-row justify-content-center vh-40 mb10v" id="ideas">
        <div className="titleContainer">
          <h2 className="title">Personal Treasures</h2>
        </div>
        <div className="pt-4 d-flex flex-column text-center">
          <div>
            <p>These are the things that has a special place in my heart and the way of my thinking.</p>
            <p><i>Everything that we see is a shadow cast by that which we do not see.</i> ~Martin Luther King, Jr</p>
          </div>
          <div className='d-flex justify-content-around treasureArea'>
            <div><img className='treasureImg' src="https://s3.gaming-cdn.com/images/products/857/orig/dark-souls-3-cover.jpg"></img></div>
            <div><img className="treasureImg" src="https://vignette.wikia.nocookie.net/sonic/images/b/b5/TSR_Shadow.png"></img></div>
            <div><img className= "treasureImg" src="https://i1.wp.com/xboxera.com/wp-content/uploads/2019/11/img_4501.jpg"></img></div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Treasures;