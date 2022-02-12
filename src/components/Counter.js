import {React, useState} from 'react';
import Cart from '../images/icon-cart.svg'

function Counter({count, setCounter, CounterDec, CounterInc}) {
    
    

  return <div className='flex max-w-full flex-col md:flex-row space-y-3 md:space-y-0 h-8 text-center'>
        <div className='rounded max-w-full md:w-2/5  flex justify-evenly items-center shadow h-10 bg-Lightgrayishblue font-bold text-center'>
            <button className='text-Orange text-4xl active:text-Paleorange' onClick={CounterDec}>-</button>
            <span className='' >{count}</span>
            <button className=' text-Orange text-3xl' onClick={CounterInc} >+</button>
        </div>
        <div className='md:ml-5 max-w-full h-10 text-center cursor-pointer active:bg-Paleorange  shadow p-2 md:w-3/5 bg-Orange rounded'>
            <button className='text-White hover:bg-red cursor-pointer font-bold font-press-start'>Add to cart </button>
        </div>
  </div>;
}

export default Counter;

