function saveToLocalStorage(contact) {
  localStorage.setItem("contact-data", JSON.stringify(contact));
}

function loadContactsFromStorage() {
  const load = localStorage.getItem("contact-data");
  return load ? JSON.parse(load) : [];
}
