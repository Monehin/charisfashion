import React, { useState } from 'react';
import { Modal } from 'antd';

const OrderComfirmationModal = () => {
  return (
    <div className='text-lg'>
      <p className='text-base font-medium tracking-widest'>
        Thank you for shopping with Charisfashion ❤️
      </p>
      <br />
      <p>
        An agent from charisfashion will reachout to you shortly to verify your
        order and payment details
      </p>
    </div>
  );
};

export default OrderComfirmationModal;
