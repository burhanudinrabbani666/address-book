// array literals
const numbers = [1, 2, 3, 4, 5];
const continuedNumbers = [...numbers, 6, 7, 8, 9];
console.log(continuedNumbers);

// object literals
const animal = {
  name: "Jhoni",
  species: "cat",
};
const newData = {
  ...animal,
  species: "dog", // can change data in object
  color: "brown",
};
console.log(newData);

//  array of object

let dataContacts = [
  {
    name: "bani",
    age: "23",
    phone: "+62-823-4567-8999",
  },
  {
    name: "nico",
    age: "25",
    phone: "+62-123-4567-8999",
  },
];

dataContacts = [
  //tidak perlu deklarasi karena menggunak variable let lagi
  ...dataContacts,
  {
    name: "agus",
    age: "24",
    phone: "+62-321-4321-6543",
  },
];

console.log(dataContacts);

// Rest parameter
const person = {
  fullName: "burhanudin rabbani",
  age: "22",
  role: "jungler",
};

const { age, ...personDetail } = person; // menghilangkan age
console.log(personDetail);

//reduce
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
} // .reduce artinya mengakumulasi. menjumlahkan semua nilai dalam array
console.log(sum(1, 2, 3, 4, 5)); // 15
