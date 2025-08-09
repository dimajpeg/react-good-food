import React from "react";
import styles from "./Trending.module.css";

const basePath = "./images/";


function Trending({ data: collections = [] }) {
  return (
    <section className={styles.trending}>
      <div className={styles.container}>
        <h2>Trending Collection</h2>
        <p>Checkout our weekly updated trending collection.</p>

        <ul>
          {collections.map((collection) => (
            <TrendingItem collection={collection} key={collection.title} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function TrendingItem({ collection }) {
  // const { images: [img, ...ribbon], count, title, author: { ava, name } } = collection;

  return (
    <li>
      <img src={basePath + collection.images[0]} alt="" />
      <div className={styles.ribbon}>
        <img src={basePath + collection.images[1]} alt="" />
        <img src={basePath + collection.images[2]} alt="" />
        <b className={styles.count}>{collection.count}</b>
      </div>
      <b className={styles.title}>{collection.title}</b>
      <div className={styles.author}>
        <img src={basePath + collection.author.ava} alt="" className="ava" />
        <span className={styles.name}>{collection.author.name}</span>
      </div>
    </li>
  );
}


export default Trending;
