import React from 'react';
import '../../util/styles/sass/links.scss'
import {Container} from 'reactstrap'
import Contact from '../modals/Contact'

class Links extends React.Component {
constructor(props){
  super(props)
  this.state={
    showC:false,
    lcBox:{}
  }
  this.showContent = this.showContent.bind(this)
}


showContent(){

}

  render(){
  return (
    <Container>
  
   
   <div className="links-content">
      <div className="links-card">
         
            <div className="links-icon"><i className="material-icons md-36">facebook</i></div>
            <p className="title">Facebook</p>
            <p className="text">
            <a className="material-icons" href="/#">
exit_to_app
</a>
<br/>

            See our post and tune in live.
            </p>
         
      </div>
      <div className="links-card">
         
            <div className="links-icon"><i className="material-icons fab fa-youtube"></i></div>
            <p className="title">YouTube</p>
            <p className="text">
            <a className="material-icons" href="/#">
exit_to_app
</a>
<br/>
            Check out all our music and videos.</p>
         
      </div>



      
     <Contact />
   

   
   </div>
</Container>


    );
  }
}

export default Links;



  // <div className="Links-card-grid-space">
  //   <a className="Links-card" href="/#" style={{backgroundImage:`url(${booking})`}}>
  //     <div>
  //       <h1>Booking</h1>
  //       <p>Book us to play live at your event.</p>
  //       <div className="date">Mystic Warriors</div>
  //       <div className="tags">
  //         <div className="tag">Book Now!</div>
  //       </div>
  //     </div>
  //   </a>
  // </div>