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

const arr = [50, 100, 150, 200, 250, 300, 5];
// console.log(arr);
// console.log(arr.sort());
// const arr1 = arr.sort((a, b) => a - b);
// console.log(arr1);
// const min = arr1[0];
// console.log(min);
// const arr2 = arr.sort((a, b) => b - a);
// console.log(arr2);

const min = Math.min(...arr);
console.log(min);

function minNumber(arr) {
  // const min = arr.sort((a, b) => a - b)[0];
  // return min;
  let minimum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    if (min < minimum) {
      minimum = min;
    }
  }
  return minimum;
}
console.log(minNumber(arr));
