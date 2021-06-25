import React from 'react';

const NotFound = () => {
    return (
        <div>
            <div style={{ color: 'red', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1>Error 404</h1>
                <h2 style={{ color: 'black' }}>This page is not found, please try again later.</h2>
            </div>
        </div>
    );
};

export default NotFound;