import React from 'react';
import not_found from '../assets/error.jpg'
const NotFoundLayout = () => {
    return (
        <div>
            <h2> There's nothing here.</h2>
            <img src={not_found} alt="404 Error Image" />
        </div>
    );
};

export default NotFoundLayout;