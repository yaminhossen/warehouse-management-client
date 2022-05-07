import React from 'react';

const ManageSingleItem = ({ item }) => {
    const { name, price, img, suplier, quantity, description } = item;
    return (
        <div className='item'>
            <img src={img} alt="" />
            <br />
            <h3>Name: {name}</h3>
            <h4>Suplier: {suplier}</h4>
            <h6>Price:{price}</h6>
            <h6>Quantity: {quantity}</h6>
            <p><>Description:{description}</></p>
        </div>
    );
};

export default ManageSingleItem;