import React from "react";

function Promo() {
  return (
    <section className="promo">
    <img src="" alt="" className="bg"/>
    <div className="container">
      <div className="content">
        <div className="author">
          <img src="" alt="" className="ava"/>
          <span className="name">Shroomie</span>
        </div>
      
        <h3>Magic Mashrooms</h3>
        <button>See NFT</button>
      </div>
      
      <div className="countdown">
        <span>Auction ends in:</span>
        <time datetime="">
          <b className="hours">59</b>
          :
          <b className="minutes">59</b>
          :
          <b className="seconds">59</b>
        </time>
        <div className="row">
          <span>Hours</span>
          <span>Minutes</span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  </section>
  );
}
export default Promo