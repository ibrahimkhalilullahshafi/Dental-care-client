import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import background from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div className="hero bg-base-100 place-items-stretch w-screen" style={{
            backgroundImage: `url(${background})`,
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl mx-auto" alt='' />
                <div className='mx-auto'>
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate} className='bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg p-4'
                    ></DayPicker>
                    <p>you have selected : {format(selectedDate, 'PP')}</p>
                </div>
            </div>
        </div>
    );
};

export default AppointBanner;