import { fetchContact } from "../api";

export default function useContact() {
  async function getContact({ params }) {
    const contact = await fetchContact(params.contactId);
    return { contact };
  }

  return { getContact };
}
