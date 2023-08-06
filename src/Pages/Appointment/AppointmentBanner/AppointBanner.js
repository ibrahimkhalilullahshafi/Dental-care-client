import React from 'react';
import chair from '../../../assets/images/chair.png'
import background from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';

const AppointBanner = () => {
    return (
        <div className="hero min-h-screen bg-base-100" style={{
            backgroundImage: `url(${background})`,
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">appoint now</h1>
                    <DayPicker></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default AppointBanner;