import React from 'react';
import MainLayout from 'component/MainLayout';
import ChatRoomTable from 'component/ChatRoomTable';

interface HomeProps {
    name?: string,
    children?: React.ReactNode
}

function Home({name, children}: HomeProps) {
    return (
        <MainLayout name={name}>
            <ChatRoomTable/>
        </MainLayout>
    );
}

export default Home;