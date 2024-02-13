import React from 'react';
import chair from '../../../assets/images/chair.png'
import background from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';

const AppointBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <div className="hero bg-base-100 place-items-stretch w-100" style={{
            backgroundImage: `url(${background})`,
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='my-0 py-0'>
                    <p className='text-center text-primary font-bold text-3xl mb-7 mt-0'>Book your slots</p>
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl mx-auto" alt='' /></div>
                <div className='mx-auto'>
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate} className='bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg p-4'
                    ></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default AppointBanner;