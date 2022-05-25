import React from 'react';
import {IProduct} from '../types'
import {FC} from "react";

const products:IProduct[] = [
  {
    _id: 'dsfas',
    imagePath: 'https://items.s1.citilink.ru/1635728_v01_b.jpg',
    name: 'Ноутбук Lenovo ThinkPad P1 Gen 4',
    price: 715990,
    count: 1,
  },
  {
    _id: 'dfas',
    imagePath: 'https://items.s1.citilink.ru/1717652_v01_b.jpg',
    name: 'Ноутбук HP Omen 17-ck0045ur',
    price: 480000,
    count: 1,
  },
  {
    _id: 'dfsafd',
    imagePath: 'https://items.s1.citilink.ru/1624156_v01_b.jpg',
    name: 'Ноутбук Apple MacBook Pro 16.2',
    price: 489990,
    count: 1,
  },
  {
    _id: 'fdasfasf',
    imagePath: 'https://items.s1.citilink.ru/1624335_v01_b.jpg',
    name: 'Ноутбук Apple MacBook Pro 14.2',
    price: 358390,
    count: 1,
  },
]

const Products: FC = () => {
  return (
    <div className='mt-4'>

      {products.map(product => (

      ))}

    </div>
  );
};

export default Products;