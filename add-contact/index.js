const addContactFormElement = document.getElementById("add-contact-form");

addContactFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(addContactFormElement);

  const newContactData = {
    fullName: formData.get("full-name").toString().trim(),
    phone: formData.get("phone").toString().trim(),
    email: formData.get("email").toString().trim(),
    company: formData.get("company")?.toString().trim() || null,
    birthdate: formData.get("birthdate")?.toString().trim() || null,
    address: formData.get("address")?.toString().trim() || null,
  };

  createdContact(newContactData);
});
