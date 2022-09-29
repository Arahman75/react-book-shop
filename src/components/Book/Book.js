import React from 'react';
import './Book.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Book = (props) => {
    const {img, name, price} = props.book;
    // console.log(props);
    return (
        <div className='book'>
            <img src={img} alt="" />
           <div className='book-info'>
           <h2>Name : {name}</h2>
           <h3>Price : ${price}</h3>
           </div>
           <button onClick={() => props.handleAddToCart(props.book)} className='cart-btn'><p>Add to Cart</p><FontAwesomeIcon className='shopping-cart' icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Book;