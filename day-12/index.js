/*
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


// JavaScript String
console.log(`Hello`.length); // 5 // menghitung banyaknya nilai

// Accessing Characters
const text = `hello`;

console.log(text[0]); // h // on point
console.log(text.charAt(1)); // e

console.log(text[text.length - 1]); // o //jumlah nilai = 5 dikurangi 1 =
console.log(text.charAt(text.length - 1)); // o // the last character

// String is immutable
let message = "Hello";
message[0] = "J"; // doesn't work
const newMessage = "la" + message[1]; // create new string -lae
console.log(newMessage);

// changing the character case
// bisa dipakai di fungsi pencarian
console.log(`Hello World!`.toLowerCase()); // hello world
console.log(`Hello World!`.toUpperCase()); // HELLO WORLD
// Jangan lupa tambahkan () setelah lower/uppercase nya.

//Searching for a substring

const name = `burhanudin`;
console.log(name.substring(1, 5)); // output urha
console.log(name.substring(1)); // urhanudin

// includes, starsWith, endWith
// return true or false

console.log("widget with id".includes(`widget`));
console.log(`hello`.includes(`sigma`));


let data = [
  {
    id: 1,
    name: `burhanudin rabbani`,
    phone: `123`,
  },
  {
    id: 2,
    name: `nuraisa`,
    phone: `786`,
  },
];

function validatePhone(newPhone) {
  if (data.phone.includes(newPhone)) {
    console.log(`invalid data ❎`);
  } else {
    console.log(`data valid ✅`);
  }
}

function addData(newName, newPhone) {
  validatePhone(newPhone);
}

addData(`burhanudin`, `123`); 

//split

const dateString = `20-12-2025`;
const dateArray = dateString.split(`, `);
console.log(dateArray);

const charcaterString = `bear, cat, virgin`;

//split by a comma followed space
const charctersArray = charcaterString.split(`, `);
console.log(charctersArray);

for (let character of charctersArray) {
  console.log(`A message to ${character}`);
}

const charctersArraySplit = charcaterString.split(", ", 1); // only bear
console.log(charctersArraySplit);
*/

// Number

const age = 30;

console.log(age.toString()); // "30"
console.log(age.toString(2)); // binary number

//to FIxed

const num = 3.14;

console.log(num.toFixed(1)); // 3.1
console.log(Math.trunc(num)); // 3
console.log(Math.floor(num)); // 3
console.log(Math.ceil(num)); // 4
console.log(Math.round(num)); // 3

// parseInt and parseFloat

const run = "100km";

console.log(parseInt(run)); // output 100
