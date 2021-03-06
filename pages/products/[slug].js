import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { CartContext } from '../../context/CartContext';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { Select, Radio, InputNumber, Carousel } from 'antd';
import imageUrl from '../../utils/imageUrl';
import { server } from '../../utils/fetch';
import currency from 'currency-formatter';

const Product = ({ products, product }) => {
  const router = useRouter();

  const { addToCart } = useContext(CartContext);
  const image = imageUrl(product?.image, 'medium');

  const { Option } = Select;
  const [size, setSize] = useState('S');
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const handleAddToCart = () => {
    addToCart({ ...product, size, quantity });
    router.push('/cart');
  };

  return (
    <Layout>
      <div className='flex flex-col items-center w-full'>
        <Head>
          <title>Products | charisfashion</title>
          <link rel='icon' href='/favicon.ico' />

          <meta name='robots' content='index, follow' />
        </Head>

        <Header />
        <div className='w-full flex flex-col px-4 py-2 md:py-8 border-t-2 border-b-2 border-black xl:w-[960px] justify-center items-center'>
          <h2 className='text-lg tracking-widest uppercase'>{product.title}</h2>
        </div>
        <div className='w-full xl:w-[960px] p-4 flex flex-col-reverse md:flex-row bg-[#F3F3F3] md:py-20  justify-center sm:space-x-12'>
          {/* Left Card */}
          <div className='flex flex-col  uppercase items-center w-full md:w-4/12 '>
            <div className='flex flex-col items-center mb-0'>
              <h2 className=' hidden md:block text-lg mb-2'>{product.title}</h2>
              <hr className='hidden md:block bg-black h-[3px] w-6 text-center mb-2' />
              <p className='text-xl mt-4 md:mt-0'>
                {`RWF ${currency.format(product.price, {
                  code: '',
                  precision: 0,
                })}`}
              </p>
            </div>
            <div className='flex items-center my-4'>
              <Radio.Group value={size} onChange={handleSizeChange}>
                <Radio.Button value='S'>S</Radio.Button>
                <Radio.Button value='M'>M</Radio.Button>
                <Radio.Button value='L'>L</Radio.Button>
                <Radio.Button value='XL'>XL</Radio.Button>
              </Radio.Group>
            </div>
            <div className='flex space-x-2 items-center'>
              <p>Quantity:</p>
              <InputNumber
                className='text-center w-16 '
                min={1}
                max={10}
                defaultValue={quantity}
                onChange={handleQuantityChange}
              />
            </div>
            <p className='mt-4 font-medium'>
              {/* Subtotal: {`${parseInt(product.price) * quantity} RWF`} */}
              {`Subtotal:  RWF ${currency.format(
                parseInt(product.price) * quantity,
                {
                  code: '',
                  precision: 0,
                }
              )}`}
            </p>

            <button
              className='bg-black m-1  p-3 rounded text-white tracking-widest uppercase w-full text-sm mt-5'
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>

            <p className='text-center mt-6 tracking-widest'>
              <Link href='/products'>Continue Shopping</Link>
            </p>
          </div>

          {/* Right Card */}
          <div className=' w-full flex justify-center md:w-6/12'>
            {product.slides && product.slides.length ? (
              <div className='relative w-full'>
                <Carousel autoplay>
                  {product.slides.map((slide) => (
                    <Image
                      className=' object-contain'
                      className=' object-cover '
                      src={imageUrl(slide, 'medium')}
                      height='500'
                      width='400'
                      alt={product.title}
                    />
                  ))}
                </Carousel>
              </div>
            ) : (
              <Image
                className=' object-contain'
                className=' object-cover '
                src={image}
                height='500'
                width='400'
                alt={product.title}
              />
            )}
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  );
};

export default Product;

export async function getStaticProps({ params }) {
  const { slug } = params;
  const products = await fetch(`${server}/products`).then((data) =>
    data.json()
  );
  const product = products.find((product) => product.slug === slug);
  if (!products) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      products,
      product,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const products = await fetch(`${server}/products`).then((product) =>
    product.json()
  );
  const paths = products.map((product) => {
    return {
      params: {
        slug: product.slug,
      },
    };
  });
  return { paths, fallback: false };
}
