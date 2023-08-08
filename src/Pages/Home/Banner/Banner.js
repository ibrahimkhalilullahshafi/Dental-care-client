import React from 'react';
import banner from '../../../assets/images/banner.jpg';
import background from '../../../assets/images/ban.jpg'


const Banner = () => {
    return (

        <div className="hero rounded-lg" style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
            backgroundPosition: 'center',
            backgroundBlendMode: 'lighten',
            backgroundColor: 'rgba(255,255,255,0.4)'

        }}>
            <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt="banner" />
                <div>
                    <h1 className="text-5xl font-semibold text-accent">We create beautiful smiles</h1>
                    <p className="py-6">Specially designed for patients seeking dentistry abroad, we offer you bespoke expertise at a price that is unbelievably affordable. We have an elite team of carefully selected specialists from all fields of dentistry.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Appointment</button>
                </div>
            </div>
        </div>


    );
};

export default Banner;