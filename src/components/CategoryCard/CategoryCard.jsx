import React from "react";
import styles from "./CategoryCard.module.css";
const basePath = "./images/";

function CategoryCard({ category }) {
  return (
    <li className={styles.cat}>
      <img src={basePath + category.img} alt={category.title} className={styles.img} />
      <i>
        <img src={basePath + category.icon} alt="" className={styles.icon} />
      </i>
      <h4>{category.title}</h4>
    </li>
  );
}
export default CategoryCard;