import React from "react";
import NftCard from "../NftCard/NftCard"
import styles from "./Discover.module.css";
import useWindowWidth from "../../hooks/useWindowWidth";

function Discover({ data: nfts = [] }) {
  const width = useWindowWidth();

  let itemsToShow;
  if (width < 1280) { 
    itemsToShow = 2;
  } else { 
    itemsToShow = 3;
  }

  if (width < 834) {
    itemsToShow = 3;
  }

  const visibleNfts = nfts.slice(0, itemsToShow);

  return (
    <section className={styles.discover}>
      <div className={styles.container}>
        <header>
          <hgroup>
            <h2>Discover More NFTs</h2>
            <p>Explore new trending NFTs</p>
          </hgroup>
          <button className={styles.desktopButton}>
            <img src="/images/icons/eye.svg" alt="eye" />
            See All
          </button>
        </header>
        <ul className={styles.nfts}>
          {visibleNfts.map((nftObject) => (
            <NftCard
              key={nftObject.title}
              nft={nftObject}
            />
          ))}
        </ul>
        <button className={styles.mobileButton}>
          <img src="/images/icons/eye.svg" alt="eye" />
          See All
        </button>
      </div>
    </section>
  )
}

export default Discover