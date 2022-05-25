import React, {FC, useState} from 'react';
import logoImage from '../assets/images/fastify.svg'
import cn from 'classnames'
import {ICartItem} from '../types';

const cartItems:ICartItem[] = [
  {
    imagePath: 'https://items.s1.citilink.ru/1623768_v01_b.jpg',
    name: 'Ноутбук Apple MacBook Pro 14.2',
    count: 1,
    price: 934990
  },
]
const Header: FC = () => {
  const [isShowCart, setIsShowCart] = useState(false)

  return (
    <div className='flex items-center content-between'>
      <img src={logoImage} alt="logoImage"/>

      <div className={cn('absolute top-3 right-0 hidden', {
        block: isShowCart
      })}>
        {cartItems.map(item => (

          <div className='flex items-center'>
            <img src={item.imagePath} alt={item.name} width='55' height='55' className='mr-3'/>
            <div>{item.name}</div>
            <div>{`${item.count} x ${item.price}`}</div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Header;