import React from 'react';
import '../../util/styles/css/links.css'
import store from '../../util/img/ico.jpg'
import events from '../../util/img/events.jpg'

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
    <div className="Links">

<section class="Links-cards-wrapper">

 
  <div class="Links-card-grid-space">
    <a class="Links-card" href="/#"  style={{backgroundImage:`url(${events})`}}>
      <div>
        <h1>Events</h1>
        <p>Our next up and coming Events, you can catch us in.</p>
        <div class="date">Mystic Warriors</div>
        <div class="tags">
          <div class="tag">Next Events</div>
        </div>
      </div>
    </a>
  </div>


   <div class="Links-card-grid-space">
    <a class="Links-card" href="/#"  style={{backgroundImage:`url(${store})`}}>
      <div>
        <h1>Store</h1>
        <p>Soon , you will be able to shop at our store here online.</p>
        <div class="date">16 Sep 2020</div>
        <div class="tags">
          <div class="tag">Coming Soon...</div>
        </div>
      </div>
    </a>
  </div>
</section>
</div>

    );
  }
}

export default Links;



  // <div class="Links-card-grid-space">
  //   <a class="Links-card" href="/#" style={{backgroundImage:`url(${booking})`}}>
  //     <div>
  //       <h1>Booking</h1>
  //       <p>Book us to play live at your event.</p>
  //       <div class="date">Mystic Warriors</div>
  //       <div class="tags">
  //         <div class="tag">Book Now!</div>
  //       </div>
  //     </div>
  //   </a>
  // </div>