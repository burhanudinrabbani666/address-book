let number = [
  {
    id: 1,
    fullname: "bani",
  },
  {
    id: 2,
    fullname: "agus",
  },
];

function updateNameById(numbers, id, newName) {
  const update = numbers.map((contact) => {
    if (contact.id === id) {
      return {
        ...contact,
        fullname: newName,
      };
    }
    return contact;
  });
  number = update;
  return update;
}
