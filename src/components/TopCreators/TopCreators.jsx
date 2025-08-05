import React from "react";

import CreatorCard from "../CreatorCard/CreatorCard";

function TopCreators({ data: creators = [] }) {
  return (
    <section className="top-creators">
      <div className="container">
        <header>
          <hgroup>
            <h2>Top creators</h2>
            <p>Checkout Top Rated Creators on the NFT Marketplace</p>
          </hgroup>
          <button>View Rankings</button>
        </header>

        <ul className="creators">
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