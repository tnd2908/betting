import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/layout";
import Home from "../pages/Home";
import LoginPage from "../pages/Login";
import MatchBetPage from "../pages/MatchBet";
import MatchesPage from "../pages/Matches";
import NotFound from "../pages/NotFound/NotFound";
import UserPage from "../pages/User";
import ChangeAvatarForm from "../pages/User/Component/ChangeAvatarForm";
import ChangeInforForm from "../pages/User/Component/ChangeInforForm";
import ChangePasswordForm from "../pages/User/Component/ChangePasswordForm";

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
        <Route path="/user" element={<UserPage />}>
          <Route path="" element={<ChangeInforForm />}></Route>
          <Route path="password" element={<ChangePasswordForm />}></Route>
          <Route path="avatar" element={<ChangeAvatarForm />}></Route>
        </Route>        
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default AppRoutes;
