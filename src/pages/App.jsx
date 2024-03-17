import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// * Styles
import "../index.css";

// * Pages
import Root from "./Root";
import Error from "./Error";
import Contact from "./Contact";

// * APIs
import { fetchContacts, postContact } from "../api";

// * Hooks
import useContact from "../hooks/contact";

export default function App() {
  const { getContact } = useContact();

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
      loader: fetchContacts,
      action: postContact,
      children: [
        {
          path: "contacts/:contactId",
          element: <Contact />,
          loader: getContact
        }
      ]
    }
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
