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
    company: "PT SIMNU Majalengka",
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
    company: "PT Kasab Steel",
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
    company: "PT Nabati Majalengka",
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
    company: "PT Kobe",
    birthday: new Date("2001-02-20"),
  },
];

function displayContacts(contacts) {
  const appElement = document.getElementById("main-contact");

  appElement.innerHTML = `<ul id="contacts">
  ${contacts.map((contact) => renderContact(contact)).join("")}
  </ul>`;
}

function displayContactById(contacts, id) {
  const displayContactById = contacts.find((contact) => contact.id === id);
  if (!contacts) return null;

  renderContact(displayContactById);
}

function renderContact(contact) {
  return `<li>
  <a href="" class="py-5 px-2 flex justify-between w-full border-b border-neutral-300 bg hover:bg-neutral-200 transition duration-150" >
  <h3 class="font-bold text-lg w-50"> ${contact.name} </h3>
<div class="inline-block w-50 "> ${contact.email}</div> 
<div class="inline-block w-50 "> ${contact.phone}</div> 
<div class="inline-block w-50 "> ${contact.company}</div>
<div class="inline-block w-50 ">Group</div> 
<div class="inline-block w-50"> Hallo ini setting</div>
  </a>

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

// 📌 Address:
//     🏠 ${contact.address.street}, ${contact.address.streetDetails}
//     🏙️ ${contact.address.subDistrict}, ${contact.address.city},${contact.address.zipCode},
//     🌐 ${contact.address.country},
// 🎂 ${contact.birthday}
