const addContactFormElement = document.getElementById("add-contact-form");

addContactFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(addContactFormElement);

  const newContactData = {
    fullName: formData.get("full-name").toString(),
    phone: formData.get("phone").toString(),
    email: formData.get("email").toString(),
    company: formData.get("company").toString(),
    birthdate: formData.get("birthdate").toString(),
    address: formData.get("address").toString(),
  };
  console.log(newContactData);
});
