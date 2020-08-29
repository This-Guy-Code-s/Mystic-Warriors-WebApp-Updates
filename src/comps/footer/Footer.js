
  import React from 'react';
import '../../util/styles/sass/footer.scss';

class Footer extends React.Component {
constructor(props){
  super(props)
  this.state={}
}


  render(){
  return (
    <div class="toaster">
    <div class="wrapper">
      <header class="cta_header">
        <h1>Want more info? Check out our guides!</h1>
        <svg class="expand_icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
          <path d="M0 0h24v24H0z" fill="none"></path>
        </svg>
      </header>
      <div class="airplane_icon_wrapper airplane_left">
        <svg class="airplane_icon" viewBox="0 0 24 24">
          <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z"></path>
        </svg>
      </div>
      <div class="airplane_icon_wrapper airplane_right">
        <svg class="airplane_icon" viewBox="0 0 24 24">
          <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z"></path>
        </svg>
      </div>
      <div class="promo">
        <p>The mountains are beckoning, and your dream vacation awaits.</p>
        <p>Check out our trekking guides to get your trip planning satarted!</p>
        <button class="cta">Start Browsing</button>
      </div>
    </div>
  </div>

    );
  }
}

export default Footer;
