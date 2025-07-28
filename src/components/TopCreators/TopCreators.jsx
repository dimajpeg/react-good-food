import React from "react";

function TopCreators() {
  return (
    <section className="top-creators">
      <div className="container">
        <header>
          <hgroup>
            <h2>Top creators</h2>
            <p>Checkout Top Rated Creators on the NFT Marketplace</p>
          </hgroup>
          <button>View Rankings</button>
        </header>

        <ul className="creators">
          <li className="creator">
            <i className="position">1</i>
            <img src="" alt="" className="ava" />
              <h4 className="name">Keepitreal</h4>
              <div className="row">
                <span>Total Sales:</span>
                <span className="amount">34.53 ETH</span>
              </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
export default TopCreators