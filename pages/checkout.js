import { useContext, useState, useRef } from 'react';
import CartCard from '../components/CartCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Link from 'next/link';
import { CartContext } from '../context/CartContext';
import InputField from '../components/InputField';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import imageUrl from '../utils/imageUrl';
import { Badge } from 'antd';

import {
  LocationMarkerIcon,
  UserCircleIcon,
  PhoneIcon,
  AtSymbolIcon,
} from '@heroicons/react/solid';

const Checkout = () => {
  const router = useRouter();

  const { cart } = useContext(CartContext);
  const [totalPrice] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
        <div className='flex flex-col items-center justify-center w-11/12  sm:w-2/3  lg:w-[70rem] space-y-8 '>
          <h2 className='flex flex-col items-center text-2xl sm:text-3xl text-center font-normal transition-all duration-100 ease-in-out group-hover:font-normal uppercase tracking-widest group-hover:text-grey-100 '>
            Checkout
            <hr className='bg-black h-[3px] w-6 text-center mt-2' />
          </h2>

          <div className='w-full flex flex-col mt-5 lg:flex-row lg:justify-around lg:space-x-8 '>
            <div className='w-full flex flex-col md:flex-row justify-center  md:w-10/12 space-x-8'>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='w-full md:w-7/12 flex flex-col items-center space-y-8'
              >
                <div className='relative flex flex-col w-full'>
                  <UserCircleIcon className='absolute m-auto top-0 bottom-0 ml-3 w-5 text-gray-300' />
                  <input
                    className={`p-2 pl-10 border-2 focus:bg-white outline-none border-black rounded bg-transparent`}
                    defaultValue=''
                    placeholder='Full Name'
                    {...register('name', { required: true })}
                  />
                  <p className='text-red-500'>
                    {errors.name && <span>Enter your name</span>}
                  </p>
                </div>
                <div className='relative flex flex-col w-full'>
                  <AtSymbolIcon className='absolute m-auto top-0 bottom-0 ml-3 w-5 text-gray-300' />
                  <input
                    className={`p-2 pl-10 border-2 focus:bg-white outline-none border-black rounded bg-transparent`}
                    {...register('email', { required: true })}
                    placeholder='Email'
                  />
                  <p className='text-red-500'>
                    {errors.email && <span>Enter your email</span>}
                  </p>
                </div>
                <div className='relative flex flex-col w-full'>
                  <PhoneIcon className='absolute m-auto top-0 bottom-0 ml-3 w-5 text-gray-300' />
                  <input
                    className={`p-2 pl-10 border-2 focus:bg-white outline-none border-black rounded bg-transparent`}
                    {...register('phone', { required: true })}
                    placeholder='Phone Number'
                  />
                  <p className='text-red-500'>
                    {errors.phone && <span>Enter your phone number</span>}
                  </p>
                </div>
                <div className=' w-full flex space-x-4'>
                  <div className='relative flex flex-col w-full'>
                    <LocationMarkerIcon className='absolute m-auto top-0 bottom-0 ml-2 w-6 text-gray-300' />
                    <input
                      className={`p-2 pl-10 border-2 focus:bg-white outline-none border-black rounded bg-transparent`}
                      {...register('country', { required: true })}
                      defaultValue='Rwanda'
                      placeholder='Country'
                      disabled
                    />
                    <p className='text-red-500'>
                      {errors.country && <span>Enter your address</span>}
                    </p>
                  </div>
                  <div className='relative flex flex-col w-full'>
                    <LocationMarkerIcon className='absolute m-auto top-0 bottom-0 ml-2 w-6 text-gray-300' />
                    <input
                      className={`p-2 pl-10 border-2 focus:bg-white outline-none border-black rounded bg-transparent`}
                      {...register('city', { required: true })}
                      defaultValue='Kigali City'
                      placeholder='City'
                      disabled
                    />
                    <p className='text-red-500'>
                      {errors.city && <span>Enter your address</span>}
                    </p>
                  </div>
                </div>
                <div className='relative flex flex-col w-full'>
                  <LocationMarkerIcon className='absolute m-auto top-0 bottom-0 ml-2 w-6 text-gray-300' />
                  <input
                    className={`p-2 pl-10 border-2 focus:bg-white outline-none border-black rounded bg-transparent`}
                    {...register('address', { required: true })}
                    placeholder='Address'
                  />
                  <p className='text-red-500'>
                    {errors.address && <span>Enter your address</span>}
                  </p>
                </div>

                <input
                  className='bg-black cursor-pointer  py-4 rounded text-white tracking-widest uppercase w-full text-sm mt-5'
                  type='submit'
                  value='Complete Order'
                />
              </form>
              <div className='w-full md:w-1/2'>
                {cart.length ? (
                  <div className='uppercase lg:border py-6 lg:px-6 border-black h-auto'>
                    {cart.map((product) => (
                      <div className='flex justify-between items-center text-sm font-lg my-2'>
                        <div className='flex items-center space-x-4 mb-2'>
                          <Badge count={product.quantity}>
                            <Image
                              className=' object-cover rounded-sm'
                              src={imageUrl(product.image, 'small')}
                              height='50'
                              width='45'
                            />
                          </Badge>
                          <div>
                            <p>
                              {product.title}
                              <span className='!text-xs'>[{product.size}]</span>
                            </p>
                            <p className='!text-xs'>RWF {product.price}</p>
                          </div>
                        </div>

                        <p>
                          RWF {product.price * parseInt(product.quantity, 0)}
                        </p>
                      </div>
                    ))}
                    <div className='flex justify-between text-xl font-medium'>
                      <p>total</p>
                      <p>RWF {getTotalPrice()}</p>
                    </div>
                    <button
                      onClick={() => router.push('/cart')}
                      className='bg-black  py-4 rounded text-white tracking-widest uppercase w-full text-sm mt-5'
                    >
                      Update Cart
                    </button>
                    <Link href='/products' className=''>
                      <p className='text-center mt-6 tracking-widest cursor-pointer'>
                        Continue Shopping
                      </p>
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
