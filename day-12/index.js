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
