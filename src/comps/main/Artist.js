import React from 'react';
import record from '../../util/img/16.jpg'
import marco from '../../util/img/marco.jpg'
import member1 from '../../util/img/member1.jpg'
import member2 from '../../util/img/member2.jpg'

class Artist extends React.Component {
constructor(props){
  super(props)
  this.state={}
}


  render(){
  return (
   <div className="theBand">
   <div className="theBand2Holder">

      <div class=" artist">
  <div class="artist__thumbnail">
    <img class="artist__blur" src={record} alt='Marco Mallea'/>
    <img class="artist__image" src={record} alt='Marco Mallea'/>
    <div class="artist__ring"></div>
    <div class="artist__ring artist__ring--outer"></div>
  </div>
  <div class="artist__label">
  </div>
</div>

<div class="artist">
  <div class="artist__thumbnail">
    <img class="artist__blur" src={marco}  alt='Mystic Warrios Member'/>
    <img class="artist__image" src={marco}  alt='Mystic Warrios Member'/>
    <div class="artist__ring"></div>
    <div class="artist__ring artist__ring--outer"></div>
  </div>
  <div class="artist__label">
    <p>General Manager & Booking Agent</p>
    <p class="capital">Marco Mallea</p>
  </div>
</div>
</div>
   <div className="theBand2Holder">

<div class="artist">
  <div class="artist__thumbnail">
    <img class="artist__blur" src={member1}  alt='Mystic Warrios Member'/>
    <img class="artist__image" src={member1}  alt='Mystic Warrios Member'/>
    <div class="artist__ring"></div>
    <div class="artist__ring artist__ring--outer"></div>
  </div>
  <div class="artist__label">
    <p>Position</p>
    <p class="capital">Member Name</p>
  </div>
</div>

<div class="artist">
  <div class="artist__thumbnail">
    <img class="artist__blur" src={member2}  alt='Mystic Warrios Member'/>
    <img class="artist__image" src={member2}  alt='Mystic Warrios Member'/>
    <div class="artist__ring"></div>
    <div class="artist__ring artist__ring--outer"></div>
  </div>
  <div class="artist__label">
    <p>Position</p>
    <p class="capital">Member Name</p>
  </div>
</div>
</div>
</div>
    );
  }
}

export default Artist;
