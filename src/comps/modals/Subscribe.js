import React from 'react';
import {Modal,Spinner} from 'reactstrap';
import '../../util/styles/css/subscribe.css';
import img from '../../util/img/1.jpg';
import {toggleHeaderBasedOnModals,subscribe} from '../../redux/actions'
import {connect} from 'react-redux'

class Subscribe extends React.Component {
constructor(props){
  super(props)
  this.state={
    modal:false,
    email:''
  }

  this.toggle=this.toggle.bind(this)
  this.subNow=this.subNow.bind(this)
} 

  toggle(){
     this.setState({//modal for the form its self
      modal:!this.state.modal
    })
     //toggle nav bar to hide while forms are out
     return this.props.toggleHeaderBasedOnModals(this.props.modalIsOut)
  }


  subNow(e){
    e.preventDefault()
     this.props.subscribe({user_email:this.state.email})
     .then(done=>{
        //if sub is successfull clear input, else nothing. This way user can just edit.
  
     if(this.props.subIsSuccess===true){
    this.setState({email:''})
      return this.toggle()

    } 
     })

    
     
}



componentDidUpdate(){
  console.log(this.props.modalIsOut)
  
}



  render(){
  return (
   <div className='container'>    
    <div className='card__button' onClick={this.toggle} style={{cursor:'pointer'}}>{this.props.buttonLabel}</div>
    <Modal toggle={this.toggle} className="subs-modal" isOpen={this.state.modal} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <form className="modal-content subs-modal-content" onSubmit={this.subNow}>
                <div className="modal-body p-0 row">
                    <div className="col-12 col-lg-5 ad p-0 sub-img-block"> <img src={img} alt='mystic warriors'/> </div>
                    <div className="details col-12 col-lg-7">
                        <div id="wrapper">
    <h6 className="glitch" data-text="STAY TUNED">Stay Tuned</h6>
    <span className="sub"></span>
  </div>
                        <p><small className="para subs-small">Subscribe to our newsletter and never miss our coming events, latest music, albums, etc.</small></p>
                        <p><small className="para subs-small">Our newsletter is sent once a week, every<br/>Tuesday</small></p>
                        <div><small className="para subs-small"><code>{this.props.subIsSuccess==='loading'?(<Spinner size="sm" color="primary" />):this.props.subMsg}</code></small></div>
                        <div className="form-group mt-3 pt-3 mb-5">
                        <input type="email" className="form-control inp" placeholder="email@example.com" value={this.state.email} onChange={(e)=>{return this.setState({email:e.target.value})}} required/> 
                        </div>
                         <div className='subs-btns'><small className="text-muted subs-small"><button type="submit" className=" subs-button" >Subscribe Now!</button></small>
                         <small className="text-muted subs-small hide-btn"  onClick={this.toggle}>Hide<i className="fas fa-eye-slash subs-close-button" ></i></small></div>
                    </div>
                </div>
            </form>
    </Modal>
</div>
    );
  }
}



const mapStateToProps = state =>{
  return{
    modalIsOut:state.modalIsOut,
    subMsg:state.subMsg,
    subIsSuccess:state.subIsSuccess
  }
}

export default connect(
  mapStateToProps,
  {toggleHeaderBasedOnModals,subscribe}
  )(Subscribe);
