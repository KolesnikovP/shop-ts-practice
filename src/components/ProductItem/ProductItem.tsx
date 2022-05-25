import React, {FC} from 'react';
import {IProduct} from '../../types';
import Quantity from '../Quantity/Quantity';

interface IProductItem {
  product: IProduct
}

const ProductItem: FC<IProductItem> = ({product}) => {

  const addHandler = () => {
    console.log(product._id)
  }

  return (
    <div className='shadow-sm rounded-md p-5 w-4/5 mx-auto mt-7 bg-white flex-col justify-center
    text-center items-center overflow-hidden'>
      <img src={product.imagePath} alt={product.name} className='mx-auto w-full'/>
      <div className='text-lg font-bold my-2'>{product.name}</div>
      <div className='text-sm text-gray-600'>{product.price}rub</div>
      <Quantity/>
      <button className='bg-indigo-400 text-white rounded-sm px-3 py-1' onClick={()=> addHandler()}>В корзину</button>
    </div>
  );
};

export default ProductItem;