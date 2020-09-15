
import React from 'react';
import '../../util/styles/sass/nav.scss';
import {Nav} from 'reactstrap'
import {NavLink,withRouter} from 'react-router-dom'
import {PopoverHeader} from 'reactstrap'
import LanguageSwitch from 'react-switch'
import {toggleLanguage} from '../../redux/actions'
import {connect} from 'react-redux'




class NavBarr extends React.Component {
constructor(props){
  super(props)
  this.state={

  }

  this.toggle=this.toggle.bind(this)
}
  

   toggle(){
    return this.setState({popoverOpen:!this.state.popoverOpen})
  }

componentDidMount(){
  console.log(this.props.history)
    this.toggle()
}






  render(){
  return (
      <header onScroll={this.scrolling} className="footer-linx"
      style={{display:this.props.modalIsOut?'none':'flex'}}>

 <div className='language-toggle'>
      <PopoverHeader className='language-toggle-btn'><span className="material-icons">
language
</span>

<code>
<small>{window.innerWidth<=700?<sup>ESPANOL</sup>:'ESPANOL'}</small>
</code>
<br/>

<LanguageSwitch  
onChange={()=>{return this.props.toggleLanguage()}} 
checked={this.props.useEspanol} 
onColor='#38565c'
offColor='#DC143C'
onHandleColor='#000'
offHandleColor='#000'
/>
</PopoverHeader>
    </div>
 <Nav className='nav-bar'>
      
 

    {
      /videos/ig.test(this.props.location.pathname)?(
        <NavLink to='/'>Home</NavLink>
        ):(
        <NavLink to='/videos'>Videos</NavLink>

        )
    }



     {
      /music/ig.test(this.props.location.pathname)?(
        <NavLink to='/'>Home</NavLink>
        ):(
        <NavLink to='/music'>Music</NavLink>

        )
    }


    {
      /about/ig.test(this.props.location.pathname)?(
        <NavLink to='/'>Home</NavLink>
        ):(
        <NavLink to='/about'>About</NavLink>

        )
    }

        





    </Nav>
      </header>

    );
  }
}



const mapStateToProps = state =>{
  return {
    useEspanol:state.useEspanol,
    modalIsOut:state.modalIsOut
  }
}




export default connect(
  mapStateToProps,
      {toggleLanguage}
  )(withRouter(NavBarr));
