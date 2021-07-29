import { useContext, useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Link from 'next/link';
import { CartContext } from '../context/CartContext';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import imageUrl from '../utils/imageUrl';
import { Badge } from 'antd';
import { postData, server } from '../utils/fetch';
import Head from 'next/head';
import currency from 'currency-formatter';

import {
  LocationMarkerIcon,
  UserCircleIcon,
  PhoneIcon,
  AtSymbolIcon,
} from '@heroicons/react/solid';

const Checkout = () => {
  const router = useRouter();
  const { cart, resetCart } = useContext(CartContext);
  const [totalPrice] = useState();

  useEffect(() => {
    if (!cart.length) {
      router.push('/products');
    }
  }, [cart]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    country: 'Rwanda',
    city: 'Kigali City',
  });

  const getTotalPrice = () => {
    return cart
      .map((c) => parseInt(c.price) * c.quantity)
      .reduce((a, b) => {
        return a + b;
      }, 0);
  };

  const orderData = cart.map(
    ({ _id, title, price, quantity, size, image }) => ({
      _id,
      title,
      price,
      quantity,
      size,
      image: imageUrl(image, 'small'),
    })
  );

  const onSubmit = async (data) => {
    try {
      const res = await postData(`${server}/orders`, {
        ...data,
        items: orderData,
      });
      resetCart();
    } catch (err) {}
  };

  return (
    <>
      {cart.length ? (
        <div>
          <Head>
            <title>Checkout | charisfashion Rwanda</title>
            <link rel='icon' href='/favicon.ico' />
            <meta
              name='description'
              content='Charisfashion fashion, cloths, dresses, and kitenge designs are the top notch and classy. Charisfashion designer is the best african fashion clothing house in Rwanda.
			  We make dresses for women, african fashion dresses, rwandan fashion design , womens clothing online, womens clothes, nigeria fashion kitenge.
			  african print, nigerian ankara,  fashion trends, Kitenge fashion, Rwanda Kitenge Dress
			  '
            />
            <meta name='robots' content='index, follow' />
          </Head>
          <Header />
          <div className='w-full bg-[#F3F3F3] py-6 sm:py-16 flex justify-center lg:px-8'>
            <div className='flex flex-col items-center justify-center w-11/12  sm:8/6  lg:w-[70rem] space-y-8 '>
              <h2 className='flex flex-col items-center text-2xl sm:text-3xl text-center font-normal transition-all duration-100 ease-in-out group-hover:font-normal uppercase tracking-widest group-hover:text-grey-100 '>
                Checkout
                <hr className='bg-black h-[3px] w-6 text-center mt-2' />
              </h2>

              <div className='w-full flex flex-col mt-5 lg:flex-row lg:justify-around lg:space-x-8'>
                <div className='w-full flex flex-col md:flex-row justify-center lg:w-10/12 md:space-x-8'>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='w-full md:w-7/12 flex flex-col items-center space-y-8'
                  >
                    {/* First Name */}
                    <div className=' w-full flex space-x-2 md:space-x-4 justify-between md:justify-center '>
                      <div className='relative flex flex-col w-1/2 sm:w-1/2'>
                        <UserCircleIcon className='absolute m-auto top-0 bottom-0 ml-2 w-5 text-gray-300' />
                        <input
                          className={`p-2 pl-10 border-2 focus:bg-white outline-none border-black rounded bg-transparent`}
                          {...register('firstname', { required: true })}
                          placeholder='First Name'
                        />
                        <p className='absolute bottom-11 text-red-500'>
                          {errors.firstname && (
                            <span>Enter your first name</span>
                          )}
                        </p>
                      </div>

                      {/* Last Name */}
                      <div className='relative flex flex-col w-1/2'>
                        <UserCircleIcon className='absolute m-auto top-0 bottom-0 ml-2 w-5 text-gray-300' />
                        <input
                          className={`w-full p-2 pl-10 border-2 focus:bg-white outline-none border-black rounded bg-transparent`}
                          {...register('lastname', { required: true })}
                          placeholder='Last Name'
                        />
                        <p className='absolute bottom-11 text-red-500'>
                          {errors.lastname && <span>Enter your last name</span>}
                        </p>
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className='relative flex flex-col w-full'>
                      <AtSymbolIcon className='absolute m-auto top-0 bottom-0 ml-3 w-5 text-gray-300' />
                      <input
                        className={`p-2 pl-10 border-2 focus:bg-white outline-none border-black rounded bg-transparent`}
                        {...register('email', { required: true })}
                        placeholder='Email'
                      />
                      <p className='absolute bottom-11 text-red-500'>
                        {errors.email && <span>Enter your email</span>}
                      </p>
                    </div>

                    {/*  Phone Number */}
                    <div className='relative flex flex-col w-full'>
                      <PhoneIcon className='absolute m-auto top-0 bottom-0 ml-3 w-5 text-gray-300' />
                      <input
                        className={`p-2 pl-10 border-2 focus:bg-white outline-none border-black rounded bg-transparent`}
                        {...register('phone', { required: true })}
                        placeholder='Phone Number'
                      />
                      <p className='absolute bottom-11 text-red-500'>
                        {errors.phone && <span>Enter your phone number</span>}
                      </p>
                    </div>

                    {/*   Location */}
                    <div className=' w-full flex space-x-2 md:space-x-4 justify-between md:justify-center '>
                      {/*   Country */}
                      <div className='relative flex flex-col w-1/2 sm:w-1/2'>
                        <LocationMarkerIcon className='absolute m-auto top-0 bottom-0 ml-2 w-5 text-gray-300' />
                        <input
                          placeholder='Country'
                          className={`p-2 pl-10 border-2 focus:bg-white outline-none border-black rounded bg-transparent`}
                          {...register('country', { required: true })}
                        />
                        {/* <p className='absolute bottom-11 text-red-500'>
					{errors.country && <span>Enter your address</span>}
				  </p> */}
                      </div>

                      {/*   City */}
                      <div className='relative flex flex-col w-1/2'>
                        <LocationMarkerIcon className='absolute m-auto top-0 bottom-0 ml-2 w-5 text-gray-300' />
                        <input
                          className={`w-full p-2 pl-10 border-2 focus:bg-white outline-none border-black rounded bg-transparent`}
                          {...register('city', { required: true })}
                          placeholder='City'
                        />
                        {/* <p className='absolute bottom-11 text-red-500'>
					{errors.city && <span>Enter your address</span>}
				  </p> */}
                      </div>
                    </div>

                    {/*   Address */}
                    <div className='relative flex flex-col w-full'>
                      <LocationMarkerIcon className='absolute m-auto top-0 bottom-0 ml-2 w-5 text-gray-300' />
                      <input
                        className={`w-full p-2 pl-10 border-2 focus:bg-white outline-none border-black rounded bg-transparent`}
                        {...register('address', { required: true })}
                        placeholder='Address'
                      />
                      <p className='absolute bottom-11 text-red-500'>
                        {errors.address && <span>Enter your address</span>}
                      </p>
                    </div>

                    <input
                      className='bg-black cursor-pointer  py-4 rounded text-white tracking-widest uppercase w-full text-sm mt-5'
                      type='submit'
                      value='Complete Order'
                    />
                  </form>

                  <div className='w-full md:w-1/2 mt-10 md:mt-0'>
                    {cart.length ? (
                      <div className='relative w-full uppercase border border-black p-6 lg:px-6 '>
                        {cart.map((product, key) => (
                          <div
                            key={key}
                            className='flex justify-between items-center text-sm font-lg my-2'
                          >
                            <div className='flex items-center space-x-4 mb-2'>
                              <Badge count={product.quantity}>
                                <Image
                                  className=' object-cover rounded-sm'
                                  src={imageUrl(product.image, 'small')}
                                  height='50'
                                  width='45'
                                  alt={product.title}
                                />
                              </Badge>
                              <div>
                                <p>
                                  {product.title}
                                  <span className='!text-xs'>
                                    [{product.size}]
                                  </span>
                                </p>
                                <p className='!text-xs'>
                                  {`RWF 
                                  ${currency.format(product.price, {
                                    code: '',
                                    precision: 0,
                                  })}
                                  `}
                                </p>
                              </div>
                            </div>

                            <p>
                              {`RWF 
                                  ${currency.format(
                                    product.price *
                                      parseInt(product.quantity, 0),
                                    {
                                      code: '',
                                      precision: 0,
                                    }
                                  )}
                                  `}
                            </p>
                          </div>
                        ))}
                        <div className='flex justify-between text-xl font-medium'>
                          <p>total</p>
                          <p>
                            {' '}
                            {`RWF 
                                  ${currency.format(getTotalPrice(), {
                                    code: '',
                                    precision: 0,
                                  })}
                                  `}
                          </p>
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
      ) : null}
    </>
  );
};

export default Checkout;
