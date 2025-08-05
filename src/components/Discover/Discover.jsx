import React from "react";
import NftCard from "../NftCard/NftCard"

function Discover({ data: nfts = [] }) {
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
        {nfts.map((nftObject) => (
          <NftCard
          key={nftObject.title}
          nft={nftObject} 
        />
      ))}
        </ul>
      </div>
    </section>
  )
}

export default Discover