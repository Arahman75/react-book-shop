import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
  
    
    // console.log(cart)
    let price = 0;
    let name ;
    let total = 0;
    for(const product of cart){
        price = product.price;
        name = product.name;
        total = total + product.price;
    }
   
    return (
        <div className='cart'>
            <h3>Order Summary  </h3>
            <h4>Select Items : {cart.length}</h4>
           <h4>Name: {name}</h4>
            <h4>Price : {price}</h4>
            <h4>Total Price : {total}</h4>
            <div>
                <button className='btn2'><p>Choose one book</p></button>
                <button className='btn2'><p>Select again</p></button>
            </div>
        </div>
    );
};

export default Cart;