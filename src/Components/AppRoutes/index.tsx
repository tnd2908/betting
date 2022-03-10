import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home';
import LoginPage from '../../Pages/Login';
import Layout from '../layout';

const AppRoutes = () => {
    return (
        <Routes>
			<Route element={<Layout/>} path='/' >
				<Route element={<Home/>} path='/'></Route>
                <Route path='/login' element={<LoginPage/>}></Route>
			</Route>
		</Routes>
    );
};

export default AppRoutes;