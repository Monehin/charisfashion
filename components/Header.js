import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';

const Header = () => {
  return (
    <div className='flex flex-col  items-center'>
      <NavBar />
      <Logo />
    </div>
  );
};

export default Header;
