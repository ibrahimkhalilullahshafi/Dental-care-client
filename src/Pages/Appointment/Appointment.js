import React from 'react';
import AppointBanner from './AppointmentBanner/AppointBanner';
import AppointmentSlots from '../AppointmentSlots/AppointmentSlots';
import { useState } from 'react';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointBanner>
            <AppointmentSlots
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentSlots>
        </div>
    );
};

export default Appointment;