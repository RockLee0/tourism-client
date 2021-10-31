import React from 'react';

const Guide = ({ guide }) => {
    const { name, img, expertize } = guide;
    return (
        <div className="col-lg-4 col-sm-6 col-12 bg-secondary w-100 border rounded">
            <img className='w-100' src={img} alt="" />
            <h3 className="text-white" >{name}</h3>
            <h5 className="text-black">----{expertize}---- </h5>
        </div>
    );
};

export default Guide;