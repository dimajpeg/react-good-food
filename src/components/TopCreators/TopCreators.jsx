import React from "react";
import styles from "./TopCreators.module.css";

import CreatorCard from "../CreatorCard/CreatorCard";

function TopCreators({ data: creators = [] }) {
  return (
    <section className={styles.topcreators}>
      <div className={styles.container}>
        <header>
          <hgroup>
            <h2>Top creators</h2>
            <p>Checkout Top Rated Creators on the NFT Marketplace</p>
          </hgroup>
          <button>
            <img src="/images/icons/rocket-purple.png" alt="purple-rocket" />
            View Rankings
          </button>
        </header>

        <ul className={styles.creators}>
          {creators.map((creatorObject) => (
            <CreatorCard
              key={creatorObject.position}
              creator={creatorObject}
            />
          ))}
        </ul>
      </div>
    </section>

  )
}

export default TopCreators