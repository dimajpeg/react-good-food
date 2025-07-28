import React from "react";

function Discover() {
  return (
    <section className="discover">
      <div className="container">
        <header>
          <hgroup>
            <h2>Discover More NFTs</h2>
            <p>Explore new trending NFTs</p>
          </hgroup>
          <button>See All</button>
        </header>
        <ul className="nfts">
          <li className="nft">
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
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Discover