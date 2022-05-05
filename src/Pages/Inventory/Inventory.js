import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { inventoryID } = useParams();
    return (
        <div>
            <h2>Wellcome to my inventoiry page:{inventoryID}</h2>
        </div>
    );
};

export default Inventory;