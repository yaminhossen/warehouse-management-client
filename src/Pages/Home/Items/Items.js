import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ManageItem from '../../ManageItem/ManageItem';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div id='items'>
            <h1 className='items-title text-primary'>My Items</h1>
            <div className="items-container">
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
            <nav>
                <Nav.Link as={Link} to="/manageItem">Manage Item</Nav.Link>
            </nav>
        </div>
    );
};

export default Items;