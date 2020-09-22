import React from 'react';
import {connect} from 'react-redux'
import { Button, Modal, ModalFooter } from 'reactstrap';
import Player from 'react-player'




class FocusVideo extends React.Component {
constructor(props){
  super(props)
  this.state={
  	modal:false,
    playing:true,

  }

  this.toggle=this.toggle.bind(this)
}


toggle(){
	return this.setState({modal:!this.state.modal})
}

 


  componentDidMount(){
    console.log(this.props)
  }


  componentDidUpdate(){
    console.log(this.props)
  }

  render(){
  return (

  	<div>
  	<li title='WATCH THIS VIDEO HERE(pop up)'><b  onClick={this.toggle}><i className="fas fa-eye">Watch Here</i></b></li>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <Player
        url={this.props.src}
        playing={this.state.playing}
        width='100%'
        height={window.innerWidth<700?'300px':'450px'}
        controls={true}

        />
        <ModalFooter>
          <Button style={{border:'none',borderRadius:'50px',background:'rgba(250,0,0,.5)',backgroundImage:'rgba(250,0,0,.5)'}} onClick={this.toggle}><i className="fas fa-eye-slash"></i>{' '}Hide</Button>
        </ModalFooter>
      </Modal>
    </div>
)

  }
}



const mapStateToProps = state =>{
  return {
    useEspanol:state.useEspanol
  }
}

export default connect(
  mapStateToProps,
      {}
  )(FocusVideo);



