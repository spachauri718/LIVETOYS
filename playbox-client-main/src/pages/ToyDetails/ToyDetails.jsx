import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ToyDetails = () => {
    const [toys, setToys] = useState([])
    const selectedToyId = useParams().id;
    useEffect(() => {
        fetch(`https://playbox-server.vercel.app/toy/${selectedToyId}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setToys(result);
            })
    }, [])



    // console.log(toys)
    // console.log(selectedToyData);


    const { img, toyname, description, price, quantity } = toys;
    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200">
                
                <div className="hero-content">
                    
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl mx-5" />
                    <div>
                    <h1 className="text-5xl font-bold text-center">{toyname}</h1>
                    <p className="py-6 mx-5">{description}</p>
                
                        <h3 className="text-3xl font-bold text-center" >Price: ${price}</h3>
                        <h3 className="text-3xl font-bold text-center" >Quantity: {quantity}</h3>
                   

                    </div>
                   
                </div>
            </div>

        </div>
    );
};

export default ToyDetails;