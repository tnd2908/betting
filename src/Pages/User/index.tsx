import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './Component/Menu';

const UserPage = () => {
    return (
        <div className='main user__container'>
            <div className="d-flex justify-content-between">
                <Menu/>
                <div className="user__outlet__container flex-mid">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default UserPage;