"use strict";

let dataContacts = [
  {
    id: 1,
    fullName: "Burhanudin Rabbani",
    phone: "+62-1234-5678-999",
    email: "bani@exm.com",
    company: null,
    birthdate: "2002-11-14",
    address: {
      street: "Jl. prapatan No.5",
      subDistrict: "Ciwaringin",
      city: "Cirebon",
      province: "Jawa Barat",
      zipcode: "45167",
      country: "Indonesia",
    },
  },
  {
    id: 2,
    fullName: "nico",
    phone: "+62-1234-7676-999",
    email: "nico@exm.com",
    company: "PT Kaldu Sari Nabati",
    birthdate: "2001-11-14",
    address: {
      street: "Jl Mawar No.32",
      subDistrict: "ligung",
      city: "Majalengka",
      province: "Jawa Barat",
      zipcode: "45144",
      country: "Indonesia",
    },
  },
  {
    id: 3,
    fullName: "Siti Rahmawati",
    phone: "+62-812-3456-7890",
    email: "siti.rahmawati@example.com",
    company: "CV Maju Jaya Abadi",
    birthdate: "1998-05-03",
    address: {
      street: "Jl. Melati No. 12",
      subDistrict: "Antapani",
      city: "Bandung",
      province: "Jawa Barat",
      zipcode: "40291",
      country: "Indonesia",
    },
  },
  {
    id: 4,
    fullName: "Budi Santoso",
    phone: "+62-856-9876-5544",
    email: "budi.santoso@ptmegah.co.id",
    company: "PT Megah Karya Sentosa",
    birthdate: "1995-02-21",
    address: {
      street: "Jl. Kenanga No. 7",
      subDistrict: "Sukolilo",
      city: "Surabaya",
      province: "Jawa Timur",
      zipcode: "60111",
      country: "Indonesia",
    },
  },
  {
    id: 5,
    fullName: "Andi Pratama",
    phone: "+62-813-3344-2211",
    email: "andi.pratama@indotech.com",
    company: "IndoTech Global",
    birthdate: "2000-09-09",
    address: {
      street: "Jl. Merpati No. 5",
      subDistrict: "Pondok Aren",
      city: "Tangerang Selatan",
      province: "Banten",
      zipcode: "15221",
      country: "Indonesia",
    },
  },
];

function renderKeyDataContacts(dataContacts) {
  for (let index = 0; index < dataContacts.length; index++) {
    const contact = dataContacts[index];
    console.log(`
    👤 ${contact.fullName}
    📱 ${contact.phone}
    📧 ${contact.email}`);
  }
}

function renderDetailContact(contactIndex) {
  console.log(`
    👤 ${contactIndex.fullName}
    📱 ${contactIndex.phone}
    📧 ${contactIndex.email}
    🏢 ${contactIndex.company}
    🎂 ${contactIndex.birthdate}
    📌 Address: 
        ${contactIndex.address.street}
        ${contactIndex.address.subDistrict}, ${contactIndex.address.city},
        ${contactIndex.address.province}, ${contactIndex.address.country}, ${contactIndex.address.zipcode}.
`);
}

// renderContacts(dataContacts);
renderKeyDataContacts(dataContacts);
