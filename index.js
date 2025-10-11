const dataContacts = [
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
  for (let index = 0; index < contacts.length; index++) {
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

const createContact = [
  ...dataContacts,
  {
    id: 5,
    name: "Risaldi sedeki",
    email: "Risaldi@example.com",
    phone: "08123666660",
    address: "ciwaringin, cirebon",
    birthday: new Date("2001 : 04 :20"),
    company: "Example Inc.",
    jobTitle: "Software Engineer",
    websiteUrl: "https://example.com",
  },
];

console.log(createContact);
displayContacts(createContact);

function showContacts() {}
function editContact() {}
function searchContact() {}
function addContact() {}
function removeContact() {}
function addContactToGroup() {}
function createGroup() {}
