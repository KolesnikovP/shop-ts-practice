import React, {FC, useState} from 'react';
import logoImage from '../assets/images/fastify.svg'
import cartIcon from '../assets/images/bx-basket.svg'
import cn from 'classnames'
import {ICartItem} from '../types';

const cartItems:ICartItem[] = [
  {
    _id: 'dfa23sfd',
    imagePath: 'https://items.s1.citilink.ru/1623768_v01_b.jpg',
    name: 'Ноутбук Apple MacBook Pro 14.2',
    count: 1,
    price: 934990
  },
]
const Header: FC = () => {
  const [isShowCart, setIsShowCart] = useState(false)

  const total = cartItems.reduce((acc, item)=> acc + item.price, 0)

  const removeHandler = (id: string) => {
    console.log(id)
  }

  return (
    <div className='flex items-center
    justify-between relative
    bg-indigo-300 w-full py-1 px-3'
    style={{boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)'}}
    >
      <img src={logoImage} alt="logoImage" width='180'/>

      <button className='bg-transparent border-none' onClick={()=> setIsShowCart(!isShowCart)}>
        <img src={cartIcon} alt="cartIcon" width='55'/>
      </button>

      <div className={cn('absolute top-3 right-0 shadow-md p-5 rounded-md', {
        hidden: !isShowCart
      })}
      style={{
        top: 60
      }}
      >
        {cartItems.map(item => (

          <div className='flex items-center' key={`cart item ${item.name}`}>
            <img src={item.imagePath} alt={item.name} width='55' height='55' className='mr-3'/>
            <div className='flex-row'>
              <div>{item.name}</div>
              <div>{`${item.count} x ${item.price}rub`}</div>
              <button className='text-red-600 bg-transparent
            border-0' onClick={()=>removeHandler(item._id)}
              >
                Удалить</button>
            </div>

          </div>
        ))}

        <div className='text-lg border-solid border-t-2 border-red-200 pt-1 mt-2'>
          Total: <b>{total}rub</b>
        </div>
      </div>
    </div>
  );
};

export default Header;