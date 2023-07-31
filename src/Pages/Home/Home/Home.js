import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Facilities from '../Facilities/Facilities';

const Home = () => {
    return (
        <div className='mx-4'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Facilities></Facilities>
        </div>
    );
};

export default Home;