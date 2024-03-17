import { Form, useLoaderData } from "react-router-dom";

export default function EditContact() {
  const { contact } = useLoaderData();

  return (
    <Form id="contact-form" method="post">
      <label>
        <span>First Name</span>
        <input type="text" name="firstName" defaultValue={contact.firstName} />
      </label>

      <label>
        <span>Last Name</span>
        <input type="text" name="lastName" defaultValue={contact.lastName} />
      </label>

      <label>
        <span>Email</span>
        <input type="email" name="email" defaultValue={contact.email} />
      </label>

      <label>
        <span>Company</span>
        <input type="text" name="company" defaultValue={contact.company} />
      </label>

      <label>
        <span>Avatar</span>
        <input type="url" name="avatar" defaultValue={contact.avatar} />
      </label>

      <footer>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </footer>
    </Form>
  );
}
