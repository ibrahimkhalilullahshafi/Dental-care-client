import React from 'react';
import doctor from '../../../assets/images/doctor 1.png'
import background from '../../../assets/images/appointment.png'
const MakeAppointment = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            <figure><img src={doctor} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white">Make an appointment today</h2>
                <p className='text-white'>Helping patients achieve good dental health & beautiful smile is a privilege & responsibility. For over 10 years, my team & I have proudly provided the best dental experience in Bangladesh. Our comfort-first approach is designed to meet the needs of you & your entire family.</p>
                <button className="btn btn-primary">Appointment</button>
            </div>

        </div>
    );
};

export default MakeAppointment;