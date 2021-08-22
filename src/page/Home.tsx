import React from 'react';
import Main from '@component/Main';
import ChatRoomTable from '@component/ChatRoomTable';

interface HomeProps {
    name?: string,
    children: React.ReactNode
}

function Home({name, children}: HomeProps) {
    return (
        <Main>
            <ChatRoomTable/>
        </Main>
    );
}

export default Home;