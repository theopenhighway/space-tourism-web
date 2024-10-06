// import React from 'react'
import { IsAuthenticated } from '../utils/auth';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = (): JSX.Element => {
    return IsAuthenticated() ?  <Navigate to="https://localhost:5173/auth/login" />: <Outlet/>

};
