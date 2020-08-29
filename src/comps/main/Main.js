import React from 'react';
import '../../util/styles/css/main.scss';
import {Container} from 'reactstrap'
import Artist from './Artist'
import Center from './Center'
import Links from './Links'


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
 			 <Center />
 			 <Links />
    </Container>
    );
  }
}

export default Main;
