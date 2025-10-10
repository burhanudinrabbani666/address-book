const age = 18;

const accessAllowed = age > 18 ? true : false;
console.log(accessAllowed);

const points = 4000;
const rank =
  points < 100
    ? "noob"
    : points < 500
    ? "begginer"
    : points < 1000
    ? "mid"
    : points > 2000
    ? "pegangguran"
    : "your face look like jokowi";

console.log(rank);

console.log();

let backNumber;
console.log(backNumber ?? false);

let sockNumber = 0;

while (sockNumber <= 5) {
  console.log(sockNumber);
  sockNumber++;
}

console.log();

for (let sizeShirt = 0; sizeShirt < 5; sizeShirt++) {
  console.log(sizeShirt);
}
