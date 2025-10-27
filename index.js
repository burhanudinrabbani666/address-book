"use strict";

let dataContacts = [
  {
    id: 1,
    fullName: "Burhanudin Rabbani",
    phone: "+62-1234-5678-999",
    email: "bani@exm.com",
    company: null,
    birthdate: "2002-11-14",
    address: "Jl. Prapatan No.09, Ciwaringin, Cirebon, Indonesia",
  },
  {
    id: 2,
    fullName: "nico",
    phone: "+62-1234-7676-999",
    email: "nico@exm.com",
    company: "PT Kaldu Sari Nabati",
    birthdate: "2001-11-14",
    address: "Jl. Mawar No.04, Ligung, Majalengka, Indonesia",
  },
  {
    id: 3,
    fullName: "Siti Rahmawati",
    phone: "+62-812-3456-7890",
    email: "siti.rahmawati@example.com",
    company: "CV Maju Jaya Abadi",
    birthdate: "1998-05-03",
    address: "Jl. Melati, Antapati, Bandung, Indonesia",
  },
  {
    id: 4,
    fullName: "Budi Santoso bani",
    phone: "+62-856-9876-5544",
    email: "budi.santoso@ptmegah.co.id",
    company: "PT Megah Karya Sentosa",
    birthdate: "1995-02-21",
    address: "Jl. Kenaga No.07, Sukolilo, Surabaya, Indonesia",
  },
  {
    id: 5,
    fullName: "Andi Pratama",
    phone: "+62-813-3344-2211",
    email: "andi.pratama@indotech.com",
    company: "IndoTech Global",
    birthdate: "2000-09-09",
    address: "Jl. Merpati No.01, Pondok Aren, Tangerang Selatan, Indonesia",
  },
];

function setInitialContacts() {
  const contacts = loadContactsFromStorage();

  if (contacts.length === 0) {
    saveToLocalStorage(dataContacts);
  }
}

function renderContacts() {
  setInitialContacts();

  const contacts = loadContactsFromStorage();

  // ambil query
  const searchParams = new URLSearchParams(window.location.search);
  const query = searchParams.get("q");

  // const searchResult = searchContactByKeyData(query);
  // DOM
  const mainContactElement = document.getElementById("main-contacts");

  // render if have query
  let contactsToRender = contacts;

  if (query && query.trim() !== "") {
    contactsToRender = searchContactByKeyData(query);
  }

  if (contactsToRender.length === 0) {
    mainContactElement.innerHTML = `
      <div class="text-center text-neutral-500 py-10">No contacts found</div>
    `;
    return;
  }

  const localAsString = contactsToRender
    .map((contact) => {
      return renderContact(contact);
    })
    .join("");
  mainContactElement.innerHTML = `<div id="contact" class="flex flex-col ">
    ${localAsString}
  </div>`;

  const contactsQuantity = document.getElementById("quantity");
  contactsQuantity.innerHTML = `(${contacts.length})`;

  feather.replace();
}

function renderContact(contact) {
  return `
    <div href="/detail-contact/?id=${contact.id}" 
    class="group flex justify-between py-5 px-5 border-b border-neutral-200 hover:rounded-xl hover:bg-neutral-50 hover:shadow-md hover:transition duration-200">

      <p class="inline-block w-1/6 truncate text-neutral-900">${contact.fullName}</p>
      <p class="inline-block w-1/6 truncate text-neutral-600 hover:text-blue-500">${contact.phone}</p>
      <p class="inline-block w-1/6 truncate text-neutral-600 hover:text-blue-500">${contact.email}</p>
      <p class="inline-block w-1/6 truncate text-neutral-600">${contact.company}</p>
      <div class="w-1/6 px-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" >

        <a
        href="/detail-contact/?id=${contact.id}"
        class="py-1 px-2.5 bg-neutral-50 rounded-xl hover:bg-white hover:shadow-md active:bg-neutral-300 ">
          <i data-feather="eye" width="16px" height="16px"></i>
        </a>

        <a
        href="/edit-contact/?id=${contact.id}"
        class="py-1 px-2.5 bg-neutral-50 rounded-xl hover:bg-white hover:shadow-md active:bg-neutral-300 ">
          <i data-feather="edit-2" width="16px" height="16px"></i>
        </a>

        <button
        onclick="deleteContactById(${contact.id})"
        class="py-1 px-2.5 bg-neutral-50 rounded-xl hover:bg-white hover:shadow-md active:bg-neutral-300 ">
          <i data-feather="trash" width="16px" height="16px"></i>
        </button>

      </div>
    </div>
  `;
}

function deleteContactById(id) {
  const contacts = loadContactsFromStorage();
  const contactToDelete = contacts.find((contact) => contact.id == id);

  const updatedContacts = contacts.filter(
    (item) => Number(item.id) !== Number(id)
  );

  saveToLocalStorage(updatedContacts);
  renderContacts(updatedContacts);

  feather.replace();
}

document.addEventListener("DOMContentLoaded", () => {
  renderContacts();
  feather.replace();
});
