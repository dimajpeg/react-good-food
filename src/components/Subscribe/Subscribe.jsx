import React from "react";
import styles from "./Subscribe.module.css";

function Subscribe() {
  return (
    <section className={styles.subscribe}>
      <div className={styles.container}>
        <img src="/images/promo/join.png" alt="subscribe" />
        <form action="">
          <h2>Join our weekly digest</h2>
          <p>Get exclusive promotions & updates straight to your inbox.</p>
          <div className={styles.row}>
            <input type="email" placeholder="Enter your email here" />
            <button>
              <img src="/images/icons/letter.svg" alt="letter" />
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>

  );
}

export default Subscribe