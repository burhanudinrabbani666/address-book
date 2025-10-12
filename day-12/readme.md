## spread syntax

(...) focused for array

exm

        const numbers = [1, 2, 3, 4, 5];

        const continuedNumber = [...numbers, 6, 7, 8, 9, 10];

        console.log(continuedNumber); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]c

kalau di obect

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

## Java script global
