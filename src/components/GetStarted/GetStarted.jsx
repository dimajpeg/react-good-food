import React from "react";
import styles from "./GetStarted.module.css";

function GetStarted() {
  return (
    <section className={styles.getstarted}>
      <div className={styles.container}>
        <h2>How it works</h2>
        <p>Find out how to get started</p>

        <ul className={styles.steps}>
          <li className={styles.step}>
            <img src="/images/icons/wallet.svg" alt="wallet" />
            <div className={styles.info}>
              <h4>Setup Your wallet</h4>
              <p>Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
            </div>
          </li>
          <li className={styles.step}>
            <img src="/images/icons/collection.svg" alt="collection" />
            <div className={styles.info}>
              <h4>Create Collection</h4>
              <p>Upload your work and setup your collection. Add a description, social links and floor price.</p>
            </div>
          </li>
          <li className={styles.step}>
            <img src="/images/icons/basket.svg" alt="basket" />
            <div className={styles.info}>
              <h4>Start Earning</h4>
              <p>Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default GetStarted