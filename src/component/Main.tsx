import React from 'react';
import MainLayout from 'component/MainLayout';

interface MainProps {
    name?: string,
    children?: React.ReactNode
}

function Main({name, children}: MainProps) {
    return (
        <MainLayout name={name}>
            {children}
        </MainLayout>
    );
}

export default Main;