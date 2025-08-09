// Файл: src/components/Header/Header.jsx

import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <img src="/images/icons/logo.png" alt="logo" />
          <h1>NFT Marketplace</h1>
        </a>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#3">Marketplace</a>
            </li>
            <li>
              <a href="#3">Rankings</a>
            </li>
            <li>
              <a href="##">Connect a wallet</a>
            </li>
          </ul>
          <button type="button" className={styles.button}>
            {/* <img src="/images/icons/user.png" alt="logo" className={styles.user} /> */}
            Sign Up
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;