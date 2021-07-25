import { useContext, useState } from 'react';
import Image from 'next/image';
import { CloseCircleOutlined } from '@ant-design/icons';
import imageUrl from '../utils/imageUrl';
import { CartContext } from '../context/CartContext';
import { useRouter } from 'next/router';
import { InputNumber } from 'antd';
import Product from '../pages/products/[slug]';

const CartCard = ({ cart }) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(cart.quantity);
  const { removeFromCart, updateCartQuantity } = useContext(CartContext);
  const image = imageUrl(cart.image, 'small');

  const handleRemoveFromCart = () => {
    removeFromCart(cart);
  };

  const handleQuantityChange = (value) => {
    updateCartQuantity({ ...cart, quantity: value });
  };

  return (
    <div className='w-full flex border-black border-t items-center  justify-between last:border-b  py-8'>
      <div
        className='flex flex-1 items-center cursor-pointer group'
        onClick={() => router.push(`/products/${cart.slug}`)}
      >
        <Image
          className=' object-cover rounded-sm'
          src={image}
          height='100'
          width='70'
        />
        <div className='mx-2 tracking-widest '>
          <h2 className='text-lg sm:text-xl'>
            {cart.title} [{cart.size}]
          </h2>
          <h3 className='text-base sm:text-base'>{cart.price} RWF</h3>
          <button
            onClick={handleRemoveFromCart}
            className='text-sm uppercase tracking-widest text-purple-900 underline sm:hidden'
          >
            Remove
          </button>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-center items-center items sm:space-x-6'>
        <InputNumber
          className='text-center w-16 sm:p-2'
          min={1}
          max={10}
          defaultValue={quantity}
          onChange={handleQuantityChange}
        />

        <h3 className='text-base sm:text-lg mt-2 tracking-widest'>
          {cart.quantity * parseInt(cart.price)} RWF
        </h3>

        <div className='hidden sm:block'>
          <CloseCircleOutlined
            onClick={handleRemoveFromCart}
            className='w-6 m-2 text-xl font-extralight transition transform hover:scale-125 cursor-pointer '
          />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
