import React from 'react';
import './util/styles/css/App.css';
import Main from './comps/main/Main'
import Header from './comps/header/Header'
import Footer from './comps/footer/Footer'
import {Route,Switch} from 'react-router-dom'
import VideoGallery from './comps/main/VideoGallery'

class App extends React.Component {
constructor(props){
  super(props)
  this.state={}
}


  render(){
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path={['/','/Mystic-Warriors-WebApp-Updates/']} render={()=>{
        return <Main/>
      }}/>
      <Route exact path={['/Mystic-Warriors-WebApp-Updates/videos','/videos']} render={()=>{
        return <VideoGallery />
      }}/>
      </Switch>
      <Footer/>
    </div>
    );
  }
}

export default App;
