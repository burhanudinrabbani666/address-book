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
renderKeyDataContacts(dataContacts);

deleteContactById(dataContacts, 2);
renderKeyDataContacts(dataContacts);
