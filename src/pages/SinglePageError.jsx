import React from 'react';
import { useRouteError } from 'react-router-dom';

const SinglePageError = () => {
    const error = useRouteError();
    console.log(error);
    
    return (
        <h2>{error?.message || "An unexpected error occurred."}</h2>
    );
}

export default SinglePageError;