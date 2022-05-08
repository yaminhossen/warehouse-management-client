import { stringify } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Inventory = () => {
    const { inventoryID } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://mysterious-cove-91305.herokuapp.com/${inventoryID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])
    console.log(item.quantity);
    const handleIcrease = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        // const iquantity = parseInt(item.quantity) + parseInt(quantity);
        // const pquantity = JSON.stringify(iquantity);
        // console.log(iquantity);
        const updatedItem = { quantity };
        console.log(updatedItem);

        // send data to the server side
        const url = `https://mysterious-cove-91305.herokuapp.com/${inventoryID}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('quantity increase succesfully');
                event.target.reset();
            })
    }
    return (
        <div>
            <div className='text-center mb-4'>
                <h2>Wellcome to my inventoiry page:{item.name}</h2>
                <div className=' w-50 mx-auto'>
                    <div className='item'>
                        <img src={item.img} alt="" />
                        <br />
                        <h3>Name: {item.name}</h3>
                        <h5>Id: {item._id}</h5>
                        <h4>Suplier: {item.suplier}</h4>
                        <h6>Price:{item.price}</h6>
                        <h6>Quantity: {item.quantity}</h6>
                        <p><>Description:{item.description}</></p>
                        <div className='text-center mb-4'>
                            <button className=' bg-warning border border-redius-4'>Delivered</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center border w-50 mx-auto'>
                <h3>Increase the quantity</h3>
                <form onSubmit={handleIcrease} className='text-center'>
                    <input type="number" name="quantity" placeholder='Input the quantity' id="" />
                    <br />
                    <br />
                    <input className='bg-warning border-0' type="submit" value="Increase Quantity" />
                </form>
            </div>
            <div>
                <nav>
                    <Nav.Link className='text-center m-button' as={Link} to="/manageItem">Manage Item</Nav.Link>
                </nav>
            </div>
        </div>
    );
};

export default Inventory;