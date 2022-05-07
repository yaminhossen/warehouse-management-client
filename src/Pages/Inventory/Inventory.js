import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Inventory = () => {
    const { inventoryID } = useParams();
    return (
        <div>
            <div className='text-center mb-4'>
                <h2>Wellcome to my inventoiry page:{inventoryID}</h2>
            </div>
            <div className='text-center mb-4'>
                <button className=' bg-warning border border-redius-4'>Delivered</button>
            </div>
            <div className='text-center border w-50 mx-auto'>
                <h3>Increase the quantity</h3>
                <form className='text-center'>
                    <input type="number" name="number" placeholder='Input the quantity' id="" />
                    <br />
                    <br />
                    <input className='bg-warning border-0' type="submit" value="submit" />
                </form>
            </div>
            <div>
                <nav>
                    <Nav.Link as={Link} to="/manageItem">Manage Item</Nav.Link>
                </nav>
            </div>
        </div>
    );
};

export default Inventory;