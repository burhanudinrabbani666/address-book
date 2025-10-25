const editContactFormElement = document.getElementById("edit-contact-form");

const params = new URLSearchParams(window.location.search);
const contactId = Number(params.get("id"));
const dataContacts = loadContactsFromStorage();

const contactToEdit = dataContacts.find((contact) => contact.id === contactId);

document.getElementById("full-name").value = contactToEdit.fullName || "";
document.getElementById("phone").value = contactToEdit.phone || "";
document.getElementById("email").value = contactToEdit.email || "";
document.getElementById("company").value = contactToEdit.company || "";
document.getElementById("birthdate").value = contactToEdit.birthdate || "";
document.getElementById("address").value = contactToEdit.address || "";

editContactFormElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const newName = document.getElementById("full-name").value.trim();
  const newPhone = document.getElementById("phone").value.trim();
  const newEmail = document.getElementById("email").value.trim();
  const newCompanyName = document.getElementById("company").value.trim();
  const newBirthdate = document.getElementById("birthdate").value;
  const newAddress = document.getElementById("address").value.trim();

  //function
  editedContact(
    dataContacts,
    contactId,
    newName,
    newPhone,
    newEmail,
    newCompanyName,
    newBirthdate,
    newAddress
  );

  alert("Contact Update successfully");
  window.location.href = "/";
});
