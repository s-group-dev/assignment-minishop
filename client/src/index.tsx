import React from 'react';

import { createRoot } from "react-dom/client";
import { App } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Orders } from './Orders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "orders/",
    element: <Orders />
  }
]);

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<RouterProvider router={router} />);