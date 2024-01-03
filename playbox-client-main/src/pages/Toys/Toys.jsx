import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Toys = () => {
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText]=useState("");
    useEffect(() => {
        fetch('https://playbox-server.vercel.app/all')
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setToys(result);
            })
    }, [])

    const handleSearch = ()=>{
        fetch(`https://playbox-server.vercel.app/toySearchByCategory/${searchText}`)
        .then(res =>res.json())
        .then(result =>{
            setToys(result);
            
        })
    }

    const navigate = useNavigate();
    return (
        <div className="overflow-x-auto w-full">
            <div className='text-center'>
                <h1 className='text-3xl font-bold my-4'>Toys</h1>
                <input type="text" placeholder="Search Toys" className="input input-bordered w-full max-w-xs mb-6" onChange={(event)=>{setSearchText(event.target.value)}} /> <button className='btn btn-primary btn-outline' onClick={handleSearch}>Search</button>
            </div>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>

                        <th>Toy Name with Picture</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {toys?.map((toy) =>
                        <tr key={toy._id} toy={toy}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={toy.img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{toy.toyname}</div>
                                        <div className='text-sm text-gray-600 font-bold'>{toy.name}</div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                {toy.category}

                            </td>
                            <td>${toy.price}</td>
                            <td>{toy.quantity}</td>
                            <th>
                                <button onClick={()=>navigate(`/toy/${toy._id}`)} className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>

                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Toy Name with Picture</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th></th>
                    </tr>
                </tfoot>

            </table>
        </div>
    );
};

export default Toys;