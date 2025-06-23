// const counter = {
//   count: 0,
//   increment: function (newCount) {
//     console.log((this.count += newCount));
//   },
// };

// counter.increment(1);
// counter.increment(2);
// counter.increment(3);
// counter.increment(4);
// counter.increment(5);

const counter = (newCount) => {
  let count = 0;
  return count + newCount;
};
console.log(counter(1));
console.log(counter(2));
console.log(counter(3));
console.log(counter(4));
console.log(counter(5));
