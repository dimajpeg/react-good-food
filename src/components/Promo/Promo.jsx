import React from "react";

const basePath = "./images/";

function Promo({ data: promo = {} }) {

  const author = promo.author || {};  
  
  return (
    <section className="promo">
      <img src={basePath + promo.img} alt="" className="bg" />
      <div className="container">
        <div className="content">
          <div className="author">
            <img src={basePath + author.ava} alt={author.name} className="ava" />
            <span className="name">{author.name}</span>
          </div>
        
          <h3>{promo.title}</h3>
          <button type="button">See NFT</button>
        </div>
        
        <div className="countdown">
          <span>Auction ends in:</span>
          <time dateTime="2025-12-31">
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

export default Promo;