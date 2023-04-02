import './Cart.css'
import React from 'react';

const Cart = ({cart}) => {

    console.log(cart)

    let total = 0;
    let shipping = 0;

    for (const product of cart){
        total = total + product.price
        shipping = shipping + product.shipping
    }
    const tax = total * 7 / 100;
    const grandTotal = total + shipping + tax;


    return (
        <div className='shopping-cart'>
            <h2>Order Summary</h2>
            <p>Selected items: {cart.length} </p>
            <p>Total price: ${total}</p>
            <p>Total shipping charge: ${shipping}</p>
            <p>Total tax: ${tax.toFixed(2)} </p>
            <h3>Grand Total: ${grandTotal.toFixed(2)} </h3>
        </div>
    );
};

export default Cart;