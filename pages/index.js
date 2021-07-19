import Head from 'next/head';
import NavBar from '../components/NavBar';
import Logo from '../components/Logo';
import Slider from '../components/Slider';
import Products from '../components/Products';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className='flex flex-col items-center w-full'>
        <Head>
          <title>Home | charisfashion</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <NavBar />

        <Logo />

        <Slider />

        <Products />

        <Footer />
      </div>
    </Layout>
  );
}
