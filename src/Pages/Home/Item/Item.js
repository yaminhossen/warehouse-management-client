import React from 'react';

const Item = ({ item }) => {
    const { _id, name, price, img } = item;
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>Price:{price}</p>
            <img src={img} alt="" />
        </div>
    );
};

export default Item;