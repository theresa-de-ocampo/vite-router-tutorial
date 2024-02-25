import { Outlet, Link, useLoaderData } from "react-router-dom";
import Header from "../components/root/Header";

export default function Root() {
  const { contacts } = useLoaderData();

  return (
    <>
      <aside>
        <h1>React Router Contacts</h1>
        <Header />
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contacts.id}>
                  <Link to={`/contacts/${contacts.id}`}>
                    {contact.firstName} {contact.lastName}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No Data</i>
            </p>
          )}
        </nav>
      </aside>
      <main id="detail">
        <Outlet />
      </main>
    </>
  );
}
