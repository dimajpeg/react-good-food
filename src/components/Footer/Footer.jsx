import React from "react";
import styles from "./Footer.module.css";
const basePath = "./images/";

function Footer({ data: footerData = {} }) {

  const author = footerData.author || {};

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <img src="/images/icons/logo.svg" alt="logo" className={styles.logo} />
            <p><a href="#">NFT marketplace UI created with Anima for Figma.</a></p>
            <p>Join our community</p>
            <ul className={styles.socials}>
              <li>
                <a href="">
                  <img src="/images/icons/discord.svg" alt="discord" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/images/icons/youtube.svg" alt="youtube" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/images/icons/twitter.svg" alt="twitter" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="/images/icons/instagram.svg" alt="instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Explore</h3>
            <ul className={styles.links}>
              <li><a href="#">Marketplace</a></li>
              <li><a href="#">Rankings</a></li>
              <li><a href="#">Connect a wallet</a></li>
            </ul>
          </div>
          <form action="">
            <h3>Join our weekly digest</h3>
            <p>Get exclusive promotions & updates straight to your inbox.</p>
            <div className={styles.subscribe}>
              <input type="email" placeholder="Enter your email here" />
              <button>Subscribe</button>
            </div>
          </form>
        </div>
        <hr />
        <p>Ⓒ NFT Market. Use this template freely.</p>
      </div>

      <div className={styles.nft}>
        <img src={basePath + footerData.img} alt={footerData.title} />
        <div className={styles.content}>
          <h4>{footerData.title}</h4>
          <div className={styles.author}>
            <img src={basePath + author.ava} alt={author.name} className={styles.ava} />
            <span className={styles.name}>{author.name}</span>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <span>Price</span>
              <span className={styles.price}>1.63 ETH</span>
            </div>
            <div className={styles.column}>
              <span>Highest Bid</span>
              <span className={styles.bid}>0.33 wETH</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer