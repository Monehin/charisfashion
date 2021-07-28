import Footer from '../components/Footer';
import Header from '../components/Header';
import InputField from '../components/InputField';
import Head from 'next/head';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Us | charisfashion Rwanda</title>
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
      <div className='w-full bg-[#F3F3F3] py-20 flex justify-center'>
        <form className='flex flex-col items-center justify-center w-11/12  sm:w-2/3 md:w-6/12 lg:w-2/5 space-y-8 '>
          <h2 className='flex flex-col items-center text-2xl sm:text-3xl text-center font-normal transition-all duration-100 ease-in-out group-hover:font-normal uppercase tracking-widest group-hover:text-grey-100 '>
            Contact
            <hr className='bg-black h-[3px] w-6 text-center mt-2' />
          </h2>
          <InputField type='text' label='Name' placeholder='Name' />
          <InputField type='text' label='Email' placeholder='Email' />
          <InputField type='text' label='Subject' placeholder='Subject' />
          <InputField type='textarea' label='Message' placeholder='Name' />
          <div className='w-full flex mt-5'>
            <button className='bg-black  py-4 rounded text-white tracking-widest uppercase w-full text-sm mt-5'>
              Send Message
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
