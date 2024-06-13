import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import App, { loader as rootLoader } from "./App";
import Root from "./routes/root";
import Room, { loader as roomLoader } from "./routes/room";
import About from "./routes/about";

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
        element: <Room  />,
        loader: roomLoader
      },
      {
        path: "about",
        element: <About />,
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