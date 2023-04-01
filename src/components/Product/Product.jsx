import React from 'react';
import { addToDb, removeFromDb } from '../../Utilities/fakedb';
import './Product.css';

const Product = (props) => { 
    const { name, img, seller, ratings, price, id } = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <div className='image-container'>
                <img src={img} alt="" />
            </div>
            <div className='card-info'>
                <h5>{name}</h5>
                <p>Price: ${price}</p>

            </div>
            <div className='card-footer'>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
                <button onClick={() => handleAddToCart(props.product)}>Add to Cart</button>
        </div>
    );
};

export default Product;