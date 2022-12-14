import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "../auth/PrivateRoutes";
import LoadingSpinner from "../components/Utility/LoadingSpinner";

const Login = lazy(() => import("../components/Login"));
const Home = lazy(() => import("../components/Home"));
const Test = lazy(() => import("../components/Test"));

export const AppRoutes = ({ user }) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/test/:levelId" element={<Test />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
};
