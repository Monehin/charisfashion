import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const NavBar = () => {
  const { cart } = useContext(CartContext);
  return (
    <nav className='flex tracking-widest space-x-10 mt-10 text-sm sm:text-base lg:text-lg  border-b-2 border-black pb-5'>
      <Link href='/products' od>
        PRODUCTS
      </Link>
      <Link href='/contact'>CONTACT</Link>
      <Link href='/cart'>{cart.length ? `CART(${cart.length})` : 'CART'}</Link>
    </nav>
  );
};

export default NavBar;
