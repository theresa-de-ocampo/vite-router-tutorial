import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// * Styles
import "./index.css";

// * Pages
import Root from "./pages/Root";
import Error from "./pages/Error";
import Contact from "./pages/Contact";

// * APIs
import { getContacts } from "./api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    loader: getContacts,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
