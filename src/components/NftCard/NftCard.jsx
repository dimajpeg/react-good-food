import React from "react";

const basePath = "./images/";

function NftCard({ nft }) {
  return (
    <li className="nft">
      <img src={basePath + nft.img} alt={nft.title} />
      <div className="content">
        <h4>{nft.title}</h4>
        <div className="author">
          <img src={basePath + nft.author.ava} alt={nft.author.name} className="ava" />
          <span className="name">{nft.author.name}</span>
        </div>
        <div className="row">
          <div className="column">
            <span>Price</span>
            <span className="price">{nft.price}</span>
          </div>
          <div className="column">
            <span>Highest Bid</span>
            <span className="bid">{nft.bid}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default NftCard;