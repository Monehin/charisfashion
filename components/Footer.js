import Link from 'next/link';
import { InboxIcon, PhoneIcon } from '@heroicons/react/outline';
import {
  InstagramFilled,
  FacebookFilled,
  TwitterOutlined,
} from '@ant-design/icons';
const Footer = () => {
  return (
    <div className='flex flex-col my-10 w-full'>
      <nav className='flex justify-center tracking-widest space-x-6 sm:space-x-8 mt-10 text-xs sm:text-sm '>
        <Link href='/'>HOME</Link>
        <Link href='/products'>PRODUCTS</Link>
        <Link href='/contact'>CONTACT</Link>
        <Link href='/cart'>CART</Link>
      </nav>
      <div className='flex mt-4 justify-center gap-10'>
        <a target='_blank' href='http://www.instagram.com/charisfashiondesign'>
          <InstagramFilled className='text-2xl transition transform hover:scale-125' />
        </a>
        <a target='_blank' href='http://www.instagram.com/charisfashiondesign'>
          <FacebookFilled className='text-2xl transition transform hover:scale-125' />
        </a>
        <a target='_blank' href='http://www.instagram.com/charisfashiondesign'>
          <TwitterOutlined className='text-2xl transition transform hover:scale-125' />
        </a>
      </div>
      <h1 className='flex flex-col sm:flex-row text-center mt-6 tracking-widest  items-center justify-center gap-3'>
        <div className='flex items-center justify-center'>
          <InboxIcon className='w-6 m-2' />
          <p className='text-xs sm:text-base font-medium sm:font-normal'>
            info@charisfashion.com
          </p>
        </div>
        <div className='flex items-center justify-center'>
          <PhoneIcon className='w-6 m-2' />
          <p className='text-xs sm:text-base font-medium sm:font-normal'>
            +250787994853
          </p>
        </div>
      </h1>
      <h2 className='text-center mt-6 tracking-widest uppercase'>©2021</h2>
    </div>
  );
};

export default Footer;
