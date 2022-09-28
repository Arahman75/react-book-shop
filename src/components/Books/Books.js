import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Books.css'


const Books = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('book.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])

    const handleAddToCart=(book)=>{
const newCart = [...cart, book];
setCart(newCart);
        // console.log('clicked',book);
    }
    return (
        <div className='book-shop'>
            <div className="books-container">
{
    books.map(book => <Book
    key={book.id}
    book={book}
    handleAddToCart={handleAddToCart}
    ></Book>)
}
            </div>
            <div className="cart-container">
<Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Books;