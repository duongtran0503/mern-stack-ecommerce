import React from 'react';
import HeaderComponent from '../HeaderComponent';
const DefaultComponent = ({ children }) => {
    return (
        <>
            <HeaderComponent />
            {children}
        </>
    );
};

export default DefaultComponent;
