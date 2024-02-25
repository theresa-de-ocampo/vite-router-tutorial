import { useRouteError } from "react-router-dom";

export default function Error() {
  const e = useRouteError();

  return (
    <main id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error occurred.</p>
      <p>
        <i>{e.statusText || e.message}</i>
      </p>
    </main>
  );
}
