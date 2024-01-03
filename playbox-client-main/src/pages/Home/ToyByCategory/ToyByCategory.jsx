import React from 'react';
import ReactStars from "react-rating-stars-component";
import { useNavigate } from 'react-router-dom';

const ToyByCategory = ({toy}) => {
    const {price, quantity, name, toyname, img, rating} = toy;

    const ratings = {
        size: 30,
        value: parseInt(rating),
        edit: false
      };
    const navigate = useNavigate();
    return (
        <div className="card mx-4 mb-6 w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-40 h-40" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{toyname}</h2>
                <p className='text-gray-400'>{name}</p>
                <div className='flex justify-around'>
                    

                    
                    <p className='me-5'>${price}</p>
                    <p className='ms-3'>Quantity: {quantity}</p>
                    
                </div>
                <p><ReactStars {...ratings} /></p>
                <div className="card-actions">
                    <button onClick={()=>navigate(`/toy/${toy._id}`)} className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ToyByCategory;