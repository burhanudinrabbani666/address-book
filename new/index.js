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
    fullName: "Budi Santoso bani",
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

// ----------------------------------------------------
// ----------------------------------------------------
// function to render data contact
function renderKeyDataContacts(dataContacts) {
  for (let index = 0; index < dataContacts.length; index++) {
    const contact = dataContacts[index];
    console.log(`
    👤 ${contact.fullName}
    📱 ${contact.phone}
    📧 ${contact.email}`);
  }
}
function renderDetailContactById(dataContacts, id) {
  const renderDetailContactById = dataContacts.find(
    (dataContacts) => dataContacts.id === id
  );
  if (!renderDetailContactById) return null;

  renderDetailContact(renderDetailContactById);
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
function searchContactByKeyData(keyword) {
  const keywordLower = keyword.toLowerCase();
  const searchContactByKeyData = dataContacts.filter(
    (contact) =>
      contact.fullName.toLowerCase().includes(keywordLower) ||
      contact.phone.toLowerCase().includes(keywordLower) ||
      contact.email.toLowerCase().includes(keywordLower)
  );

  if (searchContactByKeyData == 0) {
    console.log(`data not found ❎`);
    return [];
  }
  console.log(`contact found ✅`);
  return searchContactByKeyData;
}
// ----------------------------------------------------
// ----------------------------------------------------
// function to changed main data contacts
function createdContact(
  newName,
  newPhone,
  newEmail,
  companyName,
  birthdate,
  addressStreet,
  addressSubDistrict,
  addresscity,
  addressprovince,
  addresszipcode,
  addresscountry
) {
  // how to make id?
  const newId =
    dataContacts.length > 0 ? dataContacts[dataContacts.length - 1].id + 1 : 1;
  const createdContactFields = {
    id: newId,
    fullName: newName,
    phone: newPhone,
    email: newEmail,
    company: companyName ?? null,
    birthdate: birthdate ?? null,
    address: {
      street: addressStreet ?? null,
      subDistrict: addressSubDistrict ?? null,
      city: addresscity ?? null,
      province: addressprovince ?? null,
      zipcode: addresszipcode ?? null,
      country: addresscountry ?? null,
    },
  };

  // fullName, phone, email EMPTY
  const isRequiredEmpty = checkRequiredFields(newName, newPhone, newEmail);
  if (isRequiredEmpty) {
    console.log(`❗ Required data ( name, phone, email) cannot empty`);
    return;
  }

  // Validate data: phone and email
  const validate = validatePhoneAndEmail(newPhone, newEmail);
  if (validate == true) {
    console.log("❌ Data already used");
    return; // for canceling all proses create contact
  }

  const createNewContactSuccess = [...dataContacts, createdContactFields];

  dataContacts = createNewContactSuccess;
  console.log("✅ Contact successfully created");
  return dataContacts;
}

function deleteContactById(contacts, id) {
  const contactToDelete = contacts.find((contact) => contact.id === id);

  if (confirm(`are you sure want to delete ${contactToDelete.fullName}`)) {
    const updatedDataContacts = contacts.filter((item) => item.id !== id);
    console.log(`✅ successly delete contact : ${contactToDelete.fullName}`);
    const newDataContacts = updatedDataContacts;
    dataContacts = newDataContacts;
    return newDataContacts;
  } else {
    return;
  }
}

function editedContact(
  inputDataContacts,
  id,
  newName,
  newPhone,
  newEmail,
  companyName,
  birthdate,
  addressStreet,
  addressSubDistrict,
  addresscity,
  addressprovince,
  addresszipcode,
  addresscountry
) {
  const updatecontact = inputDataContacts.map((contact) => {
    if (contact.id === id) {
      console.log("update contact success");

      return {
        ...contact,
        ...(newName && { fullName: newName }),
        ...(newPhone && { phone: newPhone }),
        ...(newEmail && { email: newEmail }),
        ...(companyName && { company: companyName }),
        ...(birthdate && { birthdate }),
        ...(addressStreet ||
        addressSubDistrict ||
        addresscity ||
        addressprovince ||
        addresszipcode ||
        addresscountry
          ? {
              address: {
                ...contact.address,
                ...(addressStreet && { street: addressStreet }),
                ...(addressSubDistrict && { subDistrict: addressSubDistrict }),
                ...(addresscity && { city: addresscity }),
                ...(addressprovince && { province: addressprovince }),
                ...(addresszipcode && { zipcode: addresszipcode }),
                ...(addresscountry && { country: addresscountry }),
              },
            }
          : {}),
      };
    }
    return contact;
  });
  dataContacts = updatecontact;
  return updatecontact;
}

// ----------------------------------------------------
// ----------------------------------------------------
// function to validate input data
function validatePhoneAndEmail(phone, email) {
  return dataContacts.some(
    (contact) => contact.email === email || contact.phone === phone
  );
}

function checkRequiredFields(fullName, phone, email) {
  return !fullName || !phone || !email;
}

console.log(deleteContactById(dataContacts, 1));
