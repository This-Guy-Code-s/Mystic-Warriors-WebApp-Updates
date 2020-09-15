import React from 'react';
import marco from '../../util/img/marco.jpg'
import member1 from '../../util/img/member1.jpg'

class Artist extends React.Component {
constructor(props){
  super(props)
  this.state={}
}


  render(){
  return (
   <div className="theBand">
   <div className="theBand2Holder">

    

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


<div className="artist">
  <div className="artist__thumbnail">
    <img className="artist__blur" src={member1}  alt='Mystic Warrios Member'/>
    <img className="artist__image" src={member1}  alt='Mystic Warrios Member'/>
    <div className="artist__ring"></div>
    <div className="artist__ring artist__ring--outer"></div>
  </div>
  <div className="artist__label">
    <p>Lead Musician</p>
    <p className="capital">Andres Mallea </p>
  </div>
</div>


</div>
</div>
    );
  }
}

export default Artist;
