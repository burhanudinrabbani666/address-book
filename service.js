// function to render data contact

function renderDetailContactById(dataContacts, id) {
  const renderDetailContactById = dataContacts.find(
    (dataContacts) => dataContacts.id === id
  );
  if (!renderDetailContactById) return null;

  renderDetailContact(renderDetailContactById);
}

//////////////////////////////////
//////////////////////////////////
function searchContactByKeyData(keyword) {
  const contacts = loadContactsFromStorage() || []; // ambil data dari local storage;

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.fullName.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.phone.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.email.toLowerCase().includes(keyword.toLowerCase())
  ); //
  feather.replace(); // render ulang ikon
  return filteredContacts;
}

///////////////////////////////////////////
///////////////////////////////////////////

// ----------------------------------------------------
// ----------------------------------------------------
// function to changed main data contacts
function createdContact(newContactData) {
  const loadDataContacts = loadContactsFromStorage() || [];

  const newId =
    loadDataContacts.length > 0
      ? loadDataContacts[loadDataContacts.length - 1].id + 1
      : 1;

  const createdContactFields = {
    id: newId,
    fullName: newContactData.fullName,
    phone: newContactData.phone,
    email: newContactData.email,
    company: newContactData.company || null,
    birthdate: newContactData.birthdate || null,
    address: newContactData.address || null,
  };

  const isRequiredEmpty = checkRequiredFields(
    newContactData.fullName,
    newContactData.phone
  );

  if (isRequiredEmpty) {
    alert("❗ Required data (name, phone) cannot be empty");
    return false;
  }

  const isPhoneUsed = validatePhone(newContactData.phone);
  if (isPhoneUsed) {
    console.log("❌ Number already used");
    return false;
  }

  const updatedContacts = [...loadDataContacts, createdContactFields];
  saveToLocalStorage(updatedContacts);

  alert("✅ Contact successfully created");
  return updatedContacts;
}

function deleteContactById(contacts, id) {
  const contactToDelete = contacts.find((contact) => contact.id === id);

  if (confirm(`are you sure want to delete ${contactToDelete.fullName}`)) {
    const updatedDataContacts = contacts.filter((item) => item.id !== id);
    alert(`✅ successly delete contact : ${contactToDelete.fullName}`);
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
  saveToLocalStorage(updatecontact);
  return updatecontact;
}

// ----------------------------------------------------
// ----------------------------------------------------
// function to validate input data
function validatePhone(phone) {
  const loadDataContacts = loadContactsFromStorage() || [];
  return loadDataContacts.some((contact) => contact.phone === phone);
}

function checkRequiredFields(fullName, phone) {
  return !fullName || !phone;
}
//------------------------------------------------------
// -----------------------------------------------------
