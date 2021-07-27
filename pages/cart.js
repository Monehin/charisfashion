import { useContext, useState } from 'react';
import CartCard from '../components/CartCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Link from 'next/link';
import { CartContext } from '../context/CartContext';
import { useRouter } from 'next/router';

const Cart = () => {
  const router = useRouter();
  const { cart } = useContext(CartContext);

  const getTotalPrice = () => {
    return cart
      .map((c) => parseInt(c.price) * c.quantity)
      .reduce((a, b) => {
        return a + b;
      }, 0);
  };
  return (
    <div>
      <Header />
      <div className='w-full bg-[#F3F3F3] py-6 sm:py-16 flex justify-center lg:px-8'>
        <div className='flex flex-col items-center justify-center w-11/12  sm:w-2/3 lg:w-[70rem] space-y-8 '>
          <h2 className='flex flex-col items-center text-2xl sm:text-3xl text-center font-normal transition-all duration-100 ease-in-out group-hover:font-normal uppercase tracking-widest group-hover:text-grey-100 '>
            Cart
            <hr className='bg-black h-[3px] w-6 text-center mt-2' />
          </h2>

          <div className='w-full flex flex-col mt-5 lg:flex-row lg:justify-around lg:space-x-8'>
            <div className='w-full lg:w-3/4'>
              {cart.length ? (
                cart.map((cart, key) => <CartCard key={key} cart={cart} />)
              ) : (
                <div className='flex text-center text-xl justify-center tracking-widest'>
                  <p className=' '>
                    Your cart is empty! Sounds like a good time to&nbsp;
                    <span className='underline'>
                      <Link href='/products'>start shopping</Link>
                    </span>
                    .
                  </p>
                </div>
              )}
            </div>
            {cart.length ? (
              <div className='w-full lg:w-80'>
                <div className='uppercase lg:border py-6 lg:px-6 border-black h-auto'>
                  <div className='flex justify-between text-xl font-medium'>
                    <p>Subtotal</p>
                    <p>{getTotalPrice()} RWF</p>
                  </div>
                  <button
                    onClick={() => router.push('./checkout')}
                    className='bg-black  py-4 rounded text-white tracking-widest uppercase w-full text-sm mt-5'
                  >
                    Checkout
                  </button>
                  <Link href='/products' className=''>
                    <p className='text-center mt-6 tracking-widest cursor-pointer'>
                      Continue Shopping
                    </p>
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
