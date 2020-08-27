import React from 'react';
import '../../util/styles/sass/center.scss';
import img2 from '../../util/img/2.jpg'
import img5 from '../../util/img/5.jpg'
import img6 from '../../util/img/6.jpg'
import img12 from '../../util/img/12.jpg'
import Booking from '../../util/img/Booking.jpg'
// import img13 from '../../util/img/13.jpg'
import img14 from '../../util/img/14.jpg'
import img15 from '../../util/img/15.jpg'
import img21 from '../../util/img/21.jpg'
import img22 from '../../util/img/22.jpg'
import img9 from '../../util/img/9.jpg'
import img8 from '../../util/img/8.jpg'
import img18 from '../../util/img/18.jpg'
import img from '../../util/img/19.jpg'

class Center extends React.Component {
constructor(props){
  super(props)
  this.state={}
}


  render(){
  return (
   <div class='main-container'>
  <div class='grid-container'>
    <div class='card card--2x'>
      <div class='card__content big-script padding-large'>
        <p>Traveling to a town near you</p>
      </div>
    </div>
    <div class='card'>
      <div class='card__image'>
        <img src={img2}   alt='Mystic Warrios'/>
      </div>
    </div>
    <div class='card'>
      <div class='card__image'>
        <img src={img5}   alt='Mystic Warrios'/>
      </div>
    </div>
    <div class='card'>
      <div class='card__content'>
        <p><em>Some words from marco can be here.</em></p>
        <p>— Marco Mallea</p>
      </div>
    </div>
    <div class='card card--horizontal'>
      <div class='card__image'>
        <img src={img6}   alt='Mystic Warrios'/>
      </div>
    </div>
    <div class='card card--featured'>
      <div class='card__side-by-side--m'>
        <div class='card__image'>
          <img src={Booking}   alt='Mystic Warrios'/>
        </div>
        <div class='card__content padding-large--l'>
          <h2>Booking The Band.</h2>
          <p>Some text that gives brief detials and explaination of different ways
          to book the band.</p>
          <div class='card__button'>Book Now</div>
        </div>
      </div>
    </div>
    <div class='card card--vertical'>
      <div class='card__image'>
        <img src={img14}   alt='Mystic Warrios'/>
      </div>
    </div>
    <div class='card'>
      <div class='card__image'>
        <img src={img12} alt='Mystic Warrios'/>
      </div>
    </div>
   {/*component below was here*/}
    <div class='card card--vertical'>
      <div class='card__image'>
        <img src={img15}   alt='Mystic Warrios'/>
      </div>
    </div>
    <div class='card'>
      <div class='card__image'>
        <img src={img21}   alt='Mystic Warrios'/>
      </div>
    </div>
    <div class='card'>
      <div class='card__content'>
        <p><em>some words from another band member can be here</em></p>
        <p>— band members name here</p>
      </div>
    </div>
    <div class='card card--2x'>
      <div class='card__image'>
        <img src={img22}   alt='Mystic Warrios'/>
      </div>
    </div>
    <div class='card card--horizontal card--frameless'>
      <div class='card__content big-script'>
        <p>Beyond Reality</p>
      </div>
    </div>
    <div class='card'>
      <div class='card__image'>
        <img src={img9}   alt='Mystic Warrios'/>
      </div>
    </div>
    <div class='card card--horizontal'>
      <div class='card__image'>
        <img src={img8}   alt='Mystic Warrios'/>
      </div>
    </div>
    <div class='card'>
      <div class='card__image'>
        <img src={img18}   alt='Mystic Warrios'/>
      </div>
    </div>
    <div class='card'>
      <div class='card__content'>
        <p><em>some words from another band member can be here also.</em></p>
        <p>— members name</p>
      </div>
    </div>
    <div class='card'>
      <div class='card__image'>
        <img src={img}   alt='Mystic Warrios'/>
      </div>
    </div>
  </div>
</div>

    );
  }
}

export default Center;




 // <div class='card card--horizontal'>
 //      <div class='card__side-by-side'>
 //        <div class='card__image'>
 //          <img src={img13}   alt='Mystic Warrios'/>
 //        </div>
 //        <div class='card__content'>
 //          <h3>Lorem ipsum</h3>
 //          <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra</p>
 //        </div>
 //      </div>
 //    </div>