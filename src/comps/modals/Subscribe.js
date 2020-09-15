import React from 'react';
import {Modal} from 'reactstrap';
import '../../util/styles/css/subscribe.css';
import img from '../../util/img/1.jpg';
import {toggleHeaderBasedOnModals} from '../../redux/actions'
import {connect} from 'react-redux'

class Subscribe extends React.Component {
constructor(props){
  super(props)
  this.state={
    modal:false
  }

  this.toggle=this.toggle.bind(this)
} 

  toggle(){
     this.setState({//modal for the form its self
      modal:!this.state.modal
    })
     //toggle nav bar to hide while forms are out
     return this.props.toggleHeaderBasedOnModals(this.props.modalIsOut)
  }





componentDidUpdate(){
  console.log(this.props.modalIsOut)
}



  render(){
  return (
   <div className='container'>    
    <div className='card__button' onClick={this.toggle} style={{cursor:'pointer'}}>{this.props.buttonLabel}</div>
    <Modal toggle={this.toggle} className="subs-modal" isOpen={this.state.modal} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-content subs-modal-content">
                <div className="modal-body p-0 row">
                    <div className="col-12 col-lg-5 ad p-0"> <img src={img} width="100%" height="100%" alt='mystic warriors'/> </div>
                    <div className="details col-12 col-lg-7">
                        <div id="wrapper">
    <h6 className="glitch" data-text="STAY TUNED">Stay Tuned</h6>
    <span className="sub"></span>
  </div>
                        <p><small className="para subs-small">Subscribe to our newsletter and never miss our coming events, latest music, albums, etc.</small></p>
                        <p><small className="para subs-small">Our newsletter is sent once a week, every<br/>Tuesday</small></p>
                        <div className="form-group mt-3 pt-3 mb-5">
                        <input type="email" className="form-control inp" placeholder="email@example.com"/> 
                        </div>
                         <div className='subs-btns'><small className="text-muted subs-small"><button type="button" className=" subs-button">Subscribe Now!</button></small>
                         <small className="text-muted subs-small hide-btn"  onClick={this.toggle}>Hide<i className="fas fa-eye-slash subs-close-button" ></i></small></div>
                    </div>
                </div>
            </div>
    </Modal>
</div>
    );
  }
}



const mapStateToProps = state =>{
  return{
    modalIsOut:state.modalIsOut
  }
}

export default connect(
  mapStateToProps,
  {toggleHeaderBasedOnModals}
  )(Subscribe);
