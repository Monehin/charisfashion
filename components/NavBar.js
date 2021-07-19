import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='flex tracking-widest space-x-10 mt-10 text-sm sm:text-base lg:text-xl  border-b-2 border-black pb-5'>
      <Link href='/products' od>
        PRODUCTS
      </Link>
      <Link href='/contact'>CONTACT</Link>
      <Link href='/cart'>CART</Link>
    </nav>
  );
};

export default NavBar;
