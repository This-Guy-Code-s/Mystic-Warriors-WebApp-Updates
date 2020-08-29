/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Modal } from 'reactstrap';
// import {Modal ,FormGroup,Form} from 'reactstrap';
import '../../util/styles/css/contact.css'
import Player from 'react-player'



const bgs = {
  background:'cover',
  backgroundRepeat:'no-repeat',
  backgroundPosition:'center'
}

class Video extends React.Component{
  constructor(props){
    super(props)
    this.state={
      modal:false
    }
    this.toggle=this.toggle.bind(this)
  }


  toggle(){
    console.log('clicked')
    return this.setState({modal:!this.state.modal})
  }

render(){
  return (





   <div>
   <div className=" vg-card-container"  onClick={this.toggle}>
      <div className=" vg-overlay"></div>
      <div className=" vg-overlay"></div>
      <div className=" vg-overlay"></div>
      <div className=" vg-overlay"></div>
<h4 className='vg-h4'>{this.props.title}</h4>
      <div className="card vg-card" style={{...bgs,backgroundImage:`url(${this.props.img})`}}>
      </div>
    </div>
<Modal isOpen={this.state.modal} fade={false} toggle={this.state.toggle}  id="noticeModal" tabIndex="-1" role="dialog">
<div className="modal-header" style={{background:'rgba(0,0,0,1)',border:'none',color:'azure'}}>
  <div id="wrapper">
    <h6 className="glitch" data-text={this.props.title}>{this.props.title}</h6>
    <span className="sub"></span>
  </div>
<button type="button" className="close" data-dismiss="modal" aria-label="Close">
<i className="fas fa-window-close back"  onClick={()=>{this.toggle()}}></i>
</button>
</div>
            
                <Player
          className='video'
          url={this.props.src}
        />  
        
</Modal>
        </div>

  );
  }
}

export default Video;




//     <div>
// {/*COMPONENT TO ACT AS BUTTON*/}


//       <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle}  className='contact-modal video-player'>
//   {/*THE VIDEO REACT-PLAYER*/}    
 
//       </Modal>
//     </div>

 // <div>
 //      <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
 //      <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
 //        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
 //        <ModalBody>
 //          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 //        </ModalBody>
 //        <ModalFooter>
 //          <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
 //          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
 //        </ModalFooter>
 //      </Modal>
 //    </div>