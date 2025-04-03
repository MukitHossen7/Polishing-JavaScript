// console.log("Hello");

// JavaScript Statement
// let x = 5;
// console.log(x);

// let x => Declear
// = 5 => assign

// JavaScript Variables (var)
// var name = "Mukit";
// var name = "Sifat";
// name = "Joy";
// console.log(name);
// console.log(name);

// var name;
// name = "Mukit";
// console.log(name);

// sum();
// function sum() {
//   var x = 5;
//   console.log(x);
// }
// console.log(x);

// let x = 5;
// x = 6;
// console.log(x);

// {
//   let x = 5;
//   var y = 10;
//   console.log(x);
// }
// // console.log(x);
// console.log(y);

// let name;
// name = undefined;
// name = "Mukit";
// var name;
// console.log(name);

// const x = 5;
// {
//   const x = 10;
//   console.log(x);
// }
// console.log(x);

// let x = 5;
// x = 10;
// console.log(typeof undefined);

// name();
// function name() {
//   console.log("Hello");
// }
// let person = {
//   name: "Mukit",
//   age: 25,
//   greet: function () {
//     console.log("Hello, " + this.name);
//   },
// };

// console.log(person);

// let x = "Mukit";
// console.log(x);
// let y = new String("Mukit");
// console.log(y);

// let name = "Mukit";
// console.log(name.length);
// let text = "We,are,the,so-called,Vikings,from,the,north";
// console.log(text.slice(0, 2));
// console.log(text.substring(0, 2));
// console.log(text.split(","));
// console.log(text.includes("Mukit"));
// console.log(text.concat(" Vikings"));

// let x = "Mukit" * "5";
// console.log(x);

// console.log(isNaN("Mukit"));
// console.log(isNaN("5"));
// console.log(isNaN(5));
// console.log(typeof NaN);
// console.log(5 / 0);
// console.log(typeof Infinity);

// let x = 5;
// console.log(typeof x.toString());
// let x = 50.159655;
// console.log(x.toFixed(0));

// let x = "Mukit";
// console.log(Number(x));
// let x = 50.44545;
// console.log(parseInt(x));

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);
// console.log(arr.toString());
// console.log(typeof arr);
// console.log(Array.isArray(arr));
// console.log(arr[arr.length - 1]);

// const arr = ["Mukit", "Sifat", "Joy", "Rakib", "Rakib"];
// console.log(arr);
// const arr1 = arr.sort();
// console.log(arr1);
// console.log(arr);

// const arr = [50, 100, 150, 200, 250, 300, 5];
// console.log(arr);
// console.log(arr.sort());
// const arr1 = arr.sort((a, b) => a - b);
// console.log(arr1);
// const min = arr1[0];
// console.log(min);
// const arr2 = arr.sort((a, b) => b - a);
// console.log(arr2);

// const min = Math.min(...arr);
// console.log(min);

// function minNumber(arr) {
//   // const min = arr.sort((a, b) => a - b)[0];
//   // return min;
//   let minimum = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     let min = arr[i];
//     if (min < minimum) {
//       minimum = min;
//     }
//   }
//   return minimum;
// }
// console.log(minNumber(arr));

// const arr = [50, 100, 150, 200, 250, 300, 5];

// const newArr = arr.find((value) => value > 500);
// console.log(newArr);
// console.log(arr);

// const random = Math.floor(Math.random() * 10);
// console.log(random);
// console.log(Math.round(5.6));
// console.log(Math.ceil(5.4));
// console.log(Math.floor(5.9));
// console.log(Math.abs(-5.5));

// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// function countVowels(str) {
//   const strArr = str.split("");
//   const value = strArr.filter((value) => vowels.includes(value));
//   console.log(value);
// }
// countVowels("I love JavaScript");

// const numbers = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];
// const duplicated = numbers.filter((value, index) => {
//   return numbers.indexOf(value) !== index;
// });
// console.log(duplicated);
// function findDuplicate(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j] && i !== j) {
//         console.log(arr[i]);
//       }
//     }
//   }
// }
// findDuplicate(numbers);

// let x = 18;
// if (x > 18) {
//   console.log("You are eligible for vote");
// } else {
//   console.log("You are not eligible for vote");
// }

// var i = 5;
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log("This is outside " + i);
// let i = 5;
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log("This is outside " + i);

// const student = {
//   name: "Mukit",
//   age: 22,
//   course: "MERN Stack",
// };
// console.log(student);
// for (let studentKey in student) {
//   // console.log(studentKey);
//   console.log(student[studentKey]);
// }

// const messages = "Hello, I am Mukit";
// for (let message of messages) {
//   console.log(message);
// }
// const arr = [1, 2, 3, 4, 5, 6];
// for (let value of arr) {
//   console.log(value);
// }

// const arr = [1, 2, 3, 4, 5, 6];
// const message = "Hello, I am Mukit";
// let i = 0;
// while (i < message.length) {
//   console.log(message[i]);
//   i++;
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }
// const arr = [1, 2, 3, 4, 5, 6, 2, 3];
// console.log(arr);
// const newArr = new Set([...arr]);
// console.log(newArr);

// const map = new Map([
//   [25, "Mukit"],
//   ["age", 22],
//   ["course", "MERN Stack"],
// ]);
// console.log(map);
// const obj = {
//   name: "Mukit",
//   age: 22,
//   course: "MERN Stack",
// };
// console.log(obj);

// console.log(Number(" "));
// console.log(Number(" "));
// console.log(Number(" "));

