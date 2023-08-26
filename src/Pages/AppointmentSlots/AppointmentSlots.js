import { format } from 'date-fns';
import React from 'react';

const AppointmentSlots = ({ selectedDate }) => {
    return (
        <div>
            <p className='text-center text-secondary font-bold text-3xl'>you have selected : {format(selectedDate, 'PP')}</p>
        </div>
    );
};

export default AppointmentSlots;