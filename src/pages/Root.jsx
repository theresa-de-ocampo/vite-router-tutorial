import { Outlet, Link, useLoaderData, NavLink } from "react-router-dom";
import Header from "../components/root/Header";

export default function Root() {
  const { contacts } = useLoaderData();

  return (
    <>
      <aside>
        <Header />
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`/contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    {contact.firstName} {contact.lastName}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No Data</i>
            </p>
          )}
        </nav>
        <Link to="/">
          <h1>React Router Contacts</h1>
        </Link>
      </aside>
      <main id="detail">
        <Outlet />
      </main>
    </>
  );
}
