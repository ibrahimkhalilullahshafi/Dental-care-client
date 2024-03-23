import React from 'react';

const AppointmentOption = ({ appointmentOption }) => {

    const { name, slots } = appointmentOption
    return (
        <div>
            <div className="card shadow-xl">
                <div className="card-body items-center">
                    <h2 className="card-title text-primary font-bold text-2xl">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'try another day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'slots' : 'slot'} available</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-secondary text-accent">Book Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AppointmentOption;