import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './HomeCarousel.css';
import toy_img from '../../../assets/pic3.jpg'
import toy_img1 from '../../../assets/mario.jpg'
import toy_img2 from '../../../assets/jejqg2am3lz71.jpg'

const HomeCarousel = () => {
    return (
        <div className="slider-container mb-10 shadow-lg">
            <AwesomeSlider>
                <div className="slider-item">
                    <div className='image-wrapper'>
                    <img src={toy_img} alt="Image 1" className='w-full' />
                    </div>
                    
                    <div className="overlay-text">
                        <h2 className='text-5xl font-bold mb-10'>Welcome to Playbox</h2>
                        
                    </div>
                </div>
                <div className="slider-item">
                    
                <div className='image-wrapper'>
                    <img src={toy_img1} alt="Image 1" className='w-full' />
                    </div>
                    <div className="overlay-text">
                        <h2 className='text-5xl font-bold mb-10'>Must-Have Toys</h2>
                        
                    </div>
                </div>

                <div className="slider-item">
                    
                <div className='image-wrapper'>
                    <img src={toy_img2} alt="Image 1" className='w-full' />
                    </div>
                    <div className="overlay-text">
                        <h2 className='text-5xl font-bold mb-10'>Game On with Playbox</h2>
                       
                    </div>
                </div>
            </AwesomeSlider>
        </div>
    );
};

export default HomeCarousel;