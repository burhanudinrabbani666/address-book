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
function validatePhone(phone) {
  return dataContacts.some((contact) => contact.phone === phone);
}

function checkRequiredFields(fullName, phone) {
  return !fullName || !phone;
}
//------------------------------------------------------
// -----------------------------------------------------
