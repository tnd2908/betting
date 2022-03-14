import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout/layout";
import Home from "../Pages/Home";
import LoginPage from "../Pages/Login";
import MatchBetPage from "../Pages/MatchBet";
import MatchesPage from "../Pages/Matches";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route element={<Home />} path="/"></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<LoginPage />}></Route>
        <Route path="/matches" element={<Outlet />}>
          <Route path="" element={<MatchesPage />} />
          <Route path=":idMatch" element={<MatchBetPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
