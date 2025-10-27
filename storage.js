function saveToLocalStorage(contact) {
  localStorage.setItem("contact-data", JSON.stringify(contact));
}

function loadContactsFromStorage() {
  const contacts = localStorage.getItem("contact-data");
  return contacts ? JSON.parse(contacts) : [];
}
