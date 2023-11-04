import { Home, Contact, Login, Signup, SubNote } from "./pages/index.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { noteApiSlice } from "./features/notes/noteApiSlice.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "subnote/:id",
        element: <SubNote />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider api={noteApiSlice}>
      <RouterProvider router={router} />
    </ApiProvider>
  </React.StrictMode>
);
