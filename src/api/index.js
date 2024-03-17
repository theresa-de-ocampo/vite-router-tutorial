import localforage from "localforage";
// import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import { faker } from "@faker-js/faker";

export async function fetchContacts(query) {
  await fakeNetwork(`fetchContacts:${query}`);

  let contacts = await localforage.getItem("contacts");
  if (!contacts) contacts = [];
  // if (query) {
  //   contacts = matchSorter(contacts, query, {
  //     keys: ["firstName", "lastName"]
  //   });
  // }

  return contacts.sort(sortBy("lastName", "createdAt"));
}

export async function postContact() {
  await fakeNetwork();

  let id = Math.random().toString(36).substring(2, 9);
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  let contact = {
    id,
    firstName,
    lastName,
    avatar: faker.image.avatar(),
    company: faker.company.name(),
    email: faker.internet.email({ firstName, lastName }),
    favorite: false,
    createdAt: Date.now()
  };

  let contacts = await fetchContacts();
  contacts.unshift(contact);
  await set(contacts);

  return contact;
}

export async function fetchContact(id) {
  await fakeNetwork(`contact:${id}`);
  let contacts = await localforage.getItem("contacts");
  let contact = contacts.find((contact) => contact.id === id);

  return contact ?? null;
}

export async function patchContact(id, updates) {
  await fakeNetwork();
  let contacts = await localforage.getItem("contacts");
  let contact = contacts.find((contact) => contact.id === id);
  if (!contact) throw new Error("No contact found for", id);
  Object.assign(contact, updates);
  await set(contacts);

  return contact;
}

export async function deleteContact(id) {
  let contacts = await localforage.getItem("contacts");
  let index = contacts.findIndex((contact) => contact.id === id);

  if (index > -1) {
    contacts.splice(index, 1);
    await set(contacts);

    return true;
  }

  return false;
}

function set(contacts) {
  return localforage.setItem("contacts", contacts);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}
