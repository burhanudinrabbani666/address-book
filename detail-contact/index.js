function renderDetailContactById(dataContacts, id) {
  const foundContact = dataContacts.find(
    (contact) => contact.id === Number(id)
  );

  const detailContainer = document.getElementById("detail-contact");

  if (!foundContact) {
    detailContainer.innerHTML = `
      <div class="text-center text-neutral-500 py-10">
        Contact not found
      </div>
    `;
    return;
  }

  detailContainer.innerHTML = renderDetailContact(foundContact);
  feather.replace();
}

function renderDetailContact(contact) {
  return `
    <div class="w-md min-h-auto bg-neutral-100">
      <div class="bg-whit e w-full max-w-md shadow-md rounded-2xl border border-neutral-200 p-6">
        <!-- Header -->
        <div class="flex items-center justify-between mb-5">
          <h2 class="text-2xl font-semibold text-neutral-800">Contact Detail</h2>
          <i data-feather="user" class="text-neutral-600"></i>
        </div>

        <!-- Body -->
        <div class="space-y-4 text-neutral-700">
          <div class="flex items-center gap-3">
            <i data-feather="user"></i>
            <span class="font-medium">${contact.fullName}</span>
          </div>
          <div class="flex items-center gap-3">
            <i data-feather="phone"></i>
            <span>${contact.phone}</span>
          </div>
          <div class="flex items-center gap-3">
            <i data-feather="mail"></i>
            <span>${contact.email}</span>
          </div>
          <div class="flex items-center gap-3">
            <i data-feather="briefcase"></i>
            <span>${contact.company || "-"}</span>
          </div>
          <div class="flex items-center gap-3">
            <i data-feather="calendar"></i>
            <span>${contact.birthdate || "-"}</span>
          </div>
          <div class="flex items-center gap-3">
            <i data-feather="map-pin"></i>
            <span>${contact.address || "-"}</span>
          </div>
        </div>

        <!-- Footer -->
        <div class="mt-6 flex justify-between">
        <div>
        <button
        onclick="editContactPage(${contact.id})"
        class="py-1 px-2.5 shadow rounded-xl hover:shadow-md/30 hover:bg-neutral-200 ">
          <i data-feather="edit-2" width="16px" height="16px"></i>
        </button>

        <button 
        onclick="deleteContactById(${contact.id})"
        class="py-1 px-2.5 shadow rounded-xl hover:shadow-md/30 hover:bg-neutral-200 ">
          <i data-feather="trash" width="16px" height="16px"></i>
        </button>
        </div>

          <a href="/" class="text-blue-600 hover:text-blue-800 font-medium transition">
            ← Back to Contacts
          </a>
        </div>
      </div>
    </div>
  `;
}

function deleteContactById(id) {
  const contacts = loadContactsFromStorage();
  const contactToDelete = contacts.find((contact) => contact.id == id);

  if (confirm(`Are you sure want to delete ${contactToDelete.fullName}?`)) {
    const updatedContacts = contacts.filter(
      (item) => Number(item.id) !== Number(id)
    );
    saveToLocalStorage(updatedContacts);
    alert(`✅ Successfully deleted contact: ${contactToDelete.fullName}`);

    window.location.href = `/`; // ?
  }
}

function editContactPage(id) {
  window.location.href = `/edit-contact/?id=${id}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const dataContacts = loadContactsFromStorage() || [];
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  renderDetailContactById(dataContacts, id);
});
