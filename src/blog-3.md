Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

First of all We know what does guards do, Protect anything from danger or security.
in typscript type guards used for this reason also.Type guards are particularly important when we’re working with variables that could be one of several types, such as a union type (string | number or User | Admin).

****Types of Type Guards and Their Use Cases***
1.typeof Type Guard
typeof operator checks the type of a variable for primitive types like string, number, or boolean.

****
function handleInput(input: string | number) {
  if (typeof input === "string") {
    console.log("String value:", input.toUpperCase());
  } else {
    console.log("Number value:", input.toFixed(2));
  }
}
****
2.instanceof Type Guard
****
class Animal { makeSound() { console.log("Some generic sound"); } }
class Dog extends Animal { bark() { console.log("Woof!"); } }

function interactWithAnimal(animal: Animal) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.makeSound();
  }
}
****
3.in Operator Type Guard

function interactWithPet(pet: Cat | Fish) {
  if ("meow" in pet) {
    pet.meow();
  } else {
    pet.swim();
  }
}

4.User-Defined Type Guards
5.null and undefined Type Guards