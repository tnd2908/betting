import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/header';

const Layout = () => {
    return (
        <React.Fragment>
            <Header/>
            <Outlet/>
        </React.Fragment>
    );
};

export default Layout;