import React from 'react';
import '../../util/styles/sass/main.scss';
import {Container} from 'reactstrap'
import Artist from './Artist'
import PictureGallery from './PictureGallery'
import Links from './Links'
import About from './About'

class Main extends React.Component {
constructor(props){
  super(props)
  this.state={}
}


  render(){
  return (
    <Container className="Main">

    <div style={{marginBottom:'50px'}}>

	<div id="wrapper">
		<h6 className="glitch" data-text="ALWAYS IMITATED NEVER DUPLICATED">ALWAYS IMITATED</h6>
		<span className="sub"></span>
	</div>
	</div>
 			 <Artist />
       <About />
 			 <PictureGallery />
 			 <Links />
    </Container>
    );
  }
}

export default Main;
