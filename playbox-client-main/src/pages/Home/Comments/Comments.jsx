import React from 'react';

const Comments = () => {
    return (
        <div className='text-center border rounded'>
            <h1 className='text-4xl font-bold my-6'>Write to Us!</h1>
            <input type='text' placeholder='Your Name' className='border px-4 py-3 mb-5'/>
            <br />
            <input type='email' placeholder='Your Email' className='border px-4 py-3 mb-5'/>
            <br />
            <textarea placeholder="Share your thoughts..." className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
            <br />
            <button className='btn btn-secondary my-3'>Send</button>
        </div>
    );
};

export default Comments;