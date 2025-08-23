import React from "react";
import styles from "./Promo.module.css";

const basePath = "./images/";

function Promo({ data: promo = {} }) {

  const author = promo.author || {};

  return (
    <section className={styles.promo}>
      <img src={basePath + promo.img} alt="" className={styles.bg} />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.author}>
            <img src={basePath + author.ava} alt={author.name} className={styles.ava} />
            <span className={styles.name}>{author.name}</span>
          </div>

          <h3>{promo.title}</h3>
          <button className={styles.desktopButton} type="button">
            <img src="/images/icons/eye.svg" alt="eye" />See NFT
          </button>
        </div>

        <div className={styles.countdown}>
          <span>Auction ends in:</span>
          <time dateTime="2025-12-31">
            <b className={styles.hours}>59</b>
            <b className={styles.colon}>:</b>
            <b className={styles.minutes}>59</b>
            <b className={styles.colon}>:</b>
            <b className={styles.seconds}>59</b>
          </time>
          <div className={styles.row}>
            <span className={styles.spanhours}>Hours</span>
            <span className={styles.spanminutes}>Minutes</span>
            <span className={styles.spanseconds}>Seconds</span>
          </div>
        </div>

        <button className={styles.mobileButton} type="button">
          <img src="/images/icons/eye.svg" alt="eye" />See NFT
        </button>
      </div>
    </section>
  );
}

export default Promo;