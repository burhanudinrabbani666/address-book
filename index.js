let dataContacts = [
  {
    id: 1,
    name: "Agus Mulyono",
    email: "agus@example.com",
    phone: "081234567890",
    address: "Pakalan pari, Indaramyu",
    birthday: null,
    company: "Example Inc.",
    jobTitle: "Software Engineer",
    websiteUrl: "https://example.com",
  },
  {
    id: 2,
    name: "Dana Agung",
    email: "dana@exammple.com",
    phone: "081234567891",
    address: "Jl. Babakan blok kasab",
    birthday: null,
    company: "Example Inc.",
    jobTitle: "Software Engineer",
    websiteUrl: "https://example.com",
  },
  {
    id: 3,
    name: "Bowo MBG",
    email: "bowo@example.com",
    phone: "081234567892",
    address: "Susukan, Cirebon.",
    birthday: "1990-01-01",
    company: "Example Inc.",
    jobTitle: "Software Engineer",
    websiteUrl: "https://example.com",
  },
  {
    id: 4,
    name: "Ariel Tatum",
    email: "tatum@example.com",
    phone: "081234567893",
    address: "Ciwaringin,Cirebon",
    birthday: "1990-01-01",
    company: "Example Inc.",
    jobTitle: "Software Engineer",
    websiteUrl: "https://example.com",
  },
];

function displayContacts(contacts) {
  for (let index = 0; index < dataContacts.length; index++) {
    const contact = contacts[index];

    console.log(`
👤 ${contact.name}
📧 ${contact.email}
📞 ${contact.phone}
📌 ${contact.address}
🎂 ${contact.birthday}
🏛️ ${contact.company}
🪛 ${contact.jobTitle}
🌐 ${contact.websiteUrl}
`);
  }
}

function createContact(newContact) {
  const newId =
    dataContacts.length > 0 ? dataContacts[dataContacts.length - 1].id + 1 : 1;

  const contact = { id: newId, ...newContact };

  // Perbarui dataContacts dengan versi baru
  dataContacts = [...dataContacts, contact];
}

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

displayContacts(dataContacts);

function searchContact() {}
function deleteContact() {}
function editContact() {}
