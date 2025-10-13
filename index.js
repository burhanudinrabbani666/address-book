let dataContacts = [
  {
    id: 1,
    name: "Agus Mulyono",
    email: "agus@example.com",
    phone: "081234567890",
    address: "Jl. Pangkalan No.4, Pangkalan Pari, Ampel, Majalengka",
    birthday: new Date("2000-10-13"),
  },
  {
    id: 2,
    name: "Dana Agung",
    email: "dana@exammple.com",
    phone: "081234567891",
    address: "Jl. Kasab No.3, Babakan, Ciwringin, Cirebon.",
    birthday: new Date("2021-01-03"),
  },
  {
    id: 3,
    name: "Rivan",
    email: "rivan@example.com",
    phone: "081234567892",
    address: "Jl. Majasari No.5, Majasari, Ligung, Majalengka.",
    birthday: "1997-04-13",
  },
  {
    id: 4,
    name: "Nico",
    email: "nico@example.com",
    phone: "081234567893",
    address: "Jl. Ki Brajanata No.4, Budur, Ciwaringin, Cirebon",
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

function searchContact(contacts, keyword) {
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
}

displayContacts(dataContacts);
searchContact(dataContacts, "agus mulyono");
searchContact(dataContacts, "angga"); // tidak ditemukan.
createContact({
  name: "Budi Santoso",
  email: "budi@example.com",
  phone: "081234567899",
  address: "Cirebon, Jawa Barat",
  birthday: "1992-03-21",
  company: "Tech Corp",
  jobTitle: "UI Designer",
  websiteUrl: "https://techcorp.com",
});

function deleteContact() {}
function editContact() {}
