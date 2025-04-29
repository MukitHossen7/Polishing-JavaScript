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

// অ্যারে থেকে শুধুমাত্র মিথ্যা মানগুলি বাদ দিয়ে একটি নতুন অ্যারে তৈরি করো ।

// const mixedArray = [0, "Hello", false, 42, "", null, "Mukit", undefined, NaN];
// const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];

// const filterArray = (mixedArray, falsyValues) => {
//   const filteredArray = mixedArray.filter(
//     (item) => !falsyValues.includes(item)
//   );
//   return filteredArray;
// };
// console.log(filterArray(mixedArray, falsyValues));

const mixedArray = [0, "Hello", false, 42, "", null, "Mukit", undefined, NaN];
const filterArray = (mixedArray) => {
  const filteredArray = mixedArray.filter((item) => Boolean(item));
  return filteredArray;
};
console.log(filterArray(mixedArray));
