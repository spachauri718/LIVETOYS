import React from 'react';
import { CiLocationOn } from 'react-icons/ci'
import { BsArrowReturnRight } from 'react-icons/bs'
import {BiWorld} from 'react-icons/bi'
import { AiOutlineLock} from 'react-icons/ai'

const Shipping = () => {
    return (
        <div className='grid md:grid-cols-4 gap-3 mx-5'>
            <div className='border border-black border-2 p-5 rounded bg-slate-100 shadow-lg'>
                <div className='flex'>
                    <CiLocationOn className='text-slate-600 mt-1 me-1'/> <p className='font-semibold'> Free Shipping Worldwide</p>
                </div>
                <p className='ms-4 text-gray-500'>On all orders above $1000</p>
            </div>
            <div className='border border-black border-2 p-5 rounded bg-slate-100 shadow-lg'>
                <div className='flex'>
                    <BsArrowReturnRight className='text-slate-600 mt-1 me-1'/> <p className='font-semibold'> Easy 7 days Return</p>
                </div>
                <p className='ms-4 text-gray-500'>7 days money back guarantee</p>
            </div>
            <div className='border border-black border-2 p-5 rounded bg-slate-100 shadow-lg'>
                <div className='flex'>
                    <BiWorld className='text-slate-600 mt-1 me-1'/> <p className='font-semibold'> Genuine Warranty</p>
                </div>
                <p className='ms-4 text-gray-500'>Warranty Service will be available</p>
            </div>
            <div className='border border-black border-2 p-5 rounded bg-slate-100 shadow-lg'>
                <div className='flex'>
                    <AiOutlineLock className='text-slate-600 mt-1 me-1'/> <p className='font-semibold'> 100% Secure Checkout</p>
                </div>
                <p className='ms-4 text-gray-500'>Bkash / Nagad / Rocket </p>
            </div>
            
        </div>
    );
};

export default Shipping;