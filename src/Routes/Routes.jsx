import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorElement from '../Pages/ErrorElement/ErrorElement';
import Home from '../Pages/Home/Home';
import AllApps from '../Pages/AllApps/AllApps';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch('appData.json'),
        Component: Home
      },
      {
        path: "/apps",
        loader: () => fetch('appData.json'),
        Component: AllApps
      }
    ]
  },
]);