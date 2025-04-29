class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// console.log(bob);
// console.log(this);
// console.log(window === this); // true in browser, false in Node.js

class Child extends Person {
  constructor(age, name, greet) {
    super(age, name, greet);
  }
}
const baby = new Child("Ashiq", 32);
baby.greet();
const alice = new Person("Alice", 30);
alice.greet();
// console.log(alice);
const bob = new Person("Bob", 25);
