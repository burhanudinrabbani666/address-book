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
  const appElement = document.getElementById("app");

  appElement.innerHTML = `<ul id="contacts" class="space-y-4">
  ${contacts.map((contact) => renderContact(contact)).join("")}
  </ul>`;
}

function displayContactById(contacts, id) {
  const displayContactById = contacts.find((contact) => contact.id === id);
  if (!contacts) return null;

  renderContact(displayContactById);
}

function renderContact(contact) {
  return `<li class="p-2 border border-black rounded">
<h3 class="font-bold text-lg">👤 ${contact.name} </h3>
<p>📧 ${contact.email} </p>
<p>📞 ${contact.phone} </p>
<p>📌 <strong>Address:</strong></p>
    <p>🏠 ${contact.address.street}, ${contact.address.streetDetails}</p>
    <p>🏙️ ${contact.address.subDistrict}, ${contact.address.city},${contact.address.zipCode},</p>
    <p>🌐 ${contact.address.country},</p>
<p>🎂 ${contact.birthday}</p>
</li>`;
}

function searchContactsByName(contacts, keyword) {
  const foundContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(keyword.toLowerCase())
  );

  if (foundContacts <= 0) {
    console.log(`data not yet available `);
    return null;
  }

  return foundContacts;
}

function createContact(newContact) {
  const newId =
    dataContacts.length > 0 ? dataContacts[dataContacts.length - 1].id + 1 : 1;

  const contact = { id: newId, ...newContact };

  // update new data
  dataContacts = [...dataContacts, contact];
}

function deleteContact(contacts, id) {
  const updatedDataContacts = contacts.filter((item) => item.id !== id);

  dataContacts = updatedDataContacts;
}

function editContact(contacts, id, newContactData) {
  const updatedContacts = contacts.map((contact) => {
    if (contact.id === id) {
      return { ...contact, ...newContactData };
    }
    return contact;
  });
  dataContacts = updatedDataContacts;
}

displayContacts(dataContacts);
