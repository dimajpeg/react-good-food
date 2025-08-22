import React from "react";
import styles from "./TopCreators.module.css";
import CreatorCard from "../CreatorCard/CreatorCard";
import useWindowWidth from "../../hooks/useWindowWidth";

function TopCreators({ data: creators = [] }) {
  const width = useWindowWidth();

  // Решаем, сколько карточек показывать
  let itemsToShow;
  if (width < 834) { // Мобильный
    itemsToShow = 5;
  } else if (width < 1280) { // Планшет
    itemsToShow = 6;
  } else { // Десктоп
    itemsToShow = 12;
  }

  const visibleCreators = creators.slice(0, itemsToShow);

  return (
    <section className={styles.topcreators}>
      <div className={styles.container}>
        <header>
          <hgroup>
            <h2>Top creators</h2>
            <p>Checkout Top Rated Creators on the NFT Marketplace</p>
          </hgroup>
          <button className={styles.desktopButton}>
            <img src="/images/icons/rocket-purple.svg" alt="purple-rocket" />
            View Rankings
          </button>
        </header>

        <ul className={styles.mobileCreators}>
          {visibleCreators.map((creatorObject) => (
            <CreatorCard
              key={creatorObject.position}
              creator={creatorObject}
            />
          ))}
        </ul>

        <button className={styles.mobileButton}>
          <img src="/images/icons/rocket-purple.svg" alt="purple-rocket" />
          View Rankings
        </button>

        <ul className={styles.desktopCreators}>
          {visibleCreators.map((creatorObject) => (
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