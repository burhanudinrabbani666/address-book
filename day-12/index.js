function horizontalLine() {
  console.log(`\n`);
}

const members = [
  { name: "Alice", age: 35 },
  { name: "Bob", age: 40 },
  { name: "Cory", age: 25 },
  { name: "Dave", age: 30 },
  { name: "Eve", age: 28 },
];

const updatedMembers = [
  ...members,
  { name: "Frank", age: 29 },
  { name: "Grace", age: 32 },
];

console.log(updatedMembers);

horizontalLine();

const animal = {
  name: "Po",
  species: "Bear",
};

const updatedAnimal = {
  ...animal,
  species: "Cat",
  color: "White",
};

console.log(updatedAnimal);
// { name: "Po", species: "Cat", color: "White" }
horizontalLine();

console.log(`hello`.toUpperCase());

const matrix = [
  [
    [11, 12, 13],
    [21, 22, 23],
    [31, 32, 33],
  ],
  [
    [41, 42, 43],
    [51, 52, 53],
    [61, 62, 63],
  ],
  [
    [71, 72, 73],
    [81, 82, 83],
    [91, 92, 93],
  ],
];

console.log(matrix[0][1][2]); // 23
