import React from 'react';
import '../../../util/styles/sass/picGallery.scss';

import Subscribe from '../../modals/Subscribe'
import {withRouter} from 'react-router-dom'

import {connect} from 'react-redux'
import {getPix} from '../../../redux/actions'

class PicGallery extends React.Component {
constructor(props){
  super(props)
  this.state={

  }
}



componentDidMount(){
 return this.props.getPix()
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
        <img src={this.props.img[0].img}  className='img img-thumbnail img-gallery'  alt='Mystic Warrios'/>
      </div>
    </div>
    <div className='card'>
      <div className='card__image'>
        <img src={this.props.img[1].img}  className='img img-thumbnail img-gallery'  alt='Mystic Warrios'/>
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
        <img src={this.props.img[2].img}  className='img img-thumbnail img-gallery'  alt='Mystic Warrios'/>
      </div>
    </div>
    <div className='card card--featured'>
      <div className='card__side-by-side--m'>
        <div className='card__image'>
          <img src={this.props.img[3].img}  className='img img-thumbnail img-gallery'  alt='Mystic Warrios'/>
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
        <img src={this.props.img[4].img}  className='img img-thumbnail img-gallery'  alt='Mystic Warrios'/>
      </div>
    </div>
    <div className='card'>
      <div className='card__image'>
        <img src={this.props.img[5].img}  className='img img-thumbnail img-gallery'alt='Mystic Warrios'/>
      </div>
    </div>
   {/*component below was here*/}
    <div className='card card--vertical'>
      <div className='card__image'>
        <img src={this.props.img[6].img}  className='img img-thumbnail img-gallery'  alt='Mystic Warrios'/>
      </div>
    </div>
    <div className='card'>
      <div className='card__image'>
        <img src={this.props.img[7].img}  className='img img-thumbnail img-gallery'  alt='Mystic Warrios'/>
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
        <img src={this.props.img[8].img}  className='img img-thumbnail img-gallery'  alt='Mystic Warrios'/>
      </div>
    </div>
    <div className='card card--horizontal card--frameless'>
      <div className='card__content big-script'>
        <p>Beyond Reality</p>
      </div>
    </div>
    <div className='card'>
      <div className='card__image'>
        <img src={this.props.img[9].img}  className='img img-thumbnail img-gallery'  alt='Mystic Warrios'/>
      </div>
    </div>
    <div className='card card--horizontal'>
      <div className='card__image'>
        <img src={this.props.img[10].img}  className='img img-thumbnail img-gallery'  alt='Mystic Warrios'/>
      </div>
    </div>
    <div className='card'>
      <div className='card__image'>
        <img src={this.props.img[11].img}  className='img img-thumbnail img-gallery'  alt='Mystic Warrios'/>
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
        <img src={this.props.img[12].img}  className='img img-thumbnail img-gallery'  alt='Mystic Warrios' style={{filter:'grayscale(100%)'}}/>
      </div>
    </div>
  </div>
</div>

    );
  }
}


const mapStateToProps = state =>{
  return {
    img:state.images
  }
}

export default withRouter(connect(
  mapStateToProps,
  {getPix}
  )(PicGallery));




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