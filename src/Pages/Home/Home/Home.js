import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Facilities from '../Facilities/Facilities';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-4'>
            <Banner></Banner>
            <Facilities></Facilities>
            <Services></Services>
            <InfoCards></InfoCards>
        </div>
    );
};

export default Home;