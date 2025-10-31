function saveToLocalStorage(contact) {
  localStorage.setItem("contact-data", JSON.stringify(contact));
}

function loadContactsFromStorage() {
  const loadContact = localStorage.getItem("contact-data");
  return loadContact ? JSON.parse(loadContact) : [];
}

function saveGroups(label) {
  localStorage.setItem("labels-data", JSON.stringify(label));
}

function loadGroups() {
  const loadLabels = localStorage.getItem("labels-data");
  return loadLabels ? JSON.parse(loadLabels) : [];
}
