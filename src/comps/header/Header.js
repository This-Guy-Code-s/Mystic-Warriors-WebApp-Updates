import React from 'react';
import '../../util/styles/sass/headerHero.scss'
import '../../util/styles/css/headerHero.css'






class Header extends React.Component {
constructor(props){
  super(props)
  this.state={
  	bubbleLifeTime: 20,
  	noOfBubbles: 100,
  	bubbles: []
  }
  this.init=this.init.bind(this)
  this.createBubble=this.createBubble.bind(this)
  this.createCircle=this.createCircle.bind(this)
}




createCircle(){
  var circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.animationDelay = (Math.random() * this.state.bubbleLifeTime) + 's';

  var side = (5 + Math.floor(Math.random() * 5)) + 'px';
  circle.style.width = side;
  circle.style.height = side;

  return circle;
}




createBubble(){
  var circleContainer = document.createElement('div');
  circleContainer.classList.add('circle_container');
  circleContainer.style.transform = "rotate(" + Math.floor(Math.random() * 360) + "deg)";

  var circle = this.createCircle();
  circleContainer.appendChild(circle);

  return circleContainer;
}


init(){
var wrapper = document.querySelector('.wrapper');
    var bubble;
    for(var i = 0; i < this.state.noOfBubbles; i++) {
      bubble = this.createBubble();
      wrapper.appendChild(bubble);
    }
}

componentDidMount(){
	return this.init();
}

  render(){
  return (
    <div className="Header">
<div className="wrapper header-wrapper">
  <div className="header_container">
    <div className="container header-name"><small><h1>Mystic Warriors</h1></small></div>
  </div>
</div>

<div className="glow"></div>
<div className="particles">

    <div className="rotate">

        <div className="angle">
            <div className="size">
                <div className="position">
                    <div className="pulse">
                        <div className="particle">
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="angle">
            <div className="size">
                <div className="position">
                    <div className="pulse">
                        <div className="particle">

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="angle">
            <div className="size">
                <div className="position">
                    <div className="pulse">
                        <div className="particle">

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>
    </div>
    );
  }
}

export default Header;
