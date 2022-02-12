import React, {useEffect, useState} from 'react';
import thumbNail from '../images/image-product-1-thumbnail.jpg'
import DelIcon from '../images/icon-delete.svg'


const CartItem = ({ count, setCounter, shoeDetails, delCartItem }) => {
  const [shoeD, setShoeD] = useState(shoeDetails)
  const finalCheck = () => {
    setCounter(0)

  };

  useEffect(() => {
    console.log(shoeD)
  }, [shoeD])

  const deleteItem = (id) => {
    const delIndex = shoeDetails.filter((item) => item.id !== id)

    setShoeD(delIndex)

    // if(delIndex > -1) {
    //   const letShoe = shoeDetails.slice(delIndex, 1)
    //   console.log(shoeDetails)
    //   setShoeD(letShoe)
    // }
  }

  return <div className='absolute z-50 left-4 right-8 md:right-20 bg-White md:left-[650px] lg:left-[750px] p-5 shadow max-w-full md-w-64 divide-y'>
    <h2 className=''>Cart</h2>
    {count > 0 ? shoeD?.map((e) => {
      return <>
      <div className='flex flex-col justify-between p-2' key={e?.id}>
        <div className='flex justify'>
          <img className='h-16 w-12 rounded p-1' src={thumbNail} alt="" />
          <div className="text-Grayishblue">
            <p>{e?.name}</p>
            <p>{e?.discount / 100 * e?.price} x {count} <span>{(e?.discount / 100 * e.price) * count}</span> <span>{'$'}</span></p>
          </div>
          <div className='flex justify-center items-center p-1'>
            <button onClick={() => deleteItem(e.id)} >
              <img src={DelIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
       </>

    }) : <div className='flex justify-center items-center p-16
        '><p className='text-center max-w-full'>Your Cart is Empty</p></div>}
  </div>;
};

export default CartItem;