// try {
//   console.log("Hello");
//   if (true) {
//     throw new Error("This is an error");
//   }
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("Finally");
// }

// let x = "hello";
// var name = "Mukit";

// {
//   let y = 10;
//   console.log(y);
// }
// console.log(y);

// function sum() {
//   var x = 5;
//   let y = 10;
//   console.log(y);
//   console.log(x);
// }

// sum();
// console.log(x);
// console.log(y);

// if (true) {
//   let x = 5;
//   console.log(x);
// }
// console.log(x);
// var name;
// console.log(name);
// name = "Mukit";
// console.log(name);
// console.log(name);
// let name = "mukit";
// console.log(name);

// name();
// function name() {
//   console.log("Hello");
// }
// name();
// var name = () => {
//   console.log("Hello");
// };

// console.log(this);
// const person = {
//   firstName: "Mukit",
//   lastName: "Hossen",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
// console.log(person);
// console.log(person.fullName());

// const person = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
// const person1 = {
//   firstName: "Mukit",
//   lastName: "Hossen",
// };

// console.log(person.fullName.call(person1));

// const name = () => {
//   console.log(this);
// };
// name();

// const person = {
//   name: "mukit",
//   greet: () => {
//     console.log(this.name);
//   },
// };
// person.greet();

// const person = {
//   age: 25,
//   greet: () => {
//     console.log(this.age);
//   },
// };

// person.greet(); // Output: undefined

// const person = {
//   age: 25,
//   greet: function () {
//     const innerFunction = () => {
//       console.log(this.age);
//     };
//     innerFunction();
//   },
// };

// person.greet(); // Output: Mukit

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(this.name + " " + this.age);
//   }
// }
// const mukit = new Person("Mukit", 20);
// const raje = new Person("raju", 25);
// mukit.greet();
// raje.greet();

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// const mukit = new Person("Mukit", 20);
// const raje = new Person("raju", 25);
// console.log(mukit);
// console.log(raje);

// const sentence =
//   "Learn with Sumit is all about teaching web development skills and techniques in an efficient and practical manner. If you are just getting started in web development, Learn with Sumit has all the tools you need to learn the newest and most popular technologies to covert you from a no stack to full stack developer. Learn with Sumit also deep dives into advanced topics using the latest best practices for you seasoned web developers.";

// console.log(sentence);
// const arr = sentence.split(" ");
// const sumitCount = arr.filter((value) => /sumit$/i.test(value)).length;
// console.log(`Sumit word have in the Sentences ${sumitCount}`);

// const firstSumitName = sentence.search(/sumit/i);
// console.log(`The first Sumit ${firstSumitName} - index`);

// const stringArray = ["me", "hello", "I love you", "love", "sentence"];
// function longestString(arr) {
//   let firstLength = 0;
//   let longest;
//   let longestWordIndex;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > firstLength) {
//       firstLength = arr[i].length;
//       longest = arr[i];
//       longestWordIndex = i;
//     }
//   }
//   console.log(longest);
//   console.log(longestWordIndex);
// }
// longestString(stringArray);

// function longestString(arr) {
//   let longestWord = "";
//   arr.forEach((element) => {
//     if (element.length > longestWord.length) {
//       longestWord = element;
//     }
//   });
//   console.log(longestWord);
// }

// longestString(stringArray);

// const falsyArray = [false, 0, "", null, undefined, NaN];
// const mixedArr = [
//   "lws",
//   undefined,
//   "learn with sumit",
//   false,
//   "",
//   "apple",
//   40,
//   "k",
//   true,
//   "Thanks all",
//   NaN,
// ];

// const trustyValue = mixedArr.filter((value) => !falsyArray.includes(value));
// console.log(trustyValue);

// function passedValue(x, y) {
//   x = x * 5;
//   return x * y;
// }
// const a = 8;
// const b = 5;
// const value = passedValue(a, b);
// console.log(value);
// console.log(a);

// function passedValue(x) {
//   x.num1 = x.num1 * 5;
//   return x.num1 * x.num2;
// }
// let a = {
//   num1: 8,
//   num2: 10,
// };
// const value = passedValue(a);
// console.log(value);
// console.log(a);

// function greet() {
//   console.log("Hello Mukit");
// }
// greet();

// const person = {
//   name: "Mukit",
//   greet: function () {
//     console.log("Hello", this.name);
//   },
// };
// person.greet();

// const person = {
//   fullName: function (para1) {
//     console.log(
//       `First name is ${this.firstName} and last name is ${this.lastName}.he is ${para1}`
//     );
//   },
// };
// const person1 = {
//   firstName: "Mukit",
//   lastName: "Hossen",
// };
// const person2 = {
//   firstName: "Raju",
//   lastName: "Hossen",
// };
// person.fullName.call(person2, "well");

// const person = {
//   fullName: function (para1) {
//     console.log(
//       `First name is ${this.firstName} and last name is ${this.lastName}.he is ${para1}`
//     );
//   },
// };
// const person1 = {
//   firstName: "Mukit",
//   lastName: "Hossen",
// };
// const person2 = {
//   firstName: "Raju",
//   lastName: "Hossen",
// };
// person.fullName.apply(person2, ["well"]);

// const numbers = [10, 50, 5, 90, 30];

// const maxNumber = Math.max.apply(null, numbers);
// console.log(maxNumber);

// let counter = 0;
// function add() {
//   let counter = 0;
//   counter += 1;
//   return counter;
// }

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(counter);

function add() {
  let counter = 0;
  function plus() {
    counter += 1;
  }
  plus();
  return counter;
}

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
