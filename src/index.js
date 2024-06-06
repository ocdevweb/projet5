import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
/* import "/css/styles.css"; */

import App, { loader as rootLoader } from "./App";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children: [
      {
        path: "/",
        element: <Root />,
        loader: rootLoader
      },
      {
        path: "rooms/:roomId",
        element: <div>Hello world! Rooms</div>,
      },
      {
        path: "about",
        element: <div>Hello world! about</div>,
      },
      {
        path: '*',
        element: <>error</>
      }
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);