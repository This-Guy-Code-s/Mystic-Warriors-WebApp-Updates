/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import {Modal ,FormGroup,Form} from 'reactstrap';
import '../../util/styles/css/contact.css'
import {toggleHeaderBasedOnModals} from '../../redux/actions'
import {connect} from 'react-redux'


class Contact extends React.Component{
  constructor(props){
    super(props)
    this.state={//modal for the form its self
      modal:false
    }
    this.toggle=this.toggle.bind(this)
  }
 

  toggle(){
     this.setState({modal:!this.state.modal})
     //toggle nav bar it hide or not when forms are out
     return this.props.toggleHeaderBasedOnModals(this.props.modalIsOut)
  }

render(){
  return (
    <div>
<div className="links-card">

<div className="links-icon"><i className="material-icons md-36">alternate_email</i></div>
<p className="title">Contact</p>
<p className="text">
<span className="material-icons" style={{cursor:'pointer'}} onClick={this.toggle}>
exit_to_app
</span>
<br/>
Contact The Manager Now directly via email.</p>

</div>


      <Modal isOpen={this.state.modal} toggle={this.toggle} className='contact-modal'>
<Form className="form contact-form">
  <FormGroup>
  <div className='plain-contact'>
<a className="fa fa-phone contact-span" href='tel:+1-999-999-9999'> 999-999-9999</a>
    <a className="fa fa-envelope-o contact-span" href='mailto:thisguycodez@gmail.com'>contact@company.com</a> 
  </div>
  <small className="text-muted subs-small xOut"  onClick={this.toggle}>Hide<i className="fas fa-eye-slash subs-close-button" ></i></small>
  </FormGroup>
  <FormGroup>
  <p type="Name:" className='contact-p'><input placeholder="type here.." className="form-control contact-input" required/></p>
  <p type="Email:" className='contact-p'><input placeholder="type here.."  className="form-control contact-input" required/></p>
  <p type="Message:" className='contact-p'><textarea placeholder="type here.." className="form-control contact-input" required/></p>
  </FormGroup>
  <FormGroup style={{marginBottom:'10px'}}>
  <button className="contact-button">Send Message</button>
  </FormGroup>
 
</Form>       
      </Modal>
    </div>
  );
  }
}




const mapStateToProps = state =>{
  return{

  }
}

export default connect(
  mapStateToProps,
  {toggleHeaderBasedOnModals}
  )(Contact);


