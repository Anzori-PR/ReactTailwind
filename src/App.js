import React, { useState } from 'react';
import './App.css';
import Header from './WorkSpace/header/header';
import Menu from './WorkSpace/menu/menu';
import Search from './WorkSpace/search/search';
import Hero from './WorkSpace/hero/hero';
import Hero2 from './WorkSpace/hero/hero2';
import Footer from './WorkSpace/footer/footer';
import Registration from './WorkSpace/registration/registration';
import Signin from './WorkSpace/registration/Signin';

function App() {
  const [isRegistrationOpen, setRegistrationOpen] = useState(false);
  const [isSigninOpen, setSigninOpen] = useState(false);

  const openRegistration = () => {
    setRegistrationOpen(true);
  };

  const closeRegistration = () => {
    setRegistrationOpen(false);
  };

  const openSignin = () => {
    setSigninOpen(true);
  };

  const closeSignin = () => {
    setSigninOpen(false);
  };

  return (
    <div>
      <Header openRegistration={openRegistration} openSignin={openSignin} />
      <Menu />
      <Search />
      <Hero />
      <Hero2 />
      <Footer />
      {isRegistrationOpen && <Registration onClose={closeRegistration} openSignin={openSignin}/>}
      {isSigninOpen && <Signin onClose={closeSignin} openRegistration={openRegistration}/>}
    </div>
  );
}

export default App;
