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

      <div className=" artist">
  <div className="artist__thumbnail">
    <img className="artist__blur" src={record} alt='Marco Mallea'/>
    <img className="artist__image" src={record} alt='Marco Mallea'/>
    <div className="artist__ring"></div>
    <div className="artist__ring artist__ring--outer"></div>
  </div>
  <div className="artist__label">
  </div>
</div>

<div className="artist">
  <div className="artist__thumbnail">
    <img className="artist__blur" src={marco}  alt='Mystic Warrios Member'/>
    <img className="artist__image" src={marco}  alt='Mystic Warrios Member'/>
    <div className="artist__ring"></div>
    <div className="artist__ring artist__ring--outer"></div>
  </div>
  <div className="artist__label">
    <p>General Manager & Booking Agent</p>
    <p className="capital">Marco Mallea</p>
  </div>
</div>
</div>
   <div className="theBand2Holder">

<div className="artist">
  <div className="artist__thumbnail">
    <img className="artist__blur" src={member1}  alt='Mystic Warrios Member'/>
    <img className="artist__image" src={member1}  alt='Mystic Warrios Member'/>
    <div className="artist__ring"></div>
    <div className="artist__ring artist__ring--outer"></div>
  </div>
  <div className="artist__label">
    <p>Position</p>
    <p className="capital">Member Name</p>
  </div>
</div>

<div className="artist">
  <div className="artist__thumbnail">
    <img className="artist__blur" src={member2}  alt='Mystic Warrios Member'/>
    <img className="artist__image" src={member2}  alt='Mystic Warrios Member'/>
    <div className="artist__ring"></div>
    <div className="artist__ring artist__ring--outer"></div>
  </div>
  <div className="artist__label">
    <p>Position</p>
    <p className="capital">Member Name</p>
  </div>
</div>
</div>
</div>
    );
  }
}

export default Artist;
