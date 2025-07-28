import React from "react";

function GetStarted() {
  return (
    <section className="get-started">
      <div className="container">
        <h2>How it works</h2>
        <p>Find out how to get started</p>

        <ul className="steps">
          <li className="step">
            <img src="" alt=""/>
              <h4>Setup Your wallet</h4>
              <p>Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
          </li>
          <li className="step">
            <img src="" alt=""/>
              <h4>Create Collection</h4>
              <p>Upload your work and setup your collection. Add a description, social links and floor price.</p>
          </li>
          <li className="step">
            <img src="" alt=""/>
              <h4>Start Earning</h4>
              <p>Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default GetStarted