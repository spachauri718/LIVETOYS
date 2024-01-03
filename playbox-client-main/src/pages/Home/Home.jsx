import React from 'react';
import Gallery from './Gallery/Gallery';
import ToysByCategory from './ToysByCategory/ToysByCategory';
import HomeCarousel from './HomeCarousel/HomeCarousel';
import Comments from './Comments/Comments';
import Sales from './Sales/Sales';
import ToysByAge from './ToysByAge/ToysByAge';
import FeaturedBlogposts from './FeaturedBlogposts/FeaturedBlogposts';
import FeaturedMerchendise from './FeaturedMerchandise/FeaturedMerchendise';
import Shipping from './Shipping/Shipping';



const Home = () => {
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <Gallery></Gallery>
            <ToysByAge></ToysByAge>
            <ToysByCategory></ToysByCategory>
            <FeaturedBlogposts></FeaturedBlogposts>
            <FeaturedMerchendise></FeaturedMerchendise>
            <Comments></Comments>
            <Sales></Sales>
            <Shipping></Shipping>
        </div>
    );
};

export default Home;