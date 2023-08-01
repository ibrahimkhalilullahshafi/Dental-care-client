import React from 'react';
import facilityLogo from '../../../assets/images/facility.png'
import doctorLogo from '../../../assets/images/doctor.png'
import surgeryLogo from '../../../assets/images/surgery.png'
import Facility from './Facility';

const Facilities = () => {
    const facilityData = [
        {
            id: 1,
            name: 'World class facilities',
            description: 'We always try to provide the high quality services to our patients and strive for continuous quality imrovements.',
            icon: facilityLogo
        },
        {
            id: 2,
            name: 'Expert doctors',
            description: 'Expert surgical care from the tem you know and trust. Implants, root, canals, extractions and more.',
            icon: doctorLogo
        },
        {
            id: 3,
            name: 'Dental surgery',
            description: 'Dental surgery is any of a number of medical procedures that involve artificially modifying dentition.',
            icon: surgeryLogo
        }
    ]
    return (
        <div className=' mt-10'>
            <div><p className='text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary text-center'>Our Specialities</p></div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-4 justify-items-center'>
                {
                    facilityData.map(data => <Facility
                        key={data.id}
                        data={data}
                    ></Facility>)
                }
            </div>
        </div>

    );
};

export default Facilities;