import React from 'react';
import chair from '../../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="banner" />
                <div>
                    <h1 className="text-5xl font-bold">Your new smile starts here</h1>
                    <p className="py-6">dajksg diashdfkadsfh asdiksgafik</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;