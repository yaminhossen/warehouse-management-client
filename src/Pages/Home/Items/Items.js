import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import ManageItem from '../../ManageItem/ManageItem';
import useItems from '../../Shared/Hooks/useItems';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [user] = useAuthState(auth);

    const [items, setItems] = useItems([]);
    return (
        <div id='items'>
            <h1 className='items-title'>Items Section</h1>
            <div className=" w-100 mx-auto container px-4 items-container">
                {
                    items.slice(0, 6).map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
                {
                    user ?
                        <Nav.Link style={{ height: "40px" }} className='m-button text-white bg-warning  ' as={Link} to="/manageItem">Manage Item</Nav.Link>
                        :
                        <button className='border-0 bg-white'></button>
                }
            </div>


        </div>
    );
};

export default Items;