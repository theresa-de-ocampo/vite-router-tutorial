import { fetchContact, fetchContacts, patchContact, postContact } from "../api";
import { redirect } from "react-router-dom";

export default function useContact() {
  async function getContact({ params }) {
    const contact = await fetchContact(params.contactId);
    return { contact };
  }

  async function listContacts() {
    const contacts = await fetchContacts();
    return { contacts };
  }

  async function createContact() {
    const contact = await postContact();
    return redirect(`/contacts/${contact.id}`);
  }

  async function updateContact({ request, params }) {
    const formData = await request.formData();
    // console.log(formData.get("avatar"));

    const updates = Object.fromEntries(formData);
    await patchContact(params.contactId, updates);

    return redirect(`/contacts/${params.contactId}`);
  }

  return { getContact, listContacts, createContact, updateContact };
}
