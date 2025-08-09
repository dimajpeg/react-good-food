import React from "react";
import styles from "./CreatorCard.module.css";
const basePath = "./images/"

function CreatorCard({creator}) {
  return (
    <li className={styles.creator}>
        <i className={styles.position}>{creator.position}</i>
        <img src={basePath + creator.ava} alt={creator.name} className={styles.ava} />
        <h4 className={styles.name}>{creator.name}</h4>
        <div className={styles.row}>
          <span>Total Sales:</span>
          <span className={styles.amount}>{creator.amount}</span>
        </div>
      </li>
  )
}

export default CreatorCard