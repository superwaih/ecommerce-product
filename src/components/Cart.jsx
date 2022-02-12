import React from 'react';
import CartItem from './CartItem';


function CartModal({showModal, finalCheckout, count, setCounter}) {
   const shoeDetails = [{
       id: 2,
       name: 'Autumn Limited Edition',
       discount: 50,
       price: 250
   }, {
    id: 3,
    name: 'Summer Limited Edition',
    discount: 50,
    price: 350
} ]

   const delCartItem = () => {

   }

  return <>{
  showModal ? <CartItem setCounter={setCounter} finalCheckout={finalCheckout} count={count} delCartItem={delCartItem} shoeDetails={shoeDetails}  />
    : 
 null}
  </>
}

export default CartModal;
