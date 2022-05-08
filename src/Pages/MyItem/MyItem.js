import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItem.css'

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getOrders = async () => {
            const email = user?.email;
            const url = `https://mysterious-cove-91305.herokuapp.com/?email=${email}`;
            const { data } = await axios.get(url);
            setItems(data);
        }
        getOrders();
    }, [])
    return (
        <div className='myItems text-center '>
            <h3 >This is my item:{items.length}</h3>
            <h2>User Email: {user?.email}</h2>
        </div>
    );
};

export default MyItem;