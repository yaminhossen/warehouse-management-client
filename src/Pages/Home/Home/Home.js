import React from 'react';
import NewSection1 from '../../NewSection/NewSection1';
import NewSection2 from '../../NewSection/NewSection2';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Items></Items>
            <NewSection1></NewSection1>
            <NewSection2></NewSection2>

        </>
    );
};

export default Home;