import Image from 'next/image';
import Link from 'next/link';
import imageUrl from '../utils/imageUrl';
import currency from 'currency-formatter';

const ProductCard = ({ product }) => {
  const image = imageUrl(product.image, 'small');
  return (
    <Link href={`/products/${product.slug}`}>
      <div className='group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
        <Image
          className=' object-cover rounded-sm'
          src={image}
          height='350'
          width='300'
          alt={product.title}
        />
        <div className=''>
          <h2 className='text-sm  font-meduim  group-hover:text-[#1890ff] text-center transition-all duration-100 ease-in-out group-hover:font-normal uppercase tracking-widest group-hover:text-grey-100 '>
            {product.title}
          </h2>
          <div className='my-2 flex justify-center'>
            <hr className=' border-black w-5 text-center' />
          </div>
          <p className='max-w-md text-center text-sm font-normal  group-hover:text-[#1890ff]  uppercase tracking-widest group-hover:font-normal'>
            {`RWF ${currency.format(product.price, {
              code: '',
              precision: 0,
            })}`}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
