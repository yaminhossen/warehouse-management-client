import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `http://localhost:5000/item?email=${email}`;
            const { data } = await axios.get(url);
            setItems(data);
        }
        getOrders();
    }, [])
    return (
        <div>
            <h3>this is my item:{items.length}</h3>
            <h2>{user.email}</h2>
        </div>
    );
};

export default MyItem;