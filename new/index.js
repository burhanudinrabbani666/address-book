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
    📌 ${contactIndex.address} 
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

  if (searchContactByKeyData.length == 0) {
    console.log(`data not found ❎`);
    return [];
  }
  console.log(`contact found ✅`);
  searchContactByKeyData.forEach((contact) => renderDetailContact(contact));
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
  address
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
    address: address ?? null,
  };

  // fullName, phone, email EMPTY
  const isRequiredEmpty = checkRequiredFields(newName, newPhone);
  if (isRequiredEmpty) {
    console.log(`❗ Required data ( name, phone) cannot empty`);
    return;
  }

  // Validate data: phone and email
  const validate = validatePhone(newPhone);
  if (validate == true) {
    console.log("❌ Number already used");
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
  newCompanyName,
  newBirthdate,
  newAddress
) {
  const updatecontact = inputDataContacts.map((contact) => {
    if (contact.id === id) {
      console.log("update contact success");

      return {
        ...contact,
        ...(newName && { fullName: newName }),
        ...(newPhone && { phone: newPhone }),
        ...(newEmail && { email: newEmail }),
        ...(newCompanyName && { company: newCompanyName }),
        ...(newBirthdate && { birthdate: newBirthdate }),
        ...(newAddress && { address: newAddress }),
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
function validatePhoneAndEmail(phone) {
  return dataContacts.some((contact) => contact.phone === phone);
}

function checkRequiredFields(fullName, phone, email) {
  return !fullName || !phone;
}
//------------------------------------------------------
// -----------------------------------------------------

renderKeyDataContacts(dataContacts);
