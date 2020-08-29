import React from 'react';
import './util/styles/css/App.css';
import Main from './comps/main/Main'
import Header from './comps/header/Header'
// import Footer from './comps/footer/Footer'

class App extends React.Component {
constructor(props){
  super(props)
  this.state={}
}


  render(){
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
    );
  }
}

export default App;
