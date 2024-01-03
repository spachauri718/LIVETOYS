import React from 'react';

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className='md:w-4/12 mx-auto text-center mt-12 mb-8'>
        <p className='text-pink-600 font-semibold '>{subHeading}</p>
        <h3 className='text-3xl  py-3 font-bold'>{heading}</h3>
        
    </div>
    );
};

export default SectionTitle;