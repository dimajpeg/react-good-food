// Файл: src/components/Header/Header.jsx

import React from 'react';

function Header() {
  return (
    <header>
      <div className="container">
        <a href="#" className="logo">
          <img src="" alt="" />
          <h1>NFT Marketplace</h1>
        </a>
        <nav>
          <ul>
            <li>
              <a href="#">Marketplace</a>
            </li>
            <li>
              <a href="#">Rankings</a>
            </li>
            <li>
              <a href="#">Connect a wallet</a>
            </li>
          </ul>
        </nav>
        <button type="button">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;