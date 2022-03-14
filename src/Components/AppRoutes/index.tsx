import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import BetPage from '../../Pages/BetPage';
import Home from '../../Pages/Home';
import LoginPage from '../../Pages/Login';
import MatchesPage from '../../Pages/Matches';
import Layout from '../layout';

const AppRoutes = () => {
    return (
        <Routes>
			<Route element={<Layout/>} path='/' >
				<Route element={<Home/>} path='/'></Route>
                <Route path='/login' element={<LoginPage/>}></Route>
                <Route path='/signup' element={<LoginPage/>}></Route>
                <Route path="/matches" element={<Outlet />}>
                    <Route path='' element={<MatchesPage />} />
                    <Route path=':idMatch' element={<BetPage />} />
                </Route>
			</Route>
		</Routes>
    );
};

export default AppRoutes;