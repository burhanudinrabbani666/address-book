let dataContacts = [
  {
    id: 1,
    name: "Agus Mulyono",
    email: "agus@example.com",
    phone: "+62-812-3456-7890",
    address: {
      street: "Jl. pangkalan Node.4",
      streetDetails: "Pangkalan Pari",
      subDistrict: "Ampel",
      city: "Indramayu",
      zipCode: "45272",
      country: "Indonesia",
    },
    birthday: new Date("2000-10-13"),
  },
  {
    id: 2,
    name: "Dana Agung",
    email: "dana@exammple.com",
    phone: "+62-812-3456-7891",
    address: {
      street: "Jl. Kasab No.3",
      streetDetails: "Babakan",
      subDistrict: "Ciwaringin",
      city: "Cirebon",
      zipCode: "45167",
      country: "Indonesia",
    },
    birthday: new Date("2021-01-03"),
  },
  {
    id: 3,
    name: "Rivan",
    email: "rivan@example.com",
    phone: "+62-812-3456-7892",
    address: {
      street: "Jl. Majasari No.5",
      streetDetails: "Majasari",
      subDistrict: "Ligung",
      city: "Majalengka",
      zipCode: "45456",
      country: "Indonesia",
    },
    birthday: new Date("1997-04-13"),
  },
  {
    id: 4,
    name: "Nico",
    email: "nico@example.com",
    phone: "+62-812-3456-7893",
    address: {
      street: "Jl. Ki Braja Nata No.1",
      streetDetails: "Budur",
      subDistrict: "Ciwaringin",
      city: "Cirebon",
      zipCode: "45167",
      country: "Indonesia",
    },
    birthday: new Date("2001-02-20"),
  },
];

function displayContacts(contacts) {
  for (let contact of contacts) {
    renderContact(contact);
  }
}

function displayContactById(contacts, id) {
  const contact = contacts.find((contact) => contact.id === id);

  if (!contact) return null;

  renderContact(contact);
}

function renderContact(contact) {
  console.log(`
👤 ${contact.name},
📧 ${contact.email},
📞 ${contact.phone},
📌 Address:
    🏠 ${contact.address.street}, ${contact.address.streetDetails},
    🏙️ ${contact.address.subDistrict}, ${contact.address.city},${contact.address.zipCode},
    🌐 ${contact.address.country},
🎂 ${contact.birthday}
`);
}

function searchContactsByName(contacts, keyword) {
  const foundContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(keyword.toLowerCase())
  );

  if (foundContacts.length <= 0) {
    console.log("Contact not found!");
    return null;
  }

  return foundContacts;
}

function createContact(newContact) {
  const newId =
    dataContacts.length > 0 ? dataContacts[dataContacts.length - 1].id + 1 : 1;

  const contact = { id: newId, ...newContact };

  dataContacts = [...dataContacts, contact];
}

function deleteContact(contacts, id) {
  const updatedContacts = contacts.filter((item) => item.id !== id);

  dataContacts = updatedContacts;
}

// TODO: Destructure newContactData
function editContact(contacts, id, newContactData) {
  const updatedContacts = contacts.map((contact) => {
    if (contact.id === id) {
      return { ...contact, ...newContactData };
    }
    return contact;
  });

  dataContacts = updatedContacts;
}

// -----------------------------------------------

// const editContactById = editContact(dataContacts, 1, { email: "agusagus@exm" });
// const newDataContact = editContactById;
// displayContact(newDataContact, 1);

// test delete contact
// dataContacts = deleteContact(dataContacts, 1);
// displayContacts(dataContacts);

// searchContactFullName(dataContacts, "agus mulyono");
// searchContactFullName(dataContacts, "angga"); // tidak ditemukan.
// searchContactFullName(dataContacts, "nico");

// createContact({
//   name: "Budi Santoso",
//   email: "budi@example.com",
//   phone: "+62- 81234567899",
//   address: {
//     street: "Jl mawar No.5",
//     streetDetails: "Perumahan Mawar Indah",
//     subDistrict: "Mawar Merah",
//     city: "Tangerang",
//     zipCode: "54567",
//     country: "Indonesia",
//   },
//   birthday: "1992-03-21",
// });
// displayContacts(dataContacts);

// display spesific contact
// displayContact(dataContacts, 1);

// const stringifiedDataContacts = JSON.stringify(dataContacts);
// localStorage.setItem("data contacts", stringifiedDataContacts);

//Local data Storage
// const contactsFromLocalStorage = localStorage.getItem("data contacts");

// const parsedContacts = JSON.parse(contactsFromLocalStorage);

// console.log(parsedContacts);
