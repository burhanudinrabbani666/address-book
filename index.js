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
    console.log(`
👤 ${contact.name}
📧 ${contact.email}
📞 ${contact.phone}
📌 Address:
    🏠 ${contact.address.street}, ${contact.address.streetDetails}
    🏙️ ${contact.address.subDistrict}, ${contact.address.city},${contact.address.zipCode}
    🌐 ${contact.address.country}
🎂 ${contact.birthday}
`);
  }
}

function displayContact(contact, id) {
  const displayContactById = contact.find((item) => item.id === id);
  if (displayContactById) {
    console.log(`
👤 ${displayContactById.name},
📧 ${displayContactById.email},
📞 ${displayContactById.phone},
📌 Address:
    🏠 ${displayContactById.address.street}, ${displayContactById.address.streetDetails},
    🏙️ ${displayContactById.address.subDistrict}, ${displayContactById.address.city},${displayContactById.address.zipCode},
    🌐 ${displayContactById.address.country},
🎂 ${displayContactById.birthday}
`);
  }
}

function searchContactFullName(contacts, keyword) {
  const foundContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(keyword.toLowerCase())
  );

  if (foundContact.length > 0) {
    displayContacts(foundContact);
  } else {
    console.log("contact not found!");
  }

  return foundContact;
}

function createContact(newContact) {
  const newId =
    dataContacts.length > 0 ? dataContacts[dataContacts.length - 1].id + 1 : 1;

  const contact = { id: newId, ...newContact };

  // update new data
  dataContacts = [...dataContacts, contact];
  displayContacts(dataContacts);
}
function deleteContact(contacts, id) {
  const deleteContactData = contacts.filter((item) => item.id !== id);

  return deleteContactData;
}

function editContact(contacts, id, data) {
  const updateContacts = contacts.map((contact) => {
    if (contact.id === id) {
      return { ...contact, ...data };
    }
    return contact;
  });
  return updateContacts;
}

// const editContactById = editContact(dataContacts, 1, { email: "agusagus@exm" });
// const newDataContact = editContactById;
// displayContact(newDataContact, 1);

// test delete contact
// dataContacts = deleteContact(dataContacts, 1);
// console.log(dataContacts);

// displayContacts(dataContacts);

// searchContactFullName(dataContacts, "nico");
// searchContactFullName(dataContacts, "agus mulyono");
// searchContactFullName(dataContacts, "angga"); // tidak ditemukan.

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

// display spesific contact
// displayContact(dataContacts, 1);

// const stringifiedDataContacts = JSON.stringify(dataContacts);
// localStorage.setItem("data contacts", stringifiedDataContacts);

//Local data Storage
const contactsFromLocalStorage = localStorage.getItem("data contacts");

const parsedContacts = JSON.parse(contactsFromLocalStorage);

console.log(parsedContacts);
