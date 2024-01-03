import React from 'react';
import sales_img1 from '../../../assets/sales1.jpg'
import sales_img2 from '../../../assets/sales2.jpg'
import sales_img3 from '../../../assets/sales3.jpg'
import sales_img4 from '../../../assets/sales4.jpg'

const Sales = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold my-6'>Amazing Deals</h1>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={sales_img1} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={sales_img2} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={sales_img3} className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={sales_img4} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>

        </div>
    );
};

export default Sales;