import React from 'react';
import record from '../../util/img/16.jpg'


class Artist extends React.Component {
constructor(props){
  super(props)
  this.state={}
}


  render(){
  return (
   <div className="theBand">

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
    <img class="artist__blur" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/266745/fp.jpg"  alt='Mystic Warrios Member'/>
    <img class="artist__image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/266745/fp.jpg"  alt='Mystic Warrios Member'/>
    <div class="artist__ring"></div>
    <div class="artist__ring artist__ring--outer"></div>
  </div>
  <div class="artist__label">
    <p>General Manager & Booking Agent</p>
    <p class="capital">Marco Mallea</p>
  </div>
</div>

<div class="artist">
  <div class="artist__thumbnail">
    <img class="artist__blur" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/266745/md.jpg"  alt='Mystic Warrios Member'/>
    <img class="artist__image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/266745/md.jpg"  alt='Mystic Warrios Member'/>
    <div class="artist__ring"></div>
    <div class="artist__ring artist__ring--outer"></div>
  </div>
  <div class="artist__label">
    <p>Mos Def</p>
    <p class="capital">Artist Radio</p>
  </div>
</div>

<div class="artist">
  <div class="artist__thumbnail">
    <img class="artist__blur" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/266745/bbng.jpg"  alt='Mystic Warrios Member'/>
    <img class="artist__image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/266745/bbng.jpg"  alt='Mystic Warrios Member'/>
    <div class="artist__ring"></div>
    <div class="artist__ring artist__ring--outer"></div>
  </div>
  <div class="artist__label">
    <p>BadBadNotGood</p>
    <p class="capital">Artist Radio</p>
  </div>
</div>
</div>
    );
  }
}

export default Artist;
