import React, {FC, useState} from 'react';
import logoImage from '../assets/images/fastify.svg'
import cartIcon from '../assets/images/bx-basket.svg'
import cn from 'classnames'

import {useTypedSelector} from './hooks/useTypedSelector';
import {useDispatch} from 'react-redux';
import {removeFromCart} from '../store/cart/actions';


const Header: FC = () => {
  const [isShowCart, setIsShowCart] = useState(false)
  const cart = useTypedSelector(state => state.cart)

  const total = cart.reduce((acc, item)=> acc + item.price, 0)

  const dispatch = useDispatch()

  const removeHandler = (id: string) => {
    dispatch(removeFromCart(id))
  }


  return (
    <div className='flex items-center
    justify-between relative
    bg-indigo-300 w-full py-1 px-3'
    style={{boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)'}}
    >
      <img src={logoImage} alt="logoImage" width='180'/>

      <button className='bg-transparent border-none relative' onClick={()=> setIsShowCart(!isShowCart)}>
        <img src={cartIcon} alt="cartIcon" width='55'/>

        <div className='text-red-600 absolute bottom-0 right-1 font-bold
        p-2 rounded-full bg-white w-6 h-6 flex items-center content-center'>{cart.length}</div>
      </button>

      <div className={cn('bg-white absolute top-3 right-0 shadow-md p-5 rounded-md', {
        hidden: !isShowCart
      })}
      style={{
        top: 60
      }}
      >
        {cart.map(item => (

          <div className='flex items-center mb-4' key={`cart item ${item.name}`}>
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
          Total: <b>{total.toLocaleString()}rub</b>
        </div>
      </div>
    </div>
  );
};

export default Header;