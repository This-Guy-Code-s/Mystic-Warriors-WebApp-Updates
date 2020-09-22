import React from 'react';
// import VidLink from './VideoLink'
import '../../../util/styles/css/videoGallery.css'
import {connect} from 'react-redux'
import {getVideos} from '../../../redux/actions'
import {Spinner} from 'reactstrap'
import Links from '../links/Links'
import FocusVideo from '../../modals/FocusVideo'

class VideoGallery extends React.Component {
constructor(props){
  super(props)
  this.state={}
}


componentDidMount(){
    return this.props.getVideos()
}

componentDidUpdate(){
    console.log(this.props.videos)
}

  render(){
  return (
    <div className="container vg-container">
<div className="container">
<h1 className="home-title">

  <span className='vid-title-long'> 
    <h3 className="glitch" data-text="Our Hottest &#11088; &#11088; &#11088; &#11088;"><span role="img" aria-label='emoji starz'>Our Hottest</span></h3>
    <span className="sub"></span>
  </span>

  <span className='vid-title-short'> 
      <h6 className="glitch" data-text="&#11088; &#11088; &#11088; &#11088;"><span role="img" aria-label='emoji starz'>&#11088; &#11088; &#11088; &#11088;</span></h6>
      <span className="sub"></span>
    </span>

<span> 
  <h3 className="glitch" data-text="Videos">Videos</h3>
  <span className="sub"></span>
</span>
</h1>
    <div className="row">
        
       {

        this.props.videos.length>0?
                this.props.videos.map((vid,i)=>{return( <div key={i} className="col-md-4 col-sm-6 vid-box-model">
                                                  <div className="box">
                                                      <svg className="curve1" x="0px" y="0px" viewBox="0 0 400 200">
                                                          <path d="M398.938,143.806c-24.004,26.063-155.373,104.33-224.724,7.328 C69.626,4.846,0.5,71.583,0.5,71.583V1.5h398.629L398.938,143.806z"></path>
                                                      </svg>
                                                      <img src={vid.img} alt=""/>
                                                      <div className="box-content">
                                                          <h3 className="post title">{vid.title}</h3>
                                                          <ul className="icon">
                                                              <FocusVideo src={vid.src}/>
                                                              <li title='GO TO THE YOUTUBE LINK FOR THIS VIDEO (new tab)'><a target='_blank' rel="noopener noreferrer" href={vid.src}><i className="fa fa-link"></i></a></li>
                                                          </ul>
                                                      </div>
                                                      <svg className="curve2" x="0px" y="0px" width="150px" height="150px" viewBox="0 0 150 50">
                                                          <path d="M1.114,7.567C87.544-33.817,150,150.5,150,150.5H1.361L1.114,7.567z"></path>
                                                      </svg>
                                                  </div>
                                              </div>)})
            :(<div><Spinner size="lg" color="primary" /><br/><code>LOADING VIDEOS...</code></div>)


   }
    </div>




    <Links/>

</div>
</div>
    );
  }
}

const mapStatToProps = state =>{
    return {
        videos:state.videos
    }
}


export default connect(
    mapStatToProps,
    {getVideos}
    )(VideoGallery);
