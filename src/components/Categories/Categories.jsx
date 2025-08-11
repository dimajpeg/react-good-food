import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import styles from './Categories.module.css';

function Categories({ data: categories = [] }) {
  return (
    <section className={styles.categories}>
      <div className={styles.container}>
        <h2>Browse Categories</h2>

        <ul className={styles.cats}>
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
