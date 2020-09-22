
import React from 'react';
import '../../util/styles/sass/nav.scss';
import {Nav} from 'reactstrap'
import {NavLink,withRouter} from 'react-router-dom'
import {PopoverHeader} from 'reactstrap'
import LanguageSwitch from 'react-switch'
import {toggleLanguage} from '../../redux/actions'
import {connect} from 'react-redux'


const homeLink = {WebkitTextFillColor:'limegreen',
border:'double 1px',borderRight:'none',
borderTop:'none',borderRadius:'0px 5px',
paddingLeft:'6px'
}

const otherLinks = {WebkitTextFillColor:'orange',
textDecoration:'underline crimson',
textDecorationStyle:'solid crimson'
}


const abtLink = {WebkitTextFillColor:'limegreen',
border:'double 1px',borderLeft:'none',
borderTop:'none',borderRadius:'5px 0px',
paddingRight:'6px'
}




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
      <PopoverHeader className='language-toggle-btn'>
      <span className="material-icons">
language
</span>

<code style={{fontWeight:'bolder',marginRight:'4px'}}>
{
  !this.props.useEspanol?<small>{window.innerWidth<=700?<sup>show ESPANOL</sup>:'show ESPANOL'}</small>
:
  <small>{window.innerWidth<=700?<sup>show ENGLISH</sup>:'show ENGLISH'}</small>
}
</code>


<LanguageSwitch  
onChange={()=>{return this.props.toggleLanguage()}} 
checked={this.props.useEspanol} 
onColor='#666'
offColor='#666'
onHandleColor='#0099FF'
offHandleColor='#DC143C'
handleDiameter={17}
height={19.5}
width={40}
checkedIcon={false}
uncheckedIcon={false}
/>
</PopoverHeader>

    </div>
 <Nav className='nav-bar'>
         <div>
         {(!/[a-z]/ig.test(this.props.location.pathname)
                   &&/[/]/ig.test(this.props.location.pathname))
          ||/mystic-warriors-webapp-updates/ig.test(this.props.location.pathname)?(<span className='material-icons'>audiotrack</span>):''}
        <NavLink activeStyle={homeLink} to='/'>Home</NavLink>
         </div>
         <div>
         {/videos/ig.test(this.props.location.pathname)?(<span className='material-icons'>audiotrack</span>):''}
        <NavLink activeStyle={otherLinks} to='/videos'>Videos</NavLink>
         </div>
         <div>
         {/music/ig.test(this.props.location.pathname)?(<span className='material-icons'>audiotrack</span>):''}
        <NavLink activeStyle={otherLinks} to='/music'>Music</NavLink>
         </div>
         <div>
         {/about/ig.test(this.props.location.pathname)?(<span className='material-icons'>audiotrack</span>):''}
        <NavLink style={abtLink} activeStyle={otherLinks} to='/about'>About</NavLink>
        </div>




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
