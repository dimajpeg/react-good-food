import React from "react";

function Fotter() {
  return (
    <footer>
      <div className="container">
        <div className="column">
          <img src="" alt="" className="logo"/>
            <a href="#">NFT marketplace UI created with Anima for Figma.</a>
            <a href="#">Join our community</a>
            <ul className="social">
              <li>
                <a href="">
                  <img src="" alt=""/>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="" alt=""/>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="" alt=""/>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="" alt=""/>
                </a>
              </li>
            </ul>
        </div>
        <div className="column">
          <h3>Explore</h3>
          <a href="#">Marketplace</a>
          <a href="#">Rankings</a>
          <a href="#">Connect a wallet</a>
        </div>
        <form action="">
          <h3>Join our weekly digest</h3>
          <p>Get exclusive promotions & updates straight to your inbox.</p>
          <input type="email" placeholder="Enter your email here"/>
            <button>Subscribe</button>
        </form>
        <hr/>
          <span>Ⓒ NFT Market. Use this template freely.</span>
      </div>

      <div className="nft">
        <img src="" alt=""/>
          <div className="content">
            <h4>Distant Galaxy</h4>
            <div className="author">
              <img src="" alt="" className="ava"/>
                <span className="name">MoonDancer</span>
            </div>
            <div className="row">
              <div className="column">
                <span>Price</span>
                <span className="price">1.63 ETH</span>
              </div>
              <div className="column">
                <span>Highest Bid</span>
                <span className="bid">0.33 wETH</span>
              </div>
            </div>
          </div>
      </div>
    </footer>
  );
}

export default Fotter;