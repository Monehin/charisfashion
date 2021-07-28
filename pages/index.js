import Head from 'next/head';
import NavBar from '../components/NavBar';
import Logo from '../components/Logo';
import Slider from '../components/Slider';
import Products from '../components/Products';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Home({ products, slides }) {
  return (
    <Layout>
      <div className='flex flex-col items-center w-full'>
        <Head>
          <title>Home | charisfashion</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <NavBar />

        <Logo />
        {slides.images.length ? <Slider images={slides.images} /> : null}

        {products.length ? (
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
      fetch(`${BASE_URL}products`).then((data) => data.json()),
      fetch(`${BASE_URL}slides`).then((data) => data.json()),
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
