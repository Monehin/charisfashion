import Image from 'next/image';

const ProductCard = () => {
  return (
    <div className='group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
      <Image
        className=' object-cover rounded-sm'
        src='https://assets.bigcartel.com/product_images/310586421/Top4.jpeg?auto=format&fit=max&w=650'
        height='350'
        width='300'
      />
      <div className=''>
        <h2 className='text-base sm:text-xl text-center font-light transition-all duration-100 ease-in-out group-hover:font-normal uppercase tracking-widest group-hover:text-grey-100 '>
          Charis Classy
        </h2>
        <div className='my-2 flex justify-center'>
          <hr className=' border-black w-5 text-center' />
        </div>
        <p className='max-w-md text-center text-sm sm:text-base font-thin uppercase tracking-widest group-hover:font-normal'>
          12,000.00 RWF
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
