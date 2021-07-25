import 'antd/dist/antd.css';
import 'tailwindcss/tailwind.css';
import CartContextProvider from '../context/CartContext';

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  );
}

export default MyApp;
