import React from 'react';
import '../../../util/styles/sass/links.scss'
import {Container} from 'reactstrap'

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
            <a className="material-icons" href="https://www.facebook.com/MysticWarriors/">
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
            <a className="material-icons" href="https://www.youtube.com/channel/UCL06HreOhP5FWtOdGck_Pmw">
exit_to_app
</a>
<br/>
            Check out all our music and videos.</p>
         
      </div>



      
      <div className="links-card">
         
            <div className="links-icon"><i className="material-icons fas fa-at"></i></div>
            <p className="title">email</p>
            <p className="text">
            <a className="material-icons" href="mailto:marcovini@aol.com">
exit_to_app
</a>
<br/>
            Email the General manager now via email.</p>
         
      </div>

   

   
   </div>
   

</Container>


    );
  }
}

export default Links;
