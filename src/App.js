import React from 'react';
import './util/styles/css/App.css';
import Main from './comps/main/'
import Header from './comps/header/Header'
import Nav from './comps/nav/'
import {Route,Switch} from 'react-router'
import VideoGallery from './comps/main/VideoGallery'
import {connect} from 'react-redux'

class App extends React.Component {
constructor(props){
  super(props)
  this.state={
  }
}


 


  componentDidMount(){
    console.log(this.props)
  }


  componentDidUpdate(){
    console.log(this.props)
  }

  render(){
  return (
    <div className="App">
          <Nav/>
    



      <Header/>
      <Switch>
      <Route exact path='/' render={()=>{
        return <Main/>
      }}/>
      <Route exact path='/videos' render={()=>{
        return (
          <div className='gallery-n-link'>
          <VideoGallery />
          </div>
          )
      }}/>
      </Switch>
      
    </div>
    );
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
  )(App);
