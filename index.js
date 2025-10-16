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
    phone: "+62- 812-3456-7891",
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
    birthday: "1997-04-13",
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
    birthday: "2001-02-20",
  },
];

function displayContacts(contacts) {
  for (let contact of contacts) {
    console.log(`
👤 ${contact.name}
📧 ${contact.email}
📞 ${contact.phone}
📌 ${contact.address}
🎂 ${contact.birthday}
`);
  }
}

function searchContactFullName(contacts, keyword) {
  const foundContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(keyword.toLowerCase())
  );

  if (foundContact.length > 0) {
    console.log("✅ pencarian berhasil\n");
    displayContacts(foundContact); // function bisa dimasukan kefunction
  } else {
    console.log("❎ kontak tidak ditemukan!");
  }

  return foundContact;
}

function createContact(newContact) {
  const newId =
    dataContacts.length > 0 ? dataContacts[dataContacts.length - 1].id + 1 : 1;

  const contact = { id: newId, ...newContact };

  // Perbarui dataContacts dengan versi baru
  dataContacts = [...dataContacts, contact];
  displayContacts(dataContacts);
}

displayContacts(dataContacts);
// searchContactFullName(dataContacts, "agus mulyono");
// searchContactFullName(dataContacts, "angga"); // tidak ditemukan.
// createContact({
//   name: "Budi Santoso",
//   email: "budi@example.com",
//   phone: "+62- 81234567899",
//   address: "Cirebon, Jawa Barat",
//   birthday: "1992-03-21",
// });
