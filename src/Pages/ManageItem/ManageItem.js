import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useItems from '../Shared/Hooks/useItems';
import './ManageItem.css'

const ManageItem = () => {
    const [items, setItems] = useItems([]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }
    return (
        <div>
            <h3 className='text-center my-4'>Here have all our available item:{items.length}</h3>
            <div className='items-container'>

                {
                    items.map(item => <div className='item'
                        key={item._id}>
                        <img src={item.img} alt="" />
                        <br />
                        <h3>Name: {item.name}</h3>
                        <h4>Suplier: {item.suplier}</h4>
                        <h6>Price:{item.price}</h6>
                        <h6>Quantity: {item.quantity}</h6>
                        <p><>Description:{item.description}</></p>
                        <button onClick={() => handleDelete(item._id)}>Delete</button>

                    </div>)
                }
                <div>
                    <Nav.Link className='add-link' as={Link} to="/addItem">Add Item</Nav.Link>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;