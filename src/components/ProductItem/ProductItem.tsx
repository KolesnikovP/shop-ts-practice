import React, {FC} from 'react';
import {IProduct} from '../../types';

interface IProductItem {
  product: IProduct
}

const ProductItem: FC<IProductItem> = ({product}) => {

  const addHandler = () => {

  }

  return (
    <div className='shadow-sm rounded-md'>
      <img src={product.imagePath} alt={product.name}/>
      <div className='text-lg'>{product.name}</div>
      <div className='text-sm text-gray-600'>{product.price}</div>
      <button onClick={()=> addHandler()}>В корзину</button>
    </div>
  );
};

export default ProductItem;