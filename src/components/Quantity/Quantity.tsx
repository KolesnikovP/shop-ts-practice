import React, {useState} from 'react';
import {FC} from "react";

const Quantity:FC = () => {
  const [count, setCount] = useState(1)

  return (
    <div className='flex items-center justify-center my-2'>
      <button onClick={()=> count > 0 &&  setCount(count-1)}>-</button>
      <input type="number" className='mx-2' onChange={e=> setCount(+e.target.value)} value={count}/>
      <button onClick={()=> count < 0 && setCount(count+1) }>+</button>
    </div>
  );
};

export default Quantity;