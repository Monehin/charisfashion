import { useState } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Products from '../../components/Products';

import { server } from '../../utils/fetch';

const index = ({ products, collections }) => {
  const [productList, setProducts] = useState(products);

  const setProductByCollection = (products) => {
    setProducts(products);
  };

  return (
    <Layout>
      <div className='flex flex-col items-center w-full'>
        <Head>
          <title>Products | charisfashion Rwanda</title>
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

        <div className='w-full flex flex-col px-4 py-8 border-t-2 border-b-2 border-black xl:w-[960px] justify-center items-center'>
          <h2 className='text-lg tracking-widest uppercase'>Products</h2>
          <div className='flex w-full space-x-3 mt-4 text-base sm:text-lg tracking-widest flex-wrap justify-center'>
            <h2
              className=' cursor-pointer'
              onClick={() => setProductByCollection(products)}
            >
              All
            </h2>
            {collections && collections.length
              ? collections.map((collection, key) => (
                  <h2
                    className=' cursor-pointer'
                    key={key}
                    onClick={() => setProductByCollection(collection.products)}
                  >
                    <span className='mr-2'>/</span> {collection.name}
                  </h2>
                ))
              : null}
          </div>
        </div>

        <Products products={productList} />

        <Footer />
      </div>
    </Layout>
  );
};

export default index;

export async function getStaticProps() {
  try {
    const [products, collections] = await Promise.all([
      fetch(`${server}/products`).then((data) => data.json()),
      fetch(`${server}/collections`).then((data) => data.json()),
    ]);

    if (!products || !collections) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        products,
        collections,
      },
      revalidate: 5,
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
