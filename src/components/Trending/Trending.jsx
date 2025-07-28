import React from "react";

const basePath = "./images/";

function TrendingItem({ collection }) {
  const { images: [img, ...ribbon], count, title, author: { ava, name } } = collection;
  
  return (
    <li>
      <img src={basePath + img} alt="" />
      <div className="ribbon">
        <img src={basePath + ribbon[0]} alt="" />
        <img src={basePath + ribbon[1]} alt="" />
        <b className="count">{count}</b>
      </div>
      <b className="title">{title}</b>
      <div className="author">
        <img src={basePath + ava} alt="" className="ava" />
        <span className="name">{name}</span>
      </div>
    </li>
  );
}

function Trending({ data: collections = [] }) {
  return (
    <section className="trending">
      <div className="container">
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
export default Trending;
