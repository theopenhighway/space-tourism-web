// import React,{Suspense} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from '../pages/Home';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>
  },

]);

const AppRouter = (): JSX.Element => <RouterProvider router={routes} />;

export default AppRouter;
