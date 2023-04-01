import './Cart.css'
import React from 'react';

const Cart = ({cart}) => {
    console.log(cart)

    let total = 0;
    let shipping = 0;
    let tax = 0;

    for (const product of cart){
        total = total + product.price
        shipping = shipping + product.shipping
        tax = tax + (product.price* .07).toFixed(2)
    }



    return (
        <div className='shopping-cart'>
            <h2>Order Summary</h2>
            <p>Selected items: {cart.length} </p>
            <p>Total price: ${total}</p>
            <p>Total shipping charge: ${shipping}</p>
            <p>Total tax: ${tax} </p>
            <h3>Grand Total: </h3>
        </div>
    );
};

export default Cart;