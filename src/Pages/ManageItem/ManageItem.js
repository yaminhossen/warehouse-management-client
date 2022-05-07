import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ManageSingleItem from '../ManageSingleItem/ManageSingleItem';
import useItems from '../Shared/Hooks/useItems';
import './ManageItem.css'

const ManageItem = () => {
    const [items, setItems] = useItems([]);
    return (
        <div>
            <h3>Here have all items:{items.length}</h3>
            <div className='items-container'>

                {
                    items.map(item => <ManageSingleItem
                        key={item._id}
                        item={item}
                    ></ManageSingleItem>)
                }
                <div>
                    <Nav.Link as={Link} to="/addItem">Add Item</Nav.Link>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;