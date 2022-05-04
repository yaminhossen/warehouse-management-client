import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
    const { _id, name, price, img } = item;
    const navigate = useNavigate();
    const navigateToInventory = (_id) => {
        navigate(`/inventory/${_id}`)
    }

    return (
        <div className='item'>
            <h3>Name: {name}</h3>
            <p>Price:{price}</p>
            <img src={img} alt="" />
            <br />
            <button onClick={() => navigateToInventory(_id)}>Details of: {name}</button>
        </div>
    );
};

export default Item;