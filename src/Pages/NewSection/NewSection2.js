import React from 'react';
import new1 from '../../images/extra/cherry.jpg';
import new2 from '../../images/extra/dragon.jpg';
import new3 from '../../images/extra/watermelon.jpg';
import './NewSection2.css';

const NewSection2 = () => {
    return (
        <div className='container new-section-2'>
            <h3 className='section-1-title'>My Upcoming Items</h3>
            <div className='items-container'>
                <div className='item'>
                    <img src={new1} alt="" />
                    <h3>Name: Cherry</h3>
                    <h3>Price: $ 200</h3>
                </div>
                <div className='item'>
                    <img src={new2} alt="" />
                    <h3>Name: Cherry</h3>
                    <h3>Price: $ 240</h3>
                </div>
                <div className='item'>
                    <img src={new3} alt="" />
                    <h3>Name: Cherry</h3>
                    <h3>Price: $ 300</h3>
                </div>
            </div>
        </div>
    );
};

export default NewSection2;