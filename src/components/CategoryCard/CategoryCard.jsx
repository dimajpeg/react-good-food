import React from "react";

const basePath = "./images/";

function CategoryCard({ category }) {
  return (
    <li className="cat">
      <img src={basePath + category.img} alt={category.title} />
      <i>
        <img src={basePath + category.icon} alt="" />
      </i>
      <h4>{category.title}</h4>
    </li>
  );
}
export default CategoryCard;