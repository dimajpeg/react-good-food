import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="content">
          <h2>Discover digital art & Collect NFTs</h2>
          <p>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
          <button>Get Started</button>

          <ul className="counters">
            <li>
              <b>240k+</b>
              <span>Total Sale</span>
            </li>
            <li>
              <b>100k+</b>
              <span>Auctions</span>
            </li>
            <li>
              <b>240k+</b>
              <span>Artists</span>
            </li>
          </ul>
        </div>
      </div>

      <figure>
        <img src="" alt=""/>
          <figcaption>
            <b>Space Walking</b>
            <div className="author">
              <img src="" alt="" className="ava"/>
                <span>Animakid</span>
            </div>
          </figcaption>
      </figure>
    </section>
  );
}

export default Hero