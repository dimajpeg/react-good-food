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
          {/* 2. Запускаем "конвейер" .map() по массиву creators */}
          {creators.map((creatorObject) => (
            // 3. Для каждого объекта создаем компонент CreatorCard
            <CreatorCard
              key={creatorObject.position} // Уникальный ключ
              creator={creatorObject}      // Передаем ВЕСЬ объект создателя в prop 'creator'
            />
          ))}
      </ul>
    </div>
    </section >
  )
}
export default TopCreators