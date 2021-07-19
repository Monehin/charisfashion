import Image from 'next/image';

const Slider = () => {
  return (
    <div className='relative flex items-center justify-center '>
      <Image
        className=' object-contain'
        className=' object-cover !rounded-lg'
        src='/bj1.jpeg'
        height='600'
        width='1200'
      />
    </div>
  );
};

export default Slider;
