import React from "react";
import styles from "./NftCard.module.css";
const basePath = "./images/";

function NftCard({ nft }) {
  return (
    <li className={styles.nft}>
      <img src={basePath + nft.img} alt={nft.title} className={styles.img} />
      <div className={styles.content}>
        <h4>{nft.title}</h4>
        <div className={styles.author}>
          <img src={basePath + nft.author.ava} alt={nft.author.name} className={styles.ava} />
          <span className={styles.name}>{nft.author.name}</span>
        </div>
        <div className={styles.row}>
          <div className={styles.leftcolumn}>
            <span>Price</span>
            <span className={styles.price}>{nft.price}</span>
          </div>
          <div className={styles.rightcolumn}>
            <span>Highest Bid</span>
            <span className={styles.bid}>{nft.bid}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default NftCard;