
import React from 'react';
import '../../util/styles/sass/footer.scss';
import {Nav} from 'reactstrap'
import {NavLink,withRouter} from 'react-router-dom'

class Footer extends React.Component {
constructor(props){
  super(props)
  this.state={}
}

componentDidMount(){
  console.log(this.props.history)
}
  render(){
  return (
    <div className="toaster">
    <div className="wrapper">
      <footer className="cta_header">
        <span className="material-icons">
link
</span>
      </footer>
    <Nav>

    {
      /videos/ig.test(this.props.location.pathname)?(
        <NavLink to='/Mystic-Warriors-WebApp-Updates/'>Home</NavLink>
        ):(
        <NavLink to='/Mystic-Warriors-WebApp-Updates/videos'>Video Gallery</NavLink>

        )
    }

    </Nav>
  </div>
  </div>

    );
  }
}

export default withRouter(Footer);
