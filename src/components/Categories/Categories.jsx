import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';

function Categories({ data: categories = [] }) {
  return (
    <section className="categories">
      <div className="container">
        <h2>Browse Categories</h2>

        <ul className="cats">
          {categories.map((categoryObject) => (
            <CategoryCard
              key={categoryObject.title}
              category={categoryObject}
            />
          ))}
        </ul>
      </div>
    </section>

  )
}

export default Categories
