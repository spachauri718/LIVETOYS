import React from 'react';

const Blog = () => {
    return (
        <div className='w-1/2 mx-auto'>
            <h1 className='text-2xl mb-5 p-5'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <p className='mb-4 p-3'>An access token is a credential that represents the authorization granted to a user. Commonly, it is stored in memory or as a browser cookie with appropriate security measures such as the HttpOnly flag and secure attributes. A refresh token is a long-lived credential used to obtain a new access token without requiring the user to reauthenticate.The refresh token should be stored in a more secure manner, such as an HTTP-only cookie or a secure storage mechanism provided by the platform (e.g., Keychain on iOS or Android Keystore).</p>

            <h1 className='text-2xl mb-5 p-5'>
                Compare SQL and NoSQL databases?</h1>
            <p className='mb-4 p-3'>SQL databases follow a structured data model known as the relational model. Data is organized into tables with predefined schemas, consisting of rows and columns. NoSQL databases use various data models, such as key-value, document, columnar, or graph. Rigid schema type is seen in SQL databases while NoSQL databases have flexible schemas.SQL databases typically scale vertically by adding more resources to a single server. NoSQL databases typically scale horizontally by adding more resources to a single server. </p>

            <h1 className='text-2xl mb-5 p-5'>What is express js? What is Nest JS (google it)?</h1>
            <p className='mb-4 p-3'>Express.js is a popular and minimalist web application framework for Node.js.Nest.js is a progressive and opinionated web framework for building scalable and maintainable server-side applications. It is built with TypeScript and takes advantage of TypeScript's features to provide a strongly typed and structured development experience.</p>
            <h1 className='text-2xl mb-5 p-5'></h1>
            <p className='mb-4 p-3'>
                MongoDB's Aggregation Framework is a powerful feature that allows for advanced data processing and analysis within the database. It provides a flexible and efficient way to perform complex queries, transformations, aggregations, and computations on data stored in MongoDB.The Aggregation Framework works by processing documents through a pipeline of stages, where each stage performs a specific operation on the input documents and passes the results to the next stage. </p>
        </div>
    );
};

export default Blog;