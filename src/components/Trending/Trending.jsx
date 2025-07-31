import React from "react";

const basePath = "./images/";

function TrendingItem({ collection }) {
  // const { images: [img, ...ribbon], count, title, author: { ava, name } } = collection;

  return (
    <li>
      <img src={basePath + collection.images[0]} alt="" />
      <div className="ribbon">
        <img src={basePath + collection.images[1]} alt="" />
        <img src={basePath + collection.images[2]} alt="" />
        <b className="count">{collection.count}</b>
      </div>
      <b className="title">{collection.title}</b>
      <div className="author">
        <img src={basePath + collection.author.ava} alt="" className="ava" />
        <span className="name">{collection.author.name}</span>
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
