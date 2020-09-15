import React from 'react';
import '../../util/styles/sass/abt.scss'
class About extends React.Component {
constructor(props){
  super(props)
  this.state={}
}


  render(){
  return (
    <div className='about-section'>
<div className="wrapper">
  <div className="box">
    <div className="bubble-aprox"></div>
    <div className="bubble">
      <span className="bubble__icon material-icons" >
not_listed_location
</span>
      <div className="bubble__content">
      <span className="material-icons" role='img' aria-label='light bulb'>
&#128161;
</span> Andean Instruments <br/>
        <small>High-pitched vocals are accompanied by a variety of instruments, including quena (flute), harp, siku (panpipe), accordion, saxophone, charango, lute, violin, guitar, and mandolin. Some elements of huayño originate in the music of the pre-Columbian Andes, especially on the territory of former Inca Empire.</small>
      </div>
    </div>

    <div className="box__content">
      <p>Mystic Warriors is dedicated to exposing the essence of Andean Music in a Company unique way. While their music style appears to fit into the "New Age" category, it often sounds like world music contemporary jazz, Latin or mainstream popular. They believe their music is a fusion that crosses over all of these without leaving the boundaries of Andean Music. More important than categorizing their style is their ability to deliver a message of universal peace and harmony transmitted by the combination of Andean acient flutes and panpipes with contemporary instruments.</p>

      <p>Joining the ancestral sounds of the Incas with today's newest sounds, Mystic Warriors will transport you to places and times long forgotten, but yet to come.</p> 
    </div>
  </div>
</div>
    </div>
    );
  }
}

export default About;
