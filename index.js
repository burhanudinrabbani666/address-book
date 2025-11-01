"use strict";
let dataGrops = ["Family", "Friends", "Work", "Gamers"];

let dataContacts = [
  {
    id: 1,
    fullName: "Burhanudin Rabbani",
    phone: "+62-1234-5678-999",
    email: "bani@exm.com",
    company: "",
    birthdate: "2002-11-14",
    address: "Jl. Prapatan No.09, Ciwaringin, Cirebon, Indonesia",
    Favourites: true,
    label: [dataGrops[0]],
  },
  {
    id: 2,
    fullName: "nico",
    phone: "+62-1234-7676-999",
    email: "nico@exm.com",
    company: "PT Kaldu Sari Nabati",
    birthdate: "2001-11-14",
    address: "Jl. Mawar No.04, Ligung, Majalengka, Indonesia",
    Favourites: true,
    label: [dataGrops[1], dataGrops[2]],
  },
  {
    id: 3,
    fullName: "Siti Rahmawati",
    phone: "+62-812-3456-7890",
    email: "siti.rahmawati@example.com",
    company: "CV Maju Jaya Abadi",
    birthdate: "1998-05-03",
    address: "Jl. Melati, Antapati, Bandung, Indonesia",
    Favourites: true,
    label: [dataGrops[1], dataGrops[3]],
  },
  {
    id: 4,
    fullName: "Budi Santoso bani",
    phone: "+62-856-9876-5544",
    email: "budi.santoso@ptmegah.co.id",
    company: "PT Megah Karya Sentosa",
    birthdate: "1995-02-21",
    address: "Jl. Kenaga No.07, Sukolilo, Surabaya, Indonesia",
    Favourites: true,
    label: dataGrops[1],
  },
  {
    id: 5,
    fullName: "Andi Pratama",
    phone: "+62-813-3344-2211",
    email: "andi.pratama@indotech.com",
    company: "IndoTech Global",
    birthdate: "2000-09-09",
    address: "Jl. Merpati No.01, Pondok Aren, Tangerang Selatan, Indonesia",
    favourited: true,
    label: [dataGrops[1], dataGrops[2]],
  },
];

function setInitialContacts() {
  const contacts = loadContactsFromStorage();
  const labels = loadGroups();

  if (contacts.length === 0) {
    saveToLocalStorage(dataContacts);
  }

  if (labels.length === 0) {
    saveGroups(dataGrops);
  }
}

function renderFilteredContacts(filteredContacts, label) {
  const mainContactElement = document.getElementById("main-contact");

  if (filteredContacts.length === 0) {
    mainContactElement.innerHTML = `
      <div class="text-center text-neutral-500 py-10">
        Tidak ada kontak dengan label <strong>${label}</strong>
      </div>
    `;
    return;
  }

  // Gunakan fungsi renderKeyDataContact() milikmu untuk render setiap kontak
  const contacts = filteredContacts.map(renderKeyDataContact).join("");
  mainContactElement.innerHTML = `
    <div class="flex flex-col">
      ${contacts}
    </div>
  `;

  // Refresh ikon Feather setelah update DOM
  feather.replace();
}

function renderLabelsData() {
  const loadLabels = loadGroups();
  const lablesElement = document.getElementById("labels");

  // render all labels button
  const labelsString = loadLabels
    .map((label) => {
      return renderLabels(label);
    })
    .join("");
  lablesElement.innerHTML = labelsString;

  const labelButton = document.querySelectorAll(".label-btn");
  labelButton.forEach((btn) => {
    const selectedLabel = btn.dataset.label;

    btn.addEventListener(`click`, () => {
      const filteredContacts = filteredContactByLabel(selectedLabel);
      renderFilteredContacts(filteredContacts, selectedLabel);
    });
  });
}

