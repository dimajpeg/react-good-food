import React from "react";
import NftCard from "../NftCard/NftCard"

import styles from "./Discover.module.css";

function Discover({ data: nfts = [] }) {
  return (
    <section className={styles.discover}>
      <div className={styles.container}>
        <header>
          <hgroup>
            <h2>Discover More NFTs</h2>
            <p>Explore new trending NFTs</p>
          </hgroup>
          <button>
            <img src="/images/icons/eye.svg" alt="eye" />
            See All
            </button>
        </header>
        <ul className={styles.nfts}>
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