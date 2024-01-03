import React from 'react';
import kids1 from '../../../../src/assets/toys-for-2-3-year-olds.jpg'
import kids2 from '../../../../src/assets/toys-for-7-10-year-olds.jpg'
import kids3 from '../../../../src/assets/toys-for-10-15-year-olds.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';




const ToysByAge = () => {
    return (
        <>
            <SectionTitle subHeading = 'Toys for All Kids' heading ='Shop By Age Group' />
            <div className="mb-60 bg-cover bg-indigo-100 bg-center h-screen w-full">

                <div className="flex justify-center items-center h-full">
                    <div className="grid md:grid-cols-3 gap-16">



                        <div className="max-w-xs rounded-tr-full rounded-tl-full overflow-hidden">
                            <div className='btn'></div>
                            <img className="w-full" style={{ minHeight: '200px' }} src={kids1} alt="Card image cap" />
                            <div className="px-6 py-4 bg-white  text-center shadow-lg z-30">
                                <div className="font-bold mb-2">Infant</div>
                                <div className="font-bold text-2xl mb-2">0 - 5 Years</div>

                                <p className="text-gray-700  mb-5 text-left">
                                Whether it's light-up controllers for pretend play or interactive learning devices, we have something to delight every young gamer out there. 
                                </p>



                            </div>
                            <div className='text-center'>
                                <button class="bg-blue-600 hover:bg-blue-700 text-white uppercase font-semibold py-3 px-9 rounded-full -mt-20">
                                    View More
                                </button>

                            </div>

                        </div>
                        <div className="max-w-xs rounded-tr-full rounded-tl-full overflow-hidden">
                            <div className='btn'></div>
                            <img className="w-full" style={{ minHeight: '200px' }} src={kids2} alt="Card image cap" />
                            <div className="px-6 py-4 bg-white  text-center shadow-lg z-30">
                                <div className="font-bold mb-2">Children</div>
                                <div className="font-bold text-2xl mb-2">7 - 10 Years</div>

                                <p className="text-gray-700 mb-5 text-left">
                                Explore our selection of age-appropriate video game toys that promote teamwork, problem-solving, and strategic thinking. 
                                </p>



                            </div>
                            <div className='text-center'>
                                <button class="bg-blue-600 hover:bg-blue-700 text-white uppercase font-semibold py-3 px-9 rounded-full -mt-20">
                                    View More
                                </button>

                            </div>

                        </div>
                        <div className="max-w-xs rounded-tr-full rounded-tl-full overflow-hidden">
                            <div className='btn'></div>
                            <img className="w-full" style={{ minHeight: '200px' }} src={kids3} alt="Card image cap" />
                            <div className="px-6 py-4 bg-white  text-center shadow-lg z-30">
                                <div className="font-bold mb-2">Preteens & Teens</div>
                                <div className="font-bold text-2xl mb-2">10 - 15 Years</div>

                                <p className="text-gray-700 mb-5 text-left">
                                From collectible action figures of their favorite game characters to high-quality gaming peripherals, we have the gear to elevate their gaming sessions.
                                </p>



                            </div>
                            <div className='text-center'>
                                <button class="bg-blue-600 hover:bg-blue-700 text-white uppercase font-semibold py-3 px-9 rounded-full -mt-20">
                                    View More
                                </button>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ToysByAge;