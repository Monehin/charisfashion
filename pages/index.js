import Head from 'next/head';
import NavBar from '../components/NavBar';
import Logo from '../components/Logo';
import Slider from '../components/Slider';
import Products from '../components/Products';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import { server } from '../utils/fetch';

export default function Home({ products, slides }) {
  return (
    <Layout>
      <div className='flex flex-col items-center w-full'>
        <Head>
          <title>Home | charisfashion Rwanda</title>
          <link rel='icon' href='/favicon.ico' />
          <meta name='robots' content='index, follow' />

          <meta
            name='description'
            content='Charisfashion fashion, cloths, dresses, and kitenge designs are the top notch and classy. Charisfashion designer is the best african fashion clothing house in Rwanda.
            We make dresses for women, african fashion dresses, rwandan fashion design , womens clothing online, womens clothes, nigeria fashion kitenge.
            african print, nigerian ankara,  fashion trends, Kitenge fashion, Rwanda Kitenge Dress
            '
          />
          <meta name='robots' content='index, follow' />
        </Head>

        <NavBar />

        <Logo />
        {slides.images && slides.images.length ? (
          <Slider images={slides.images} />
        ) : null}

        {products && products.length ? (
          <Products products={products} />
        ) : (
          <h1 className='text-2xl uppercase animate-bounce my-20'>
            New Designs Coming Soon!!!
          </h1>
        )}

        <Footer />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const [products, slides] = await Promise.all([
      fetch(`${server}/products`).then((data) => data.json()),
      fetch(`${server}/slides`).then((data) => data.json()),
    ]);

    if (!products || !slides) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        products,
        slides,
      },
      revalidate: 10,
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
