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
let leadersBudur = [
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
  ...leadersBudur,
  {
    id: 3,
    Name: "Rivai",
    Age: 40,
    Gender: "Man",
  },
];
console.log(updateLeaderBlockKarangwangi);

function addleaderBudur(leader) {
  const newId =
    leadersBudur.length > 0 ? leadersBudur[leadersBudur.length - 1].id + 1 : 1;

  const newLeader = { id: newId, ...leader };
  leadersBudur = [...leadersBudur, newLeader]; // pakai [] menambahkan object dalam aray

  console.log("✅ Add leader Success");
  console.log(leadersBudur);
}

addleaderBudur({
  name: "Bani",
  Age: 22,
  Gender: "Man",
});
