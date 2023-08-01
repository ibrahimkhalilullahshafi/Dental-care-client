import React from 'react';
import fluorideLogo from '../../../assets/images/fluoride.png'
import cavityLogo from '../../../assets/images/cavity.png'
import teethLogo from '../../../assets/images/whitening.png'
import serviceLogo from '../../../assets/images/service.png'
import Service from './Service';

const Services = () => {
    const serviceData = [
        {
            id: 1,
            name: 'Fluoride treatment',
            description: 'We always try to provide the high quality services to our patients and strive for continuous quality imrovements.',
            icon: fluorideLogo
        },
        {
            id: 2,
            name: 'Cavity filing',
            description: 'Expert surgical care from the tem you know and trust. Implants, root, canals, extractions and more.',
            icon: cavityLogo
        },
        {
            id: 3,
            name: 'Teeth whitening',
            description: 'Dental surgery is any of a number of medical procedures that involve artificially modifying dentition.',
            icon: teethLogo
        }
    ]
    return (
        <div>
            <div>
                <img src={serviceLogo} alt="" className="rounded-xl mx-auto" />
                <p className='text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary text-center'>Our Services</p></div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-4 justify-items-center'>
                {
                    serviceData.map(data => <Service
                        key={data.id}
                        data={data}
                    ></Service>)
                }
            </div>
        </div>

    );
};

export default Services;