import { Form } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <form id="search-form" role="search">
        <input
          id="search"
          name="search"
          aria-label="Search Contacts"
          placeholder="Search"
          type="search"
        />
        <div id="search-spinner" aria-hidden hidden={true} />
        <div className="sr-only" aria-live="polite"></div>
      </form>
      <Form method="post">
        <button type="submit">New</button>
      </Form>
    </header>
  );
}
