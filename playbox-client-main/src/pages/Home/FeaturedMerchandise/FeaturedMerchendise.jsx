import React, { useEffect, useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const FeaturedMerchendise = () => {

    const [merches, setMerches] = useState([]);
    useEffect(() => {
        fetch('https://playbox-server.vercel.app/getMerch')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMerches(data)
            })


    }, [])
    return (

        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
           slidesPerView={4}
        >

            {
                merches?.map((merch) =>
                    <SwiperSlide key={merch._id} merch={merch}>
                        <div>
                            <img src={merch.image} alt={merch.name} className='object-cover border-3 w-60 h-60 rounded-lg p-2' />

                            <p className='text-xl font-bold'>{merch.name}</p>


                        </div>


                    </SwiperSlide>
                )
            }
        </Swiper>
    );
};

export default FeaturedMerchendise;