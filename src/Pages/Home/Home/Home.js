import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Facilities from '../Facilities/Facilities';
import Services from '../Services/Services';
import MakeAppointment from '../MakeAppointment/MakeAppointment';

const Home = () => {
    return (
        <div className='mx-auto'>
            <Banner></Banner>
            <Facilities></Facilities>
            <Services></Services>
            <InfoCards></InfoCards>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;