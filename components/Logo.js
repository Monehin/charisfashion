import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href='/'
      className='flex mx-2 sm:my-10 w-full items-center justify-center cursor-pointer'
    >
      <Image
        className='object-contain !p-6 cursor-pointer'
        src='/charisfashion-logo.png'
        height='200'
        width='300'
      />
    </Link>
  );
};

export default Logo;
