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
import { getContacts, createContact } from "./api";

/**
 * <Form> prevents the browser from sending the request to the server, and sends it to your route
 * `action` instead.
 *
 * In Web semantics, a POST usually means some data is changing. By convention, React Router uses
 * this as a hint to automatically revalidate the data on the page after the `action` finishes.
 *
 * That means alls of your `useLoderData` hooks update, and the UI stays in sync with your data
 * automatically.
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    loader: getContacts,
    action: createContact,
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
