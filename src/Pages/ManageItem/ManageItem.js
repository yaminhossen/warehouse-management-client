import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageItem = () => {
    return (
        <div>
            <h3>Here have all items</h3>
            <div>
                <Nav.Link as={Link} to="/AddItem">Add Item</Nav.Link>
            </div>
        </div>
    );
};

export default ManageItem;