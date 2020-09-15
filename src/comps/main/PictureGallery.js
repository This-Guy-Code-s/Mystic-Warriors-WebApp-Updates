import React from 'react';
import '../../util/styles/sass/picGallery.scss';
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
import Subscribe from '../modals/Subscribe'


class Center extends React.Component {
constructor(props){
  super(props)
  this.state={

  }
}


  render(){
  return (
   <div className='main-container'>
  <div className='grid-container'>
    <div className='card card--2x'>
      <div className='card__content big-script padding-large'>
        <p>Traveling to a town near you</p>
      </div>
    </div>
    <div className='card'>
      <div className='card__image'>
        <img src={img2}  className='img img-thumbnail img-gallery'  alt='Mystic Warrios'/>
      </div>
    </div>
    <div className='card'>
      <div className='card__image'>
        <img src={img5}  className='img img-thumbnail img-gallery'  alt='Mystic Warrios'/>
      </div>
    </div>
    <div className='card'>
      <div className='card__content'>
        <p><em>Some words from marco can be here.</em></p>
        <p>— Marco Mallea</p>
      </div>
    </div>
    <div className='card card--horizontal'>
      <div className='card__image'>
        <img src={img6}  className='img img-thumbnail img-gallery'  alt='Mystic Warrios'/>
      </div>
    </div>
    <div className='card card--featured'>
      <div className='card__side-by-side--m'>
        <div className='card__image'>
          <img src={Booking}  className='img img-thumbnail img-gallery'  alt='Mystic Warrios'/>
        </div>
        <div className='card__content padding-large--l'>
            <div id="wrapper">
    <h6 className="glitch" data-text="STAY TUNED">Stay Tuned</h6>
    <span className="sub"></span>
  </div>
          <p>Subscribe and get an email news letter with the latest info on the Mystic Warriors.</p>
          <Subscribe buttonLabel='Subscribe Now'/>
        </div>
      </div>
    </div>
    <div className='card card--vertical'>
      <div className='card__image'>
        <img src={img14}  className='img img-thumbnail img-gallery'  alt='Mystic Warrios'/>
      </div>
    </div>
    <div className='card'>
      <div className='card__image'>
        <img src={img12}  className='img img-thumbnail img-gallery'alt='Mystic Warrios'/>
      </div>
    </div>
   {/*component below was here*/}
    <div className='card card--vertical'>
      <div className='card__image'>
        <img src={img15}  className='img img-thumbnail img-gallery'  alt='Mystic Warrios'/>
      </div>
    </div>
    <div className='card'>
      <div className='card__image'>
        <img src={img21}  className='img img-thumbnail img-gallery'  alt='Mystic Warrios'/>
      </div>
    </div>
    <div className='card'>
      <div className='card__content'>
        <p><em>some words from another band member can be here</em></p>
        <p>— band members name here</p>
      </div>
    </div>
    <div className='card card--2x'>
      <div className='card__image'>
        <img src={img22}  className='img img-thumbnail img-gallery'  alt='Mystic Warrios'/>
      </div>
    </div>
    <div className='card card--horizontal card--frameless'>
      <div className='card__content big-script'>
        <p>Beyond Reality</p>
      </div>
    </div>
    <div className='card'>
      <div className='card__image'>
        <img src={img9}  className='img img-thumbnail img-gallery'  alt='Mystic Warrios'/>
      </div>
    </div>
    <div className='card card--horizontal'>
      <div className='card__image'>
        <img src={img8}  className='img img-thumbnail img-gallery'  alt='Mystic Warrios'/>
      </div>
    </div>
    <div className='card'>
      <div className='card__image'>
        <img src={img18}  className='img img-thumbnail img-gallery'  alt='Mystic Warrios'/>
      </div>
    </div>
    <div className='card'>
      <div className='card__content'>
        <p><em>some words from another band member can be here also.</em></p>
        <p>— members name</p>
      </div>
    </div>
    <div className='card'>
      <div className='card__image'>
        <img src={img}  className='img img-thumbnail img-gallery'  alt='Mystic Warrios' style={{filter:'grayscale(100%)'}}/>
      </div>
    </div>
  </div>
</div>

    );
  }
}

export default Center;




 // <div className='card card--horizontal'>
 //      <div className='card__side-by-side'>
 //        <div className='card__image'>
 //          <img src={img13}  className='img img-thumbnail img-gallery'  alt='Mystic Warrios'/>
 //        </div>
 //        <div className='card__content'>
 //          <h3>Lorem ipsum</h3>
 //          <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra</p>
 //        </div>
 //      </div>
 //    </div>