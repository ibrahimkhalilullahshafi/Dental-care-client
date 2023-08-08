import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Facilities from '../Facilities/Facilities';
import Services from '../Services/Services';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Sliders from '../Sliders/Sliders';

const Home = () => {
    return (
        <div className='mx-auto'>
            <Banner></Banner>
            <Sliders></Sliders>
            <Services></Services>
            <Facilities></Facilities>
            <InfoCards></InfoCards>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;