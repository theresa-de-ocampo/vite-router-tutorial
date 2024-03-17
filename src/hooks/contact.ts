import { fetchContact, fetchContacts, postContact } from "../api";

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
    return { contact };
  }

  return { getContact, listContacts, createContact };
}
