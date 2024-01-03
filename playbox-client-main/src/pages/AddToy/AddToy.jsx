import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddToy = () => {
    const { user } = useContext(AuthContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{ 
        console.log(data);

        fetch('https://playbox-server.vercel.app/addtoy',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
            if(result.insertedId){
                toast.success('Data inserted successfully.')
                
            }
        

        })
    
    
    };
    return (
        <div className='text-center'>
            <h1 className='text-4xl font-bold'>Add a Toy</h1>
            <div className='flex rounded w-full p-5'>
                { /* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                <form onSubmit={handleSubmit(onSubmit)} className='w-full border rounded p-5'>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input placeholder='name' type='text' value={user?.displayName} {...register("name", { required: true })} className='border rounded p-2 mx-2 my-2' />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}



                    {/* include validation with required or other standard HTML validation rules */}
                    <input placeholder='email' type='email' value={user?.email} {...register("email", { required: true })} className='border rounded p-2 mx-2 my-2' />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <br />



                    {/* register your input into the hook by invoking the "register" function */}
                    <select defaultValue='' {...register("category", { required: true })} className='border rounded p-2 mx-4 my-2'>
                    <option value="" disabled hidden>Choose Category</option>
                        <option value="Pokemon">Pokemon</option>
                        <option value="The Legend of Zelda">The Legend of Zelda</option>
                        <option value="Kirby">Kirby</option>
                        <option value="Super Mario">Super Mario</option>
                        <option value="Lego Juniors">Lego Juniors</option>
                        <option value="Paw Patrol">Paw Patrol</option>

                    </select>

                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}





                    {/* include validation with required or other standard HTML validation rules */}
                    <input placeholder='Name of Toy' {...register("toyname", { required: true })} className='border rounded p-2 mx-2 my-2' />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <br />




                    {/* register your input into the hook by invoking the "register" function */}
                    <input placeholder='Toy Image URL' type='url' {...register("img", { required: true })} className='border rounded p-2 mx-2 my-2' />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}



                    {/* include validation with required or other standard HTML validation rules */}
                    <input placeholder='Price' type='number' {...register("price", { required: true })} className='border rounded p-2 mx-2 my-2' />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />



                    {/* include validation with required or other standard HTML validation rules */}
                    <input placeholder='Rating' type='number' {...register("rating", { required: true })} className='border rounded p-2 mx-2 my-2' />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}





                    {/* include validation with required or other standard HTML validation rules */}
                    <input placeholder='Description' type='text' {...register("description", { required: true })} className='border rounded p-2 mx-2 my-2' />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}


                    <br />




                    {/* register your input into the hook by invoking the "register" function */}
                    <select placeholder='Available' defaultValue='' {...register("available", { required: true })} className='border rounded p-2 mx-2 my-2'>
                    <option value="" disabled hidden>Available in Stock?</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>

                    </select>
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}






                    {/* register your input into the hook by invoking the "register" function */}
                    <select placeholder='Quantity' defaultValue='' {...register("quantity", { required: true })} className='border rounded p-2 mx-2 my-2'>
                    <option value="" disabled hidden>Quantity</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}


                    <br />



                    <input className='btn bg-purple-500 border-collapse mt-3' type="submit" value="Add Toy" />
                </form>
                <ToastContainer/>

            </div>

        </div>

    );
};

export default AddToy;