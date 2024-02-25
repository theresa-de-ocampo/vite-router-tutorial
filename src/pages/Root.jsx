import Header from "../components/root/Header";

export default function Root() {
  return (
    <>
      <aside>
        <h1>React Router Contacts</h1>
        <Header />
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main id="detail"></main>
    </>
  );
}
