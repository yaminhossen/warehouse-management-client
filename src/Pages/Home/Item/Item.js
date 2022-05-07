import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
    const { _id, description, name, price, img, suplier, quantity } = item;
    const navigate = useNavigate();
    const navigateToInventory = (_id) => {
        navigate(`/inventory/${_id}`)
    }

    return (
        <div className='item'>
            <img src={img} alt="" />
            <br />
            <h3>Name: {name}</h3>
            <h4>Suplier: {suplier}</h4>
            <h6>Price:{price}</h6>
            <h6>Quantity: {quantity}</h6>
            <p><>Description:{description}</></p>
            <button onClick={() => navigateToInventory(_id)}>Update: {name}</button>
        </div>
    );
};

export default Item;