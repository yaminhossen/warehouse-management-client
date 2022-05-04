import React from 'react';
import './Item.css'

const Item = ({ item }) => {
    const { _id, name, price, img } = item;
    return (
        <div className='item'>
            <h3>Name: {name}</h3>
            <p>Price:{price}</p>
            <img src={img} alt="" />
            <br />
            <button>Details of: {name}</button>
        </div>
    );
};

export default Item;