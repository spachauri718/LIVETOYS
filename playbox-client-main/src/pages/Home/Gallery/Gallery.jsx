import React, { useEffect, useState } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
const Gallery = () => {
    const [toys, setToys] = useState([]);
    useEffect(()=>{
        fetch('https://playbox-server.vercel.app/all')
        .then(res => res.json())
        .then(result =>{
            console.log(result);
            setToys(result);
        })
    },[])
    const toyImages = toys.map(toy => toy.img)
    console.log(toyImages);
    return (
        <div className='text-center'>
            <SectionTitle subHeading='Our Best Picks' heading='Toy Gallery'/>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry className=''>
                    {toyImages.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                           className='p-5 border'
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            
        </div>
    );
};

export default Gallery;