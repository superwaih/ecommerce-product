import React from 'react';
import ProductDetails from './productDetails';
import ProductSlide from './productSlide';


function Product({count, setCounter, CounterDec, CounterInc, finalCheckout}) {
  
  return <div className='flex flex-col md:flex-row mt-5 p-10'>
      <ProductSlide/>
      <ProductDetails count={count} finalCheckout={finalCheckout} setCounter={setCounter} CounterDec={CounterDec} CounterInc={CounterInc}
      />
  </div>;
}

export default Product;
