const counter = {
  count: 0,
  increment: function (newCount) {
    console.log((this.count += newCount));
  },
};

counter.increment(1);
counter.increment(2);
counter.increment(3);
counter.increment(4);
counter.increment(5);
