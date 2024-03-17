import { Form, useLoaderData } from "react-router-dom";

// * Components
import Favorite from "../components/contact/Favorite";

export default function Contact() {
  const { contact: contactInfo } = useLoaderData();

  return (
    <section id="contact">
      <div>
        <img key={contactInfo.avatar} src={contactInfo?.avatar} />
      </div>

      <div>
        <h1>
          {`${contactInfo.firstName} ${contactInfo.lastName}`}{" "}
          <Favorite contactInfo={contactInfo} />
        </h1>

        {contactInfo.email && (
          <p className="email">
            <a target="_blank" href={`mailto:${contactInfo.email}`}>
              {contactInfo.email}
            </a>
          </p>
        )}

        {contactInfo.company && <p>{contactInfo.company}</p>}

        <footer>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>

          <Form
            method="post"
            action="destroy"
            onSubmit={(e) => {
              if (!confirm("Are you sure you want to delete this contact?")) {
                e.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </footer>
      </div>
    </section>
  );
}
