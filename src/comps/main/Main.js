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

    <div style={{}}>

	<div id="wrapper">
		<h6 class="glitch" data-text="ALWAYS IMITATED NEVER DUPLICATED">ALWAYS IMITATED</h6>
		<span class="sub"></span>
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
