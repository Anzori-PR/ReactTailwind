import React, { useState } from 'react';
import './App.css';
import Header from './WorkSpace/header/header';
import Menu from './WorkSpace/menu/menu';
import Search from './WorkSpace/search/search';
import Hero from './WorkSpace/hero/hero';
import Hero2 from './WorkSpace/hero/hero2';
import Footer from './WorkSpace/footer/footer';

function App() {
  return (
    <div>
      <Header/>
      <Menu />
      <Search />
      <Hero />
      <Hero2 />
      <Footer />

    </div>
  );
}

export default App;
