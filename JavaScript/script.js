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

const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const person1 = {
  firstName: "Mukit",
  lastName: "Hossen",
};

console.log(person.fullName.call(person1));
