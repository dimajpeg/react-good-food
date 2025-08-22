import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header.jsx'; 
import Hero from './components/Hero/Hero.jsx';
import Trending from './components/Trending/Trending.jsx';
import TopCreators from './components/TopCreators/TopCreators.jsx';
import Categories from './components/Categories/Categories.jsx';
import Discover from './components/Discover/Discover.jsx';
import Promo from './components/Promo/Promo.jsx';
import GetStarted from './components/GetStarted/GetStarted.jsx';
import Subscribe from './components/Subscribe/Subscribe.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  const [data, setData] = useState({});
  const{trending, creators, categories, discover, promo, footer} = data
  
  useEffect( () => {
      fetch('data.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Trending data={trending}/>
      <TopCreators data={creators}/>
      <Categories data={categories}/>
      <Discover data={discover}/>
      <Promo data={promo}/>
      <GetStarted />
      <Subscribe />
      <Footer data={footer}/>
    </div>
  );
}

export default App;