// Spread Operator
const number = [1, 2, 3, 4, 5];
const continuedNumbers = [...number, 6, 7, 8, 9];
console.log(continuedNumbers);

const animal = {
  name: "po",
  species: "bear",
};

const updateAnimal = {
  ...animal,
  species: "Fish", // menumpuk data sebelumnya.
  color: "white",
};

// bisa buat bikin function edit
console.log(updateAnimal);

// spread array of object
let leaderBlockKarangwangi = [
  {
    id: 1,
    Name: "Nani",
    Age: 40,
    Gender: "Woman",
  },
  {
    id: 2,
    Name: "Dayat",
    Age: 30,
    Gender: "Man",
  },
];

// bisa buat function addContact
const updateLeaderBlockKarangwangi = [
  ...leaderBlockKarangwangi,
  {
    id: 3,
    Name: "Rivai",
    Age: 40,
    Gender: "Man",
  },
];

console.log(updateLeaderBlockKarangwangi);

function addLeaderBlockKarangwangi(leader) {
  const newId =
    leaderBlockKarangwangi.length > 0
      ? leaderBlockKarangwangi[leaderBlockKarangwangi.length - 1].id + 1
      : 1;

  const newLeader = { id: newId, ...leader };
  leaderBlockKarangwangi = [...leaderBlockKarangwangi, newLeader]; // pakai [] menambahkan object dalam aray

  console.log("✅ Add leader Success");
  console.log(leaderBlockKarangwangi);
}

addLeaderBlockKarangwangi({
  name: "Bani",
  Age: 22,
  Gender: "Man",
});
