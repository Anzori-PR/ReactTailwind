import React, { useState } from 'react';
import './App.css';
import Header from './WorkSpace/header/header';
import Menu from './WorkSpace/menu/menu';
import Search from './WorkSpace/search/search';
import Hero from './WorkSpace/hero/hero';
import Hero2 from './WorkSpace/hero/hero2';
import Footer from './WorkSpace/footer/footer';
import Registration from './WorkSpace/registration/registration';

function App() {
  const [isRegistrationOpen, setRegistrationOpen] = useState(false);

  const openRegistration = () => {
    setRegistrationOpen(true);
  };

  const closeRegistration = () => {
    setRegistrationOpen(false);
  };

  return (
    <div>
      <Header openRegistration={openRegistration} />
      <Menu />
      <Search />
      <Hero />
      <Hero2 />
      <Footer />
      {isRegistrationOpen && (
        <Registration onClose={closeRegistration} />
      )}
    </div>
  );
}

export default App;
