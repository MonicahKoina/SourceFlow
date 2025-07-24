import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Hero";
import Register from "../pages/user/Register";
import Login from "../pages/user/Login";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
