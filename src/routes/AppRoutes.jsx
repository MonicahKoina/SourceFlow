import React from "react";
import { Route, Routes } from "react-router";
import Requests from "../pages/needs/Requests";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Requests />}></Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
