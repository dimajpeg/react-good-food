import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Discover digital art & Collect NFTs</h2>
          <p>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
          <figure className={styles.mobileFigure}>
            <img src="/images/promo/space-walking.png" alt="space-walking" className={styles.img} />
            <figcaption className={styles.figcaption}>
              <b>Space Walking</b>
              <div className={styles.author}>
                <img src="/images/avatars/animakid.png" alt="animakid" className={styles.ava} />
                <span>Animakid</span>
              </div>
            </figcaption>
          </figure>
          <button className={styles.button}>
            <img src="/images/icons/rocket.svg" alt="rocket" />
            Get Started
          </button>
          <ul className={styles.counters}>
            <li>
              <b>240k+</b>
              <span>Total Sale</span>
            </li>
            <li>
              <b>100k+</b>
              <span>Auctions</span>
            </li>
            <li>
              <b>240k+</b>
              <span>Artists</span>
            </li>
          </ul>
        </div>

        <figure className={styles.desktopFigure}>
          <img src="/images/promo/space-walking.png" alt="space-walking" className={styles.img} />
          <figcaption className={styles.figcaption}>
            <b>Space Walking</b>
            <div className={styles.author}>
              <img src="/images/avatars/animakid.png" alt="animakid" className={styles.ava} />
              <span>Animakid</span>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Hero