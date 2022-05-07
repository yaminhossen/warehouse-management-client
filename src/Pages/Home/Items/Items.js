import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import ManageItem from '../../ManageItem/ManageItem';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [user] = useAuthState(auth);

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div id='items'>
            <h1 className='items-title'>Items Section</h1>
            <div className='d-flex justify-content-center align-items-center'>
                <h1 className='items-title text-primary px-4'>My Six Best Items</h1>
                <div className="items-container">
                    {
                        items.map(item => <Item
                            key={item._id}
                            item={item}
                        ></Item>)
                    }
                    {
                        user ?
                            <Nav.Link className='text-white bg-warning' as={Link} to="manageItem">Manage Item</Nav.Link>
                            :
                            <button className='border-0 bg-white'></button>
                    }
                </div>

            </div>

            {/* <div>
            https://i.ibb.co/yNj8VHY/apple.jpg
https://i.ibb.co/p15W7zN/bannana1.jpg
https://i.ibb.co/dMp0g6G/berry.jpg
https://i.ibb.co/Fb9SB4Q/lichi.jpg
https://i.ibb.co/hBV8Dg8/mango.jpg
https://i.ibb.co/5KcBL85/orange2.jpg
https://i.ibb.co/P9H00s4/pineapple.jpg
https://i.ibb.co/Ns7k7KF/redberry1.jpg
https://i.ibb.co/CbGqYTD/strawberry1.jpg
            </div> */}
        </div>
    );
};

export default Items;