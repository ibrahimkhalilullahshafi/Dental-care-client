import React from 'react';

const Service = ({ data }) => {
    const { name, description, icon } = data;
    return (
        <div className="card w-auto bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={icon} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;