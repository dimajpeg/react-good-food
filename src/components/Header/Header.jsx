import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <img src="/images/icons/logo.svg" alt="logo" />
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
            <img src="/images/icons/user.svg" alt="logo" className={styles.userIcon} />
            Sign Up
          </button>
        </nav>
        <button className={styles.burgerButton}>
          <img src="/images/icons/burger.svg" alt="Menu" />
        </button>
      </div>
    </header>
  );
}

export default Header;