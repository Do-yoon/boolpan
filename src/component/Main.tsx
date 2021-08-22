import React, { useState } from 'react';
import Layout from 'component/Layout';

interface MainProps {
    name?: string,
    children: React.ReactNode
}

function Main({name, children}: MainProps) {
    const [loginState, setLoginState] = useState(false);
    const loginInfo = {loginState: loginState, setLoginState: setLoginState};
    return (
        <Layout name={name}>
            {children}
        </Layout>
    );
}

export default Main;