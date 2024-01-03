import React from 'react';
import { FaRegCalendarDays } from 'react-icons/fa6';
import blogImg from '../../../../src/assets/toy1.jpg';
const FeaturedBlogposts = () => {
    return (
        <div className='bg-slate-800 text-white p-10'>
            <div className='grid md:grid-cols-2'>
                <img src={blogImg} className='w-4/3' />
                <div>
                    <h4 className='text-pink-600'>Blog</h4>
                    <h2 className='font-semibold text-4xl mb-6'>Our Recent Blogposts</h2>

                    <div className='flex mb-10'>
                        <div><p className='mt-3 mb-1 me-5'> <FaRegCalendarDays className='text-yellow-500' />16 Dec, 2023</p>
                        <p class="underline decoration-wavy text-slate-800 decoration-white text-xl font-bold">
                                Lorem
                            </p>
                        </div>
                        
                        <div>
                            <h3 className='font-semibold text-2xl'> Birthday Gifts for Teens</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolor! Explicabo, in ipsa.</p>
                            <p class="underline decoration-wavy text-slate-800 decoration-white text-xl font-bold">
                                Lorem ipsum dolor sit amet consectetur adipisicing
                            </p>
                        </div>
                        
                    </div>
                    <div className='flex mb-10'>
                        <div><p className='mt-3 mb-1 me-5'> <FaRegCalendarDays className='text-yellow-500' />16 Dec, 2023</p>
                        <p class="underline decoration-wavy text-slate-800 decoration-white text-xl font-bold">
                                Lorem
                            </p>
                        </div>
                        
                        <div>
                            <h3 className='font-semibold text-2xl'> Birthday Gifts for Teens</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolor! Explicabo, in ipsa.</p>
                            <p class="underline decoration-wavy text-slate-800 decoration-white text-xl font-bold">
                                Lorem ipsum dolor sit amet consectetur adipisicing
                            </p>
                        </div>
                        
                    </div>
                    <div className='flex mb-10'>
                        <div><p className='mt-3 mb-1 me-5'> <FaRegCalendarDays className='text-yellow-500' />16 Dec, 2023</p>
                        
                        </div>
                        
                        <div>
                            <h3 className='font-semibold text-2xl'> Birthday Gifts for Teens</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolor! Explicabo, in ipsa.</p>
                           
                        </div>
                        
                    </div>

                    <div className='text-center'>
                        <button className='bg-pink-600 px-8 py-2 rounded-full'>Read More</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default FeaturedBlogposts;