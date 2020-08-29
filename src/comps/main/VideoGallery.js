import React from 'react';
// import VidLink from './VideoLink'
import VidLink from '../modals/FocusVideo'
import '../../util/styles/css/videoGallery.css'
import imga from '../../util/img/a.png'
import imgb from '../../util/img/b.png'
import imgc from '../../util/img/c.png'
import imgd from '../../util/img/d.png'
import imge from '../../util/img/e.png'
import imgf from '../../util/img/f.png'
import imgg from '../../util/img/g.png'
import imgh from '../../util/img/h.png'
import imgi from '../../util/img/i.png'



const vidz = [
    {
      title:'Mystic Warriors The Shadow Of The Sun',
      src:'https://www.youtube.com/embed/7vfh2QNlp2I',
      img:imga
    },
    {
      title:'Mystic Warriors Echo Of The Desert',
      src:'https://www.youtube.com/embed/ynlYe2y2IAI',
      img:imgb
    },
    {
      title:'Summer\'s Mist 🔆 Mystic Warriors',
      src:'https://www.youtube.com/embed/3GY0kAmlOgM',
      img:imgc
    },




    {
      title:'Mystic Warriors Frontiers',
      src:'https://www.youtube.com/embed/vIQZLTpcizg',
      img:imgd
    },
    {
      title:'Mystic Warriors African Legacy',
      src:'https://www.youtube.com/embed/TBKDD4q0GJo',
      img:imge
    },
    {
      title:'Mystic Warriors Piano',
      src:'https://www.youtube.com/embed/OxRJU_KEQQs',
      img:imgf
    },





    {
      title:'Mystic Warriors Widow ´s Alley',
      src:'https://www.youtube.com/embed/Qj0RhuzuDsI',
      img:imgg
    },
    {
      title:'Mystic Warriors Behind The Waterfall',
      src:'https://www.youtube.com/embed/eA9C81Jn9EI',
      img:imgh
    },
    {
      title:'Mystic Warriors Beyond Reality',
      src:'https://www.youtube.com/embed/UHi8cJqlryE',
      img:imgi
    },

]

class VideoGallery extends React.Component {
constructor(props){
  super(props)
  this.state={}
}


  render(){
  return (
    <div className="container vg-container">
  
  <div className="col vg-col">

    {
      [0,1,2].map(vidNumber=>{
          return (

              <VidLink 
                key={vidNumber}
                title={vidz[vidNumber].title}
                src={vidz[vidNumber].src}
                img={vidz[vidNumber].img}
              />

            )
      })
    }

    
  </div>
  
  <div className="col vg-col">

   {
      [3,4,5].map(vidNumber=>{
          return (

              <VidLink 
                key={vidNumber}
                title={vidz[vidNumber].title}
                src={vidz[vidNumber].src}
                img={vidz[vidNumber].img}
              />

            )
      })
    }
    
  </div>
  
  <div className="col vg-col">

   {
      [6,7,8].map(vidNumber=>{
          return (

              <VidLink 
                key={vidNumber}
                title={vidz[vidNumber].title}
                src={vidz[vidNumber].src}
                img={vidz[vidNumber].img}
              />

            )
      })
    }
    
  </div>
  
</div>
    );
  }
}

export default VideoGallery;
