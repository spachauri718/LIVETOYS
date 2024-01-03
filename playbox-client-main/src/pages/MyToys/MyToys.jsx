import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import UpdateModal from '../UpdateModal/UpdateModal';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [modalShow, setModalShow] = useState()

    useEffect(() => {
        fetch(`https://playbox-server.vercel.app/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setToys(result);

            })
    }, [user])

    const navigate = useNavigate();

    const handleUpdate = (data) =>{
        fetch(`https://playbox-server.vercel.app/update/${data?._id}`,{
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            if(result.modifiedCount){
                toast.success('Data Updated Sucessfully!');
            }})

      


    }

    const handleDelete = (_id) =>{
        fetch(`https://playbox-server.vercel.app/delete/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                toast.success('Deleted Toy')
            }
        })
    }
    return (
        <div className="overflow-x-auto w-full">
            <h1 className='text-center text-3xl font-bold my-4'> My Toys</h1>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>

                        <th>Toy Name with Picture</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>View</th>
                        <th>Perform an Action</th>

                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {toys?.map((toy) =>
                        <tr toy={toy} key ={toy._id}>
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
                            <th>
                                {/* The button to open modal */}
                                <label htmlFor="update-modal" className="btn btn-ghost btn-outline me-2">update</label>
                                <button onClick={()=>{handleDelete(toy._id)}} className="btn btn-ghost btn-outline">delete</button>

                                <UpdateModal toy={toy} handleUpdate ={handleUpdate}></UpdateModal>

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
                        <th>View</th>
                        <th>Perform an Action</th>
                    </tr>
                </tfoot>

            </table>
            
        </div>
    );
};

export default MyToys;