function renderLabels(label) {
  return `<button class="label-btn w-full h-auto flex items-center gap-4 px-4 font-semibold text-neutral-800 py-3 hover:bg-neutral-200 rounded-xl cursor-pointer transition"
  data-label="${label}"
  >
  <i data-feather="tag" width="16px" height="16px"></i>
  <sapn class="label-text">${label}</sapn>
  </button>`;
}

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
function renderKeyDataContacts() {
  setInitialContacts();

  const loadLocalStorage = loadContactsFromStorage();
  contactLength(loadLocalStorage);
  // ambil query
  const searchParams = new URLSearchParams(window.location.search);
  const query = searchParams.get("q");

  // const searchResult = searchContactByKeyData(query);
  // DOM
  const mainContactElement = document.getElementById("main-contact");

  // render if have query
  let contactsToRender = loadLocalStorage;
  if (query && query.trim() !== "") {
    contactsToRender = searchContactByKeyData(query);
    contactLength(contactsToRender);
  }

  if (contactsToRender.length === 0) {
    mainContactElement.innerHTML = `
      <div class="text-center text-neutral-500 py-10">No contacts found</div>
    `;
    return;
  }

  const localasString = contactsToRender
    .map((contact) => {
      return renderKeyDataContact(contact);
    })
    .join("");
  mainContactElement.innerHTML = `<div id ="contact" class = "flex flex-col ">
    ${localasString}
  </div>`;
  feather.replace();
}
function renderKeyDataContact(contact) {
  return `
    <div
    onclick="detailPage(${contact.id})"
    class="group flex justify-between py-5 px-5 border-b border-neutral-200 cursor-pointer hover:rounded-xl hover:bg-neutral-50 hover:shadow-md hover:transition duration-200">
      
      <p class="inline-block w-1/6 truncate text-neutral-900">${contact.fullName}</p>
      
      <!-- contact-->

      <div class="flex justify-around items-center w-1/6 truncate text-neutral-600 hover:text-blue-500 ">
        <span class="for-copy">${contact.phone}</span> 
        <button
        onclick="event.stopPropagation(); copyPhone(this)"
        class=" p-1 rounded cursor-pointer hover:bg-neutral-300"
        >
          <i data-feather="copy" class="w-3 h-3"></i>
        </button> 
      </div>
      <p class="inline-block w-1/6 truncate text-neutral-600 hover:text-blue-500">${contact.email}</p>

      <p class="inline-block w-1/6 truncate text-neutral-600">
      ${contact.label}
      </p>
      
      <div class="w-1/6 px-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" >
        
        <button 
        onclick="event.stopPropagation()"
        class="py-1 px-2.5 bg-neutral-50 rounded-xl hover:bg-white hover:shadow-md active:bg-neutral-300 ">
          <i data-feather="star" width="16px" height="16px"></i>
        </button>

        <a
        href="/edit-contact/?id=${contact.id}"
        class="py-1 px-2.5 bg-neutral-50 rounded-xl hover:bg-white hover:shadow-md active:bg-neutral-300 ">
          <i data-feather="edit-2" width="16px" height="16px"></i>
        </a>
        
        <button 
        onclick="event.stopPropagation(); deleteContactById(${contact.id})"
        class="py-1 px-2.5 bg-neutral-50 rounded-xl hover:bg-white hover:shadow-md active:bg-neutral-300 ">
          <i data-feather="trash" width="16px" height="16px"></i>
        </button>

      </div>
    </div>
  `;
}

function detailPage(id) {
  window.location.href = `/detail-contact/?id=${id}`;
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

    renderKeyDataContacts(updatedContacts);
    contactLength();
    feather.replace();
  }
}
function contactLength(dataContacts) {
  const contactsLength = document.getElementById("length");
  contactsLength.innerHTML = `(${dataContacts.length})`;
}

function copyPhone(button) {
  const phoneElement = button.parentElement.querySelector(".for-copy");
  const phoneText = phoneElement.textContent;

  navigator.clipboard
    .writeText(phoneText)
    .then(() => {
      console.log(`${phoneText} is copied`);
    })
    .catch((err) => {
      console.log(`failed to copied`, err);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  renderKeyDataContacts();
  renderLabelsData();
  feather.replace();
});

//TODO funtion favoourites and copy text
// copy text ✅
