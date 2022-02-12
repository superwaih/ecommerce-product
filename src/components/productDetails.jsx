import {React, useState} from 'react';
import Counter from './Counter';

function ProductDetails({count, setCounter, CounterDec, CounterInc}) {

  
  
  return <div className='md:w-1/2 max-w-full flex flex-col md:space-y-10 md:p-10 font-press-start'>
      <div className="details">
      <h1 className='text-Orange font-bold mb-3'>SNEAKERS COMPANY</h1>
      <h2 className='font-bold text-2xl md:text-6xl leading-12 mb-5 leading-12'>Fall Limited Edition Sneakers</h2>

      <p className='text-Grayish font-medium max-w-full text-align leading-8 mb-3 md:w-4/5 '>These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
      </div>

      <div className="price mb-2 w-4/5">
          <p className='font-bold text-xl max-w-full flex justify-between'>$125.00 <span className='h-min w-min text-Orange bg-Paleorange text-center rounded '>50%</span> </p>
          <p className='text-Grayishblue line-through'>$250</p>
      </div>
      <Counter count={count} setCounter={setCounter} CounterDec={CounterDec} CounterInc={CounterInc} />
    
  </div>;
}

export default ProductDetails;